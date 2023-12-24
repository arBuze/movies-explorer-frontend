import './Register.css';
import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import LogoLink from '../LogoLink/LogoLink';

export default function Register(props) {
  return(
    <section className="register">
      <div className="register__container">
        <LogoLink />
        <h2 className="register__title">Добро пожаловать!</h2>
        <AuthForm buttonTitle="Зарегистрироваться">
          <label className="auth-form__item">
            Имя
            <input className="auth-form__input-item" type="text" name="name" id="name-input" required />
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
