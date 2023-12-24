import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './LogoLink.css';  

export default function LogoLink() {
  return(
    <Link to="/" className="logo-link">
      <img className="logo-link__img" src={logo} alt="Логотип" />
    </Link>
  );
}
