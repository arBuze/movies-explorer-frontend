import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import LogoLink from '../LogoLink/LogoLink';
import { auth } from '../../utils/AuthApi';
import useFormValidation from '../../hooks/useFormValidation';
import { ERROR_CODES, ERROR_TEXTS } from '../../utils/constants';

export default function Login({ onLogin, onFailure }) {
  const navigate = useNavigate();
  const { values, errors, isValid, handleChange } = useFormValidation();
  const [isAuthResponseLoading, setIsAuthResponseLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;

    if (!email || !password) {
      return;
    }

    setIsAuthResponseLoading(true);
    auth.authorize(email, password)
      .then((data) => {
        if (data) {
          onLogin();
          navigate('/movies', { replace: true });
        }
      })
      .catch(err => {
        const errorText = err === ERROR_CODES.auth ? ERROR_TEXTS.wrongData : ERROR_TEXTS.authError;
        onFailure(errorText);
        console.log(err);
      })
      .finally(() => {
        setIsAuthResponseLoading(false)
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
          isValid={isValid} isLoading={isAuthResponseLoading} />
        <p className="login__question">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__link">Регистрация</Link>
        </p>
      </div>
    </section>
  );
}
