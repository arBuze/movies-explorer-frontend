import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function SearchForm(props) {
  const { width } = useWindowDimensions();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return(
    <form className="search-form" name="search" method="post" onSubmit={handleSubmit}>
      <div className="search-form__container">
        {
          width >= 768 &&
          <img className="search-form__search-icon" src={searchIcon} alt="Иконка поиска" />
        }
        <input className="search-form__film-input" type="text" name="search-input" required placeholder="Фильм" minLength="1" id="film-input" />
        <button className="search-form__submit-btn" type="submit" />
      </div>
      <FilterCheckbox />
    </form>
  );
}
