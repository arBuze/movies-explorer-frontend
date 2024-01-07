import { BASE_URL, MINUTES_IN_HOUR } from '../../utils/constants';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ card, savedCards, onSaveClick, onDeleteClick }) {
  const location = useLocation();
  const {
    nameRU,
    nameEN,
    duration,
    image,
    trailerLink,
    id,
    country,
    director,
    year,
    description,
  } = card;

  function translateTime() {
    const hours = Math.floor(duration / MINUTES_IN_HOUR);
    const minutes = duration - (hours * MINUTES_IN_HOUR);
    return `${hours ? `${hours}ч` : ''} ${minutes ? `${minutes}м` : ''}`
  }

  function handleSaveClick(e) {
    const isSaved = e.target.classList.contains('save');
    if (isSaved) {
      handleDeleteClick();
      return;
    }
    const thumbnail = BASE_URL + image.formats.thumbnail.url;
    onSaveClick({
      country,
      director,
      duration,
      year,
      description,
      image: BASE_URL + image.url,
      trailer: trailerLink,
      nameRU,
      nameEN,
      thumbnail,
      movieId: id
    });
  }

  function handleDeleteClick() {
    if (location.pathname === '/movies') {
      const movie = savedCards.filter((item) => item.movieId === id);
      onDeleteClick(movie[0]._id);
    } else {
      onDeleteClick(card._id);
    }
  }

  return (
    <li className="movies__list-item">
      <div className="movies__info-container">
        <div className="movies__film-info">
          <p className="movies__film-name">{nameRU}</p>
          <p className="movies__film-duration">{translateTime()}</p>
        </div>
        {
          location.pathname === '/saved-movies'
          ? <button className="movies__delete-btn" type="button" onClick={handleDeleteClick} />
          : <button className={`movies__save-btn ${savedCards.find((item) => item.movieId === id) ? 'save' : ''}`} type="button" onClick={handleSaveClick} />
        }
      </div>
      <a className="movies__trailer-link" href={trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="movies__film-image" src={location.pathname === '/movies' ? BASE_URL + image.url : image} alt={nameRU} />
      </a>
    </li>
  )
}
