import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import LogoLink from '../LogoLink/LogoLink';
import { auth } from '../../utils/AuthApi';
import useFormValidation from '../../hooks/useFormValidation';
import { ERROR_TEXTS, NAME_REG } from '../../utils/constants';

export default function Register({ onRegister, onFailure }) {
  const navigate = useNavigate();
  const { values, errors, isValid, handleChange } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password, name } = values;

    if(!email || !password || !name) {
      return;
    }

    auth.register(email, password, name)
      .then((res) => {
        if (res?.error) {
          onFailure(ERROR_TEXTS.registerError);
          return;
        }
        return auth.authorize(email, password)
      })
      .then((data) => {
        if (data) {
          onRegister();
          navigate('/movies', { replace: true });
        } else {
          onFailure(ERROR_TEXTS.registerError);
        }
      })
      .catch((err) => {
        const errorText = err === 409 ? ERROR_TEXTS.sameEmailError : ERROR_TEXTS.registerError;
        onFailure(errorText);
        console.log(err);
      })
  }

  return(
    <section className="register">
      <div className="register__container">
        <LogoLink />
        <h2 className="register__title">Добро пожаловать!</h2>
        <AuthForm buttonTitle="Зарегистрироваться" name="register"
          emailValue={values.email} passwordValue={values.password}
          emailError={errors?.email} passwordError={errors?.password}
          onSubmit={handleSubmit} onChange={handleChange}
          isValid={isValid} >
          <label className="auth-form__item">
            Имя
            <input className={`auth-form__input-item ${errors.name ? 'error' : ''}`} type="text" name="name" id="name-input" required
              value={values.name ? values.name : ''} onChange={handleChange} minLength="2" maxLength="30" pattern={NAME_REG} />
          </label>
          <span className="auth-form__input-error name-input-error">{errors?.name}</span>
        </AuthForm>
        <p className="register__question">
          Уже зарегистрированы?
          <Link to="/signin" className="register__link">Войти</Link>
        </p>
      </div>
    </section>
  );
}
