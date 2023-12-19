import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { cards } from '../../utils/constants';
import { useState } from 'react';

export default function Movies(props) {
  const [isLoading, setIsLoading] = useState(false);
  return(
    <>
      <SearchForm />
      <MoviesCardList cards={cards} isLoading={isLoading} />
    </>
  );
}
