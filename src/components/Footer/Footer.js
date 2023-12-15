import './Footer.css';

export default function Footer() {
  return(
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__copyright">
          <p className="footer__year">&copy; 2023</p>
          <ul className="footer__organizations">
            <li className="footer__organization">Яндекс.Практикум</li>
            <li className="footer__organization">Github</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
