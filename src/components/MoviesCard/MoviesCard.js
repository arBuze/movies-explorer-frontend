import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ card }) {
  const location = useLocation();
  const {
    nameRU,
    duration,
    image,
    trailerLink,
  } = card;

  function translateTime(time) {
    const hours = Math.floor(time / 60);
    const minutes = time - (hours * 60);
    return `${hours ? `${hours}ч` : ''} ${minutes ? `${minutes}м` : ''}`
  }

  function handleSave(e) {
    e.target.classList.toggle('save');
  }

  return (
    <li className="movies__list-item">
      <div className="movies__info-container">
        <div className="movies__film-info">
          <p className="movies__film-name">{nameRU}</p>
          <p className="movies__film-duration">{translateTime(duration)}</p>
        </div>
        {
          location.pathname === '/saved-movies'
          ? <button className="movies__delete-btn" type="button" />
          : <button className="movies__save-btn" type="button" onClick={handleSave} />
        }
      </div>
      <a className="movies__trailer-link" href={trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="movies__film-image" src={`https://api.nomoreparties.co${image.url}`} alt={nameRU} />
      </a>
    </li>
  )
}
