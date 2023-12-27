import { useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { renderPaths } from '../../utils/constants';
import LogoLink from '../LogoLink/LogoLink';

export default function Header({ isLoggedIn, onMenuButtonClick }) {
  const location = useLocation();

  return renderPaths.includes(location.pathname) && (
    <header className={`header ${(location.pathname === '/') ? "header_type_blue" : "" }`}>
      <div className="header__container">
        <LogoLink />
        <Navigation isLoggedIn={isLoggedIn}/>
        {
          isLoggedIn && <button className="header__menu-btn" onClick={onMenuButtonClick} />
        }
      </div>
    </header>
  );
}
