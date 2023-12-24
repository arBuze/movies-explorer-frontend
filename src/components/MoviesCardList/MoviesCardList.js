import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Preloader from '../Preloader/Preloader';

export default function MoviesCardList({ isLoading, cards }) {
  const { width } = useWindowDimensions();
  const cardsVisible = width >= 1280 ? 12 : width >= 768 ? 8 : 5;
  /* const cardsToAdd = width >= 1280 ? 4 : 2; */

  return (
    <section className="movies">
      {
        isLoading ? <Preloader /> :
        cards.length === 0 ?
        <p className="movies__not-found">По данному запросу ничего не найдено</p>
        :
        <ul className="movies__list">
          {cards.slice(0, cardsVisible).map((data) => {
            return(<MoviesCard key={data.id} card={data} />)
          })}
        </ul>
      }
      { cards.length > cardsVisible &&
        <button className="movies__more-btn" type="button">Ещё</button>
      }
    </section>
  );
}
