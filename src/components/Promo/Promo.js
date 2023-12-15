import './Promo.css';

export default function Promo() {
  return(
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p> {/* другое название для класса */}
        <a className="promo__button" href="#project">Узнать больше</a>
      </div>
    </section>
  );
}
