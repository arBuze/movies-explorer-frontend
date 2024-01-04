import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import LogoLink from '../LogoLink/LogoLink';
import { auth } from '../../utils/AuthApi';
import useFormValidation from '../../hooks/useFormValidation';
import { ERROR_TEXTS } from '../../utils/constants';

export default function Login({ onLogin, onFailure }) {
  const navigate = useNavigate();
  const { values, errors, isValid, handleChange } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;

    if (!email || !password) {
      return;
    }

    auth.authorize(email, password)
      .then((data) => {
        if (data) {
          onLogin();
          navigate('/movies', { replace: true });
        }
      })
      .catch(err => {
        const errorText = err === 401 ? ERROR_TEXTS.wrongData : ERROR_TEXTS.authError;
        onFailure(errorText);
        console.log(err);
      });
  }

  return(
    <section className="login">
      <div className="login__container">
        <LogoLink />
        <h2 className="login__title">Рады видеть!</h2>
        <AuthForm buttonTitle="Войти" name="login"
          emailValue={values.email} passwordValue={values.password}
          emailError={errors?.email} passwordError={errors?.password}
          onSubmit={handleSubmit} onChange={handleChange}
          isValid={isValid} />
        <p className="login__question">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__link">Регистрация</Link>
        </p>
      </div>
    </section>
  );
}
