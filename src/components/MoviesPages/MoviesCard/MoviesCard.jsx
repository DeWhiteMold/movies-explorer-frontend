import './MoviesCard.scss';
import { timeConverter } from '../../../utilits/timeConverter';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

function MoviesCard({movie, onLike}) {
  const buttonRef = useRef();
  const isSavedMoviePage = useLocation().pathname === '/saved-movies';
  const duration = timeConverter(movie.duration);

  function handleMovieLike() {
    onLike(movie)
    movie.isLiked = true;
  }
  function openTrailer(e) {
    if (e.target !== buttonRef.current) {
      window.open(movie.trailerLink, '_blank').focus()
    }
  }

  return (
    <li className={`movies-card ${isSavedMoviePage ? 'movies-card_saved' : ''}`}>
      <div className="movies-card__picture" onClick={openTrailer}
        style={{backgroundImage: `url(${movie?.image.url ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image})`}}
      >
        <button type="button" onClick={handleMovieLike} ref={buttonRef}
          className={`movies-card__save-btn ${movie.isLiked ? 'movies-card__save-btn_saved' : 'movies-card__save-btn_not-saved'}`}
        >
          { !movie.isLiked && 'Сохранить' }
        </button>
      </div>
      <div className="movies-card__subscription">
        <span className="movies-card__name">{movie.nameRU}</span>
        <span className="movies-card__duration">{duration}</span>
      </div>
    </li>
  )
}

export default MoviesCard;