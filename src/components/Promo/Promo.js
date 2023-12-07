import NavTab from "../NavTab/NavTab";

export default function Promo(props) {
  return(
    <section className="promo">
      <div className="promo__info">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p> {/* другое название для класса */}
      </div>
      <NavTab />
    </section>
  );
}
