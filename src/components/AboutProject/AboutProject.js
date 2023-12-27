import './AboutProject.css';

export default function AboutProject() {
  return(
    <section className="about-project" id="project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__info">
        <li className="about-project__item">
          <h3 className="about-project__fact">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__fact">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="about-project__limits">
        <li className="about-project__period">
          1 неделя
        </li>
        <li className="about-project__period">
          4 недели
        </li>
        <li className="about-project__period">
          <span className="about-project__work">Back-end</span>
        </li>
        <li className="about-project__period">
          <span className="about-project__work">Front-end</span>
        </li>
      </ul>
    </section>
  );
}
