import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import AuthForm from '../AuthForm/AuthForm';
import LogoLink from '../LogoLink/LogoLink';
import { auth } from '../../utils/AuthApi';

export default function Login({ onLogin, onFailure }) {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formValue;

    if(!email || !password) {
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
        const errorText = err === 401 ? 'Вы ввели неправильный логин или пароль' : 'При авторизации произошла ошибка.';
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
          emailValue={formValue.email} passwordValue={formValue.password}
          onSubmit={handleSubmit} onChange={handleChange} />
        <p className="login__question">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__link">Регистрация</Link>
        </p>
      </div>
    </section>
  );
}
