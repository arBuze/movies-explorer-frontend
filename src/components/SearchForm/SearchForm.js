import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';

export default function SearchForm({ onSearchClick, onFilter, isChecked, isLoading }) {
  const { width } = useWindowDimensions();
  const { values, setValues, errors, handleChange, isValid } = useFormValidation();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/movies') {
      const request = localStorage.getItem('request');
      if (request) {
        setValues({
          search: request
        });
      }
    }
  }, [location.pathname])

  function handleSubmit(e) {
    e.preventDefault();
    onSearchClick(values.search);
  }

  return(
    <form className="search-form" name="search-form" method="post" onSubmit={handleSubmit} noValidate>
      <div className="search-form__container">
        {
          width >= 768 &&
          <img className="search-form__search-icon" src={searchIcon} alt="Иконка поиска" />
        }
        <input className="search-form__film-input" type="text" name="search" required placeholder="Фильм" minLength="1" id="film-input"
          value={values.search ? values.search : ''} onChange={handleChange} />
        <button className="search-form__submit-btn" type="submit" disabled={isLoading || !isValid} />
      </div>
      <span className="search-form__error search-input-error">{errors.search}</span>
      <FilterCheckbox onFilter={onFilter} isChecked={isChecked} />
    </form>
  );
}
