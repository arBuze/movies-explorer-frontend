import './Promo.css';

export default function Promo() {
  return(
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info-container">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className="promo__button" href="#project">Узнать больше</a>
        </div>
        <div className="promo__img-container" />
      </div>
    </section>
  );
}
