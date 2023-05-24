import './Movies.scss';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../../Footer/Footer';
import { useEffect, useState } from 'react';
import moviesApi from '../../../utilits/MoviesApi';
import mainApi from '../../../utilits/MainApi';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterParams, setFilterParams] = useState(
    localStorage.getItem('MoviesParams') ? 
      JSON.parse(localStorage.getItem('MoviesParams')) : 
      { name: null, short: false}
  );
  const [isSearched, setIsSearced] = useState(false);

  function handleSearch(newParaps) {
    setIsSearced(true)
    filterMovies(newParaps)
  }

  function filterMovies(filterParams) {
    setFilterParams(filterParams)
    setIsLoading(true);
    let filteredMovies = [];
    filteredMovies = compeareMovies().filter(movie => 
      (filterParams.short ? movie.duration <= 40 : true) && ( movie.nameEN.toLowerCase().includes(filterParams.name) || movie.nameRU.toLowerCase().includes(filterParams.name) )
    )
    setMovies(filteredMovies);
    console.log();
    setIsLoading(false);
    localStorage.setItem('MoviesParams', JSON.stringify(filterParams))
  }

  function compeareMovies() {
    const compearedMovies = allMovies.map(movie => {
      const isLiked = savedMovies?.filter(savedMovie => savedMovie.movieId === movie.id)
      movie['isLiked'] = Boolean(isLiked.length);
      if (movie.isLiked) {
        const savedMovie = savedMovies.find(savedMovie => savedMovie.movieId === movie.id);
        savedMovie.isLiked = true
        return savedMovie;
      } else {
        return movie;
      }
    })
    return compearedMovies;
  }

  async function handleLike(movie) {
    if(movie.isLiked) {
      await mainApi.deleteMovie(movie._id)
        .then(() => {
          loadMovies()
        })
    } else {
      const newMovie = {
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        movieId: movie.id
      }
      await mainApi.addMovie(newMovie)
        .then(() => {
          loadMovies()
        })
    }
  }

  async function loadMovies() {
    let loadedMovies = [];
    let LoadedSavedMovies = [];
    await moviesApi.getMovies()
      .then(res => {
        loadedMovies = res
      })
    await mainApi.getMovies()
      .then(res => LoadedSavedMovies = res.data)
      setAllMovies(loadedMovies)
      setSavedMovies(LoadedSavedMovies)
  }

  useEffect(() => {
    setIsLoading(true);
    loadMovies()
    .then(() => {
      if(localStorage.getItem('MoviesParams')) {
        setFilterParams(filterParams)
      }
      setIsLoading(false)
    })
  }, [])

  useEffect(() => { filterMovies(filterParams) }, [savedMovies])

  return (
    <div className="movies">
      <SearchForm onSearch={handleSearch} movies={movies} filterParams={filterParams}/>
      {
        isLoading ? 
          <Preloader /> : 
          <MoviesCardList movies={movies} onLike={handleLike} filter={filterParams} isSearched={isSearched} />
      }
      <Footer />
    </div>
  )
}

export default Movies;