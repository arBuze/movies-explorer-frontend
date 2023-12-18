import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { renderPaths } from '../../utils/constants';

export default function Header(props) {
  const location = useLocation();

  return renderPaths.includes(location.pathname) && (
    <header className={`header ${(location.pathname === '/') ? "header_type_blue" : "" }`}>
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img className="header__logo-img" src={logo} alt="Логотип" />
        </Link>
        <Navigation isLoggedIn={props.isLoggedIn}/>
        {
          props.isLoggedIn && <button className="header__menu-btn" onClick={props.onMenuButtonClick} />
        }
      </div>
    </header>
  );
}
