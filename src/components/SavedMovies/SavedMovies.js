import useFilter from '../../hooks/useFilter';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';

export default function SavedMovies({ cards, onSearchClick, isLoading, isFailed, onDeleteClick, resetShowCards, width }) {
  const [isShortsShown, setIsShortsShown] = useState(false);
  const cardsShown = useFilter(isShortsShown, cards);

  useEffect(() => {
    resetShowCards();
  }, [])

  function handleFilterClick() {
    setIsShortsShown(!isShortsShown);
  }

  return(
    <>
      <SearchForm onSearchClick={onSearchClick} onFilter={handleFilterClick}
        isChecked={isShortsShown} isLoading={isLoading}
        width={width} />
      <MoviesCardList cards={isShortsShown ? cardsShown : cards}
        isLoading={isLoading} isFailed={isFailed || (isShortsShown && cardsShown.length === 0)}
        onDeleteClick={onDeleteClick} width={width} />
    </>
  );
}
