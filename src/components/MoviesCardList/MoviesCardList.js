import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RESOLUTION, VISIBLE_CARDS, CARDS_ADD } from '../../utils/constants';

export default function MoviesCardList({ isLoading, cards, isFailed, savedCards, onSaveClick, onDeleteClick, width }) {
  const location = useLocation();
  const maxCards = location.pathname === '/saved-movies' ? cards.length : width >= RESOLUTION.desktop ? VISIBLE_CARDS.max : width >= RESOLUTION.tablet ? VISIBLE_CARDS.mid : VISIBLE_CARDS.min;
  const cardsToAdd = width >= RESOLUTION.desktop ? CARDS_ADD.max : CARDS_ADD.min;
  const [cardsVisible, setCardsVisible] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState(0);

  useEffect(() => {
    setNumberOfCards(maxCards);
  }, [maxCards])

  useEffect(() => {
    setCardsVisible(cards.slice(0, numberOfCards));
  }, [numberOfCards, cards])

  function handleClick() {
    setNumberOfCards(numberOfCards + cardsToAdd);
  }

  return (
    <div className="movies">
      {
        isLoading ? <Preloader /> :
        isFailed ?
        <p className="movies__not-found">Ничего не найдено</p>
        :
        <ul className="movies__list">
          {
            cardsVisible.map((data) => {
              return(<MoviesCard key={location.pathname === '/movies' ? data.id : data.movieId} card={data} savedCards={savedCards}
                onSaveClick={onSaveClick} onDeleteClick={onDeleteClick} />)
            })
          }
        </ul>
      }
      { cards.length > cardsVisible.length &&
        <button className="movies__more-btn" type="button" onClick={handleClick}>Ещё</button>
      }
    </div>
  );
}
