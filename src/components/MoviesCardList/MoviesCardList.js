import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList(props) {
  return (
    <section className="movies">
      <ul className="movies__list">
        {props.cards.map((data) => {
          return(<MoviesCard key={data._id} card={data} />)
        })}
      </ul>
      <button className="movies__more-btn" type="button">Ещё</button>
    </section>
  );
}
