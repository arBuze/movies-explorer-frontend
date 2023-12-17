import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { cards } from '../../utils/constants';

export default function Movies(props) {
  return(
    <>
      <SearchForm />
      <MoviesCardList cards={cards}/>
    </>
  );
}
