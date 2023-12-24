import './Login.css';
import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import LogoLink from '../LogoLink/LogoLink';

export default function Login(props) {
  return(
    <section className="login">
      <div className="login__container">
        <LogoLink />
        <h2 className="login__title">Рады видеть!</h2>
        <AuthForm buttonTitle="Войти" />
        <p className="login__question">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__link">Регистрация</Link>
        </p>
      </div>
    </section>
  );
}
