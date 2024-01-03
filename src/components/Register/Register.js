import './Register.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import AuthForm from '../AuthForm/AuthForm';
import LogoLink from '../LogoLink/LogoLink';
import { auth } from '../../utils/AuthApi';

export default function Register({ onRegister, onFailure }) {
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
    const { email, password, name } = formValue;

    if(!email || !password || !name) {
      return;
    }

    auth.register(email, password, name)
      .then((res) => {
        if (res.error) {
          onFailure('При регистрации пользователя произошла ошибка.');
          return;
        }
        return auth.authorize(email, password)
      })
      .then((data) => {
        if (data) {
          onRegister();
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        const errorText = err === 409 ? 'Пользователь с таким email уже существует.' : 'При регистрации пользователя произошла ошибка.';
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
          emailValue={formValue.email} passwordValue={formValue.password}
          onSubmit={handleSubmit} onChange={handleChange} >
          <label className="auth-form__item">
            Имя
            <input className="auth-form__input-item" type="text" name="name" id="name-input" required
              value={formValue.name} onChange={handleChange} minLength="2" maxLength="30" pattern="^[A-Za-zА-Яа-яЁё \-]+$" />
          </label>
          <span className="auth-form__input-error name-input-error"></span>
        </AuthForm>
        <p className="register__question">
          Уже зарегистрированы?
          <Link to="/signin" className="register__link">Войти</Link>
        </p>
      </div>
    </section>
  );
}
