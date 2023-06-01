import './SavedMovies.scss';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../../Footer/Footer';
import { useEffect, useState } from 'react';
import mainApi from '../../../utilits/MainApi';

function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterParams, setFilterParams] = useState({ name: '', short: false});
  const [isSearched, setIsSearced] = useState(false);

  function handleSearch(newParaps) {
    setIsSearced(true)
    filterMovies(newParaps)
  }

  function filterMovies(filterParams) {
    setIsLoading(true);
    let filteredMovies = [];
    filteredMovies = savedMovies.filter(movie => 
      (filterParams.short ? movie.duration <= 40 : true) && ( movie.nameEN.toLowerCase().includes(filterParams.name) || movie.nameRU.toLowerCase().includes(filterParams.name) )
    )
    setMovies(filteredMovies);
    setIsLoading(false);
  }

  async function handleDelete(movie) {
    await mainApi.deleteMovie(movie._id)
      .then((res) => {
        loadMovies();
      })
  }

  async function loadMovies() {
    setIsLoading(true)
    await mainApi.getMovies()
      .then((res) => {
        const savedMovies = res.data.map((movie) => {
          movie['isLiked'] = true;
          return movie
        })
        setSavedMovies(savedMovies)
      })
      .finally(setIsLoading(false))
  }

  useEffect(() => {
    setIsLoading(true)
    loadMovies()
      .then(() => {
        setFilterParams(filterParams)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => { filterMovies(filterParams) }, [savedMovies])

  return (
    <div className="saved-movies">
      <SearchForm  onSearch={handleSearch} movies={movies} filterParams={filterParams}/>
      {
        isLoading ? 
          <Preloader /> :
          <MoviesCardList movies={movies} filter={filterParams} onLike={handleDelete} isSearched={isSearched} />
      }
      <Footer />
    </div>
  )
}

export default SavedMovies;