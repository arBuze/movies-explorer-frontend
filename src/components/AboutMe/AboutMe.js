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
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="about-me__github-link" href="https://github.com/arBuze" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <img className="about-me__photo" src={studentPhoto} alt="Student" />
      </div>
      <Portfolio />
    </section>
  );
}
