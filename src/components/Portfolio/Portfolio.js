import './Portfolio.css'

export default function Portfolio() {
  return(
    <div className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://github.com/arBuze/how-to-learn" target="_blank">Статичный сайт<span className="portfolio__link-icon">↗</span></a>
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://github.com/arBuze/russian-travel" target="_blank">Адаптивный сайт<span className="portfolio__link-icon">↗</span></a>
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://github.com/arBuze/react-mesto-api-full-gha" target="_blank">Одностраничное приложение<span className="portfolio__link-icon">↗</span></a>
        </li>
      </ul>
    </div>
  );
}
