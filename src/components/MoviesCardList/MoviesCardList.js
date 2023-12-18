import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList(props) {
  console.log(props.cards.length === 0);

  return (
    <section className="movies">
      <ul className="movies__list">
        {props.cards.map((data) => {
          return(<MoviesCard key={data._id} card={data} />)
        })}
      </ul>
      { props.cards.length > 0 &&
        <button className="movies__more-btn" type="button">Ещё</button>
      }
    </section>
  );
}
