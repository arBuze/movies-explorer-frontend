import './AboutMe.css';
import studentPhoto from '../../images/student-photo.png';
import Portfolio from '../Portfolio/Portfolio';

export default function AboutMe() {
  return(
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <p className="about-me__student-name">Анна</p>
          <p className="about-me__status">Фронтенд-разработчик, 21 год</p>
          <p className="about-me__description">
          Я из Серпухова. Прохожу обучение на факультете информатики МАИ. Я люблю котов, мне нравится рисовать, играть и программировать.
          Затем поняла, что больше всего душа лежит к фронтенду. Это подтолкнуло меня к прохождению курса по веб-разработке.
          </p>
          <a className="about-me__github-link" href="https://github.com/arBuze" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <img className="about-me__photo" src={studentPhoto} alt="Student" />
      </div>
      <Portfolio />
    </section>
  );
}
