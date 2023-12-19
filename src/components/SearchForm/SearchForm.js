import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm(props) {


  function handleSubmit(e) {
    e.preventDefault();
  }

  return(
    <form className="search-form" name="search" method="post" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <img className="search-form__search-icon" src={searchIcon} alt="Иконка поиска" />
        <input className="search-form__film-input" type="text" name="search-input" required placeholder="Фильм" minLength="1" id="film-input" />
        <button className="search-form__submit-btn" type="submit" />
      </div>
      <FilterCheckbox />
    </form>
  );
}
