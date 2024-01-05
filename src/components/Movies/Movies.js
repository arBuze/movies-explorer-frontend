import useFilter from '../../hooks/useFilter';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { useEffect, useState } from 'react';

export default function Movies({ cards, onSearchClick, isLoading, isFailed, savedCards, onSaveClick, onDeleteClick, width }) {
  const [isShortsShown, setIsShortsShown] = useState(false);
  const cardsShown = useFilter(isShortsShown, cards);

  useEffect(() => {
    const isChecked = JSON.parse(localStorage.getItem('filter'));
    if (isChecked) {
      setIsShortsShown(isChecked);
    }
  }, [])

  function handleFilterClick() {
    setIsShortsShown(!isShortsShown);
    localStorage.setItem('filter', !isShortsShown);
  }

  return(
    <>
      <SearchForm onSearchClick={onSearchClick} onFilter={handleFilterClick}
        isChecked={isShortsShown} isLoading={isLoading}
        width={width} />
      <MoviesCardList cards={isShortsShown ? cardsShown : cards}
        isLoading={isLoading} isFailed={isFailed || (isShortsShown && cardsShown.length === 0)}
        savedCards={savedCards} onSaveClick={onSaveClick}
        onDeleteClick={onDeleteClick} width={width} />
    </>
  );
}
