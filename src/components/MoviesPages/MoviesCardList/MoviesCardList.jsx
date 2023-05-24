import './MoviesCardList.scss';
import MoviesCard from '../MoviesCard/MoviesCard';
import ExtraMoviesButton from '../ExtraMoviesButton/ExtraMoviesButton';
import { useEffect, useState } from 'react';


function MoviesCardList({movies, onLike, filter, isSearched}) {
  const [shownMovies, setShownMovies] = useState([])
  const [addedMovieAmoutn, setAddedMovieAmoutn] = useState(0)
  const [didMount, setDidMount] = useState(0);

  function handleAdd() {
    setShownMovies(current => [...current, ...movies.slice(shownMovies.length, shownMovies.length + addedMovieAmoutn)]);
  }

  useEffect(() => {
    setShownMovies(movies.slice(0, shownMovies.length))
  }, [movies])

  function mountMovies() {
    if (window.innerWidth > 1279) {
      setShownMovies(movies.slice(0, 12));
      setAddedMovieAmoutn(3)
    } else if (window.innerWidth > 767) {
      setShownMovies(movies.slice(0, 8));
      setAddedMovieAmoutn(2)
    } else {
      setShownMovies([movies.slice(0, 5)])
      setAddedMovieAmoutn(1)
    }
  }

  useEffect(() => {
    mountMovies()
  }, [filter])

  useEffect(() => {
    if (didMount < 3) {
      setDidMount(didMount + 1)
      mountMovies()
    }
  }, [movies])

  return (
    <>
      <ul className="movies-card-list">
        {
          shownMovies.length ? shownMovies.map((movie) => {
            return <MoviesCard movie={movie} onLike={onLike} key={movie.nameEN}/>
          }) : isSearched && <span className="movies-card-list__no-result-span">Ничего не найдено</span>
        }
      </ul>
      <ExtraMoviesButton show={shownMovies.length !== movies.length} onAdd={handleAdd}/>
    </>
  )
}

export default MoviesCardList;