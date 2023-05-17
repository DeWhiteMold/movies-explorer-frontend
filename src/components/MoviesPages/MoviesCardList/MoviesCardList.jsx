import './MoviesCardList.scss';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({cards}) {
  return (
    <ul className="movies-card-list">
      {
        cards && cards.map((movie) => {
          return <MoviesCard movie={movie} />
        })
      }
    </ul>
  )
}

export default MoviesCardList;