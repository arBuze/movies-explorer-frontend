import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { useEffect, useState } from 'react';

export default function Movies({ cards, onSearchClick, isLoading, isFailed, savedCards, onSaveClick, onDeleteClick }) {
  const [isShortsShown, setIsShortsShown] = useState(false);
  const [cardsShown, setCardsShown] = useState([]);

  useEffect(() => {
    const isChecked = JSON.parse(localStorage.getItem('filter'));
    if (isChecked) {
      setIsShortsShown(isChecked);
    }
  }, [])

  useEffect(() => {
    if (isShortsShown) {
      const filteredCards = cards.filter((item) => (item.duration <= 40))
      setCardsShown(filteredCards);
    }
  }, [isShortsShown, cards])

  function handleFilterClick() {
    setIsShortsShown(!isShortsShown);
    localStorage.setItem('filter', !isShortsShown);
  }

  return(
    <>
      <SearchForm onSearchClick={onSearchClick} onFilter={handleFilterClick}
        isChecked={isShortsShown} isLoading={isLoading} />
      <MoviesCardList cards={isShortsShown ? cardsShown : cards}
        isLoading={isLoading} isFailed={isFailed}
        savedCards={savedCards} onSaveClick={onSaveClick}
        onDeleteClick={onDeleteClick} />
    </>
  );
}
