import './MenuPopup.css';
import { Link, NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function MenuPopup(props) {

  return(
    <div className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button className="popup__close-btn" type="button" onClose={props.onMenuClose} />
        <nav className="popup__menu">
          <ul className="popup__menu-links">
            <li className="popup__menu-item">
              <NavLink to="/movies" className={({isActive}) => `popup__menu-link ${isActive ? "popup__menu-link_active" : ""}`} >
                Фильмы
              </NavLink>
            </li>
            <li className="popup__menu-item">
              <NavLink to="/saved-movies" className={({isActive}) => `popup__menu-link ${isActive ? "popup__menu-link_active" : ""}`} >
                Сохраненные фильмы
              </NavLink>
            </li>
            <li className="popup__menu-item">
              <Link to="/profile" className="navigation__profile-link">
                <span className="popup__profile-name">Аккаунт</span>
                <div className="popup__profile-icon" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
