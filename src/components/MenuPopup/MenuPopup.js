import './MenuPopup.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { RESOLUTION } from '../../utils/constants';

export default function MenuPopup({ isOpen, onClose, width }) {

  useEffect(() => {
    if (isOpen) return;
    function handleEscapeClose(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscapeClose);
    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (width >= RESOLUTION.laptop && isOpen) {
      onClose();
    }
  },[width, isOpen, onClose]);

  function handleOverlayClose(e) {
    if (e.target === e.currentTarget && isOpen) {
      onClose();
    }
  }

  return(
    <div className={`popup popup_type_menu ${isOpen ? "popup_opened" : ""}`} onClick={handleOverlayClose}>
      <div className={`popup__container popup__container_type_menu ${isOpen ? "popup__container_visible" : ""}`}>
        <button className="popup__close-btn popup__close-btn_type_menu" type="button" onClick={onClose} />
        <nav className="popup__menu">
          <ul className="popup__menu-links">
            <li className="popup__menu-item">
              <NavLink to="/"
                className={({isActive}) => `popup__menu-link ${isActive ? "popup__menu-link_active" : ""}`}
                onClick={onClose} >
                  Главная
              </NavLink>
            </li>
            <li className="popup__menu-item">
              <NavLink to="/movies"
                className={({isActive}) => `popup__menu-link ${isActive ? "popup__menu-link_active" : ""}`}
                onClick={onClose} >
                  Фильмы
              </NavLink>
            </li>
            <li className="popup__menu-item">
              <NavLink to="/saved-movies"
                className={({isActive}) => `popup__menu-link ${isActive ? "popup__menu-link_active" : ""}`}
                onClick={onClose} >
                  Сохранённые фильмы
              </NavLink>
            </li>
            <li className="popup__menu-item">
              <NavLink to="/profile"
                className={({isActive}) => `popup__profile-link ${isActive ? "popup__profile-link_active" : ""}`}
                onClick={onClose} >
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
