import './MoviesCard.css';

export default function MoviesCard(props) {
  function handleSave(e) {
    e.target.classList.toggle('save');
  }

  return (
    <li className="movies__list-item">
      <div className="movies__info-container">
        <div className="movies__film-info">
          <p className="movies__film-name">{props.card.nameRU}</p>
          <p className="movies__film-duration">{props.card.duration}</p>
        </div>
        <button className="movies__save-btn" type="button" onClick={handleSave} />
      </div>
      <img className="movies__film-image" src={props.card.image} alt={props.card.nameRU} />
    </li>
  )
}
