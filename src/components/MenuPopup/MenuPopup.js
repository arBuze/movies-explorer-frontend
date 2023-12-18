import './MenuPopup.css';
import { NavLink } from 'react-router-dom';

export default function MenuPopup(props) {

  return(
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container ${props.isOpen ? "popup__container_visible" : ""}`}>
        <button className="popup__close-btn" type="button" onClick={props.onClose} />
        <nav className="popup__menu">
          <ul className="popup__menu-links">
            <div className="popup__links-container">
              <li className="popup__menu-item">
                <NavLink to="/"
                  className={({isActive}) => `popup__menu-link ${isActive ? "popup__menu-link_active" : ""}`}
                  onClick={props.onClose} >
                    Главная
                </NavLink>
              </li>
              <li className="popup__menu-item">
                <NavLink to="/movies"
                  className={({isActive}) => `popup__menu-link ${isActive ? "popup__menu-link_active" : ""}`}
                  onClick={props.onClose} >
                    Фильмы
                </NavLink>
              </li>
              <li className="popup__menu-item">
                <NavLink to="/saved-movies"
                  className={({isActive}) => `popup__menu-link ${isActive ? "popup__menu-link_active" : ""}`}
                  onClick={props.onClose} >
                    Сохранённые фильмы
                </NavLink>
              </li>
            </div>
            <li className="popup__menu-item">
              <NavLink to="/profile"
                className={({isActive}) => `popup__profile-link ${isActive ? "popup__profile-link_active" : ""}`}
                onClick={props.onClose} >
                  <span className="popup__profile-name">Аккаунт</span>
                  <div className="popup__profile-icon" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
