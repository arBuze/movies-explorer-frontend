import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

export default function SavedMovies({ cards }) {
  return(
    <>
      <SearchForm />
      <MoviesCardList cards={cards}/>
    </>
  );
}
