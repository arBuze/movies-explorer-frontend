import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useState } from 'react';

export default function SearchForm({ onSearchClick, onFilter, isChecked }) {
  const { width } = useWindowDimensions();
  const [searchValue, setSearchValue] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setSearchValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearchClick(searchValue);
  }

  return(
    <form className="search-form" name="search" method="post" onSubmit={handleSubmit} noValidate>
      <div className="search-form__container">
        {
          width >= 768 &&
          <img className="search-form__search-icon" src={searchIcon} alt="Иконка поиска" />
        }
        <input className="search-form__film-input" type="text" name="search-input" required placeholder="Фильм" minLength="1" id="film-input"
          value={searchValue} onChange={handleChange} />
        <button className="search-form__submit-btn" type="submit" />
      </div>
      <FilterCheckbox onFilter={onFilter} isChecked={isChecked} />
    </form>
  );
}
