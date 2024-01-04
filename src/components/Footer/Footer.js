import './Footer.css';
import { useLocation } from 'react-router-dom';
import { RENDER_PATHS } from '../../utils/constants';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Footer() {
  const location = useLocation();
  const { width } = useWindowDimensions();

  return RENDER_PATHS.slice(0, 3).includes(location.pathname) && (
    <footer className={`footer ${width < 1280 ? "footer_type_light" : ""}`}>
      <div className="footer__container">
        <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__copyright">
          <p className={`footer__year ${width < 768 ? "footer__year_type_light" : ""}`}>&copy;2023</p>
          <ul className="footer__organizations">
            <li className="footer__organization">Яндекс.Практикум</li>
            <li className="footer__organization">Github</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
