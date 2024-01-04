import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesCardList({ isLoading, cards, isFailed, savedCards, onSaveClick, onDeleteClick }) {
  const { width } = useWindowDimensions();
  const location = useLocation();
  const maxCards = location.pathname === '/saved-movies' ? cards.length : width >= 1280 ? 12 : width >= 768 ? 8 : 5;
  const cardsToAdd = width >= 1280 ? 3 : 2;
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
