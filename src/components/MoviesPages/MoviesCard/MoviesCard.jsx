import './MoviesCard.scss';
import { timeConverter } from '../../../utilits/timeConverter';
import { useLocation } from 'react-router-dom';

function MoviesCard({movie}) {
  const isSavedMoviePage = useLocation().pathname === '/saved-movies';
  const duration = timeConverter(movie.duration);

  return (
    <li className={`movies-card ${isSavedMoviePage ? 'movies-card_saved' : ''}`}>
      <div className="movies-card__picture" style={{backgroundImage: `url(${movie.img})`}}>
        <button type="button" className={`movies-card__save-btn ${movie.saved ? 'movies-card__save-btn_saved' : 'movies-card__save-btn_not-saved'}`}>
          { !movie.saved && 'Сохранить' }
        </button>
      </div>
      <div className="movies-card__subscription">
        <span className="movies-card__name">{movie.name}</span>
        <span className="movies-card__duration">{duration}</span>
      </div>
    </li>
  )
}

export default MoviesCard;