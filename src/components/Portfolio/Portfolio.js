import './Portfolio.css'

export default function Portfolio() {
  return(
    <div className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://arbuze.github.io/how-to-learn/" target="_blank" rel="noopener noreferrer">Статичный сайт<span className="portfolio__link-icon">↗</span></a>
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://arbuze.github.io/russian-travel/" target="_blank" rel="noopener noreferrer">Адаптивный сайт<span className="portfolio__link-icon">↗</span></a>
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://arbuze.github.io/react-mesto-auth/" target="_blank" rel="noopener noreferrer">Одностраничное приложение<span className="portfolio__link-icon">↗</span></a>
        </li>
      </ul>
    </div>
  );
}
