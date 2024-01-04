import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';

export default function SavedMovies({ cards, onSearchClick, isLoading, isFailed, onDeleteClick, resetShowCards }) {
  const [isShortsShown, setIsShortsShown] = useState(false);
  const [cardsShown, setCardsShown] = useState([]);

  useEffect(() => {
    resetShowCards();
  }, [])

  useEffect(() => {
    if (isShortsShown) {
      const filteredCards = cards.filter((item) => (item.duration <= 40))
      setCardsShown(filteredCards);
    }
  }, [isShortsShown, cards])

  function handleFilterClick() {
    setIsShortsShown(!isShortsShown);
  }

  return(
    <>
      <SearchForm onSearchClick={onSearchClick} onFilter={handleFilterClick} isChecked={isShortsShown}
        isLoading={isLoading} />
      <MoviesCardList cards={isShortsShown ? cardsShown : cards} isLoading={isLoading} isFailed={isFailed} onDeleteClick={onDeleteClick} />
    </>
  );
}
