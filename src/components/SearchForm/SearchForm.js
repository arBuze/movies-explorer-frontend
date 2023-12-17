import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';

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
      <div className="search-form__switch-container">
        <label className="search-form__switch-label">
          <input  className="search-form__switch" type="checkbox" name="shorts" id="shorts" />
          <span className="search-form__pseudo-switch"></span>
          Короткометражки
        </label>
      </div>
    </form>
  );
}
