import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { useEffect, useState } from 'react';

export default function Movies({ cards, onSearchClick, isLoading, isFailed }) {
  const [isShortsShown, setIsShortsShown] = useState(false);
  const [cardsShown, setCardsShown] = useState([]);

  useEffect(() => {
    if (isShortsShown) {
      const filteredCards = cards.filter((item) => (item.duration <= 40))
      setCardsShown(filteredCards);
    }
  }, [isShortsShown, cards])

  function handleFilterClick(e) {
    setIsShortsShown(!isShortsShown);
  }

  return(
    <>
      <SearchForm onSearchClick={onSearchClick} onFilter={handleFilterClick} isChecked={isShortsShown} />
      <MoviesCardList cards={isShortsShown ? cardsShown : cards} isLoading={isLoading} isFailed={isFailed} />
    </>
  );
}
