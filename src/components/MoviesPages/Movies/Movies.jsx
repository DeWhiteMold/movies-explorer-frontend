import './Movies.scss';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ExtraMoviesButton from '../ExtraMoviesButton/ExtraMoviesButton';
import Footer from '../../Footer/Footer';

function Movies({cards}) {
  return (
    <div className="movies">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList cards={cards} />
      <ExtraMoviesButton show={true}/>
      <Footer />
    </div>
  )
}

export default Movies;