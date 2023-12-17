import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import AuthForm from '../AuthForm/AuthForm';

export default function Login(props) {
  return(
    <section className="login">
      <div className="login__container">
        <Link to="/" className="login__logo-link">
          <img className="login__logo-img" src={logo} alt="Логотип" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <AuthForm buttonTitle="Войти" />
        <p className="login__question">
          Ещё не зарегистрированы?
          <Link to="/signin" className="login__link">Регистрация</Link>
        </p>
      </div>
    </section>
  );
}
