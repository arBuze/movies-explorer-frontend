import './Footer.css';
import { useLocation } from 'react-router-dom';
import { RENDER_PATHS, RESOLUTION } from '../../utils/constants';

export default function Footer({ width }) {
  const location = useLocation();

  return RENDER_PATHS.slice(0, 3).includes(location.pathname) && (
    <footer className={`footer ${width < RESOLUTION.desktop ? "footer_type_light" : ""}`}>
      <div className="footer__container">
        <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__copyright">
          <p className={`footer__year ${width < RESOLUTION.tablet ? "footer__year_type_light" : ""}`}>&copy;2023</p>
          <ul className="footer__organizations">
            <li className="footer__organization">
              <a className="footer__organization-link" href="https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__organization">
              <a className="footer__organization-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
