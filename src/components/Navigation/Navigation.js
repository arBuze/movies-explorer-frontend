import './Navigation.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Navigation({ isLoggedIn }) {
  const location = useLocation();
  const { width } = useWindowDimensions();

  return(
    <nav className="navigation">
        <ul className="navigation__links">
          {
            isLoggedIn ? width >= 1024 &&
            <>
              <li className="navigation__item">
                <NavLink to="/movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`} >
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink to="/saved-movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`} >
                  Сохранённые фильмы
                </NavLink>
              </li>
              <li className="navigation__item">
                <Link to="/profile" className="navigation__profile-link">
                  <span className="navigation__profile-name">Аккаунт</span>
                  <div className={`navigation__profile-icon ${!(location.pathname === '/') ? "navigation__profile-icon_type_light" : ""}`} />
                </Link>
              </li>
            </>
            :
            (!isLoggedIn) &&
            <>
              <li className="navigation__auth-item">
                <Link to="/signup" className="navigation__auth-link">Регистрация</Link>
              </li>
              <li className="navigation__auth-item">
                <Link to="/signup" className="navigation__auth-link">Войти</Link>
              </li>
            </>
          }
        </ul>
      </nav>
  );
}
