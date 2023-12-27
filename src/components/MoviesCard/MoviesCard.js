import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ card }) {
  const location = useLocation();
  const {
    nameRU,
    duration,
    image
  } = card;

  function handleSave(e) {
    e.target.classList.toggle('save');
  }

  return (
    <li className="movies__list-item">
      <div className="movies__info-container">
        <div className="movies__film-info">
          <p className="movies__film-name">{nameRU}</p>
          <p className="movies__film-duration">{duration}</p>
        </div>
        {
          location.pathname === '/saved-movies'
          ? <button className="movies__delete-btn" type="button" />
          : <button className="movies__save-btn" type="button" onClick={handleSave} />
        }
      </div>
      <img className="movies__film-image" src={image} alt={nameRU} />
    </li>
  )
}
