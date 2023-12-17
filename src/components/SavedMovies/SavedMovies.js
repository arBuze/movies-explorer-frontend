import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { cards } from '../../utils/constants';

export default function SavedMovies(props) {
  return(
    <>
      <SearchForm />
      <MoviesCardList cards={cards}/>
    </>
  );
}
