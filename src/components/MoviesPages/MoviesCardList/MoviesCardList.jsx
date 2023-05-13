import './MoviesCardList.scss';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({cards}) {
  return (
    <section className="movies-card-list">
      {
        cards && cards.map((movie) => {
          return <MoviesCard movie={movie} />
        })
      }
    </section>
  )
}

export default MoviesCardList;