import { useEffect, useState } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ card, savedCards, onSaveClick, onDeleteClick }) {
  const baseUrl = 'https://api.nomoreparties.co';
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
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (location.pathname === '/movies') {
      const status = savedCards.find((item) => item.movieId === id);
      setIsSaved(status);
    }
  }, [savedCards, location.pathname, id])

  function translateTime() {
    const hours = Math.floor(duration / 60);
    const minutes = duration - (hours * 60);
    return `${hours ? `${hours}ч` : ''} ${minutes ? `${minutes}м` : ''}`
  }

  function handleSaveClick() {
    if (isSaved) {
      handleDeleteClick();
      return;
    }
    const thumbnail = baseUrl + image.formats.thumbnail.url;
    onSaveClick({
      country,
      director,
      duration,
      year,
      description,
      image: baseUrl + image.url,
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
          : <button className={`movies__save-btn ${isSaved ? 'save' : ""}`} type="button" onClick={handleSaveClick} />
        }
      </div>
      <a className="movies__trailer-link" href={trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="movies__film-image" src={location.pathname === '/movies' ? baseUrl + image.url : image} alt={nameRU} />
      </a>
    </li>
  )
}
