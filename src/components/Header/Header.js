import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/profile-icon.svg';

export default function Header(props) {
  return(
    <header className="header">
      <nav className="header__navigation">
        <ul className="header__navigation-items">
          <li className="header__navigation-item">
            <Link to="/" className="header__logo-link">
              <img className="header__logo-img" src={logo} alt="Логотип" />
            </Link>
          </li>
          {
            props.isLoggedIn &&
            <li className="header__navigation-item">
              <NavLink to="/movies" className={({isActive}) => `header__nav-link ${isActive ? "header__nav-link_active" : ""}`} >
                Фильмы
              </NavLink>
              <NavLink to="/saved-movies" className={({isActive}) => `header__nav-link ${isActive ? "header__nav-link_active" : ""}`} >
                Сохраненные фильмы
              </NavLink>
            </li>
          }
          <li className="header__navigation-item">
            {
              props.isLoggedIn ?
                <>
                  <Link to="/profile" className="header__profile-link">
                    <span className="header__profile-name">Аккаунт</span>
                    <img className="header__profile-icon" src={profileIcon} alt="Иконка пользователя" />
                  </Link>
                  <button className="header__menu-btn" />
                </>
              :
                <div className="header__auth-links">
                  <Link to="/signup" className="header__auth-link">Регистрация</Link>
                  <Link to="/signup" className="header__auth-link">Войти</Link>
                </div>
            }
          </li>
        </ul>
      </nav>
    </header>
  );
}
