import './SavedMovies.scss';
import Header from '../../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ExtraMoviesButton from '../ExtraMoviesButton/ExtraMoviesButton';
import Footer from '../../Footer/Footer';

function SavedMovies({cards}) {
  const savedCards = cards.filter((card) => {
    if(card.saved) {
      return card
    }
  })

  console.log(savedCards);

  return (
    <div className="saved-movies">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList cards={savedCards} />
      <ExtraMoviesButton show={false}/>
      <Footer />
    </div>
  )
}

export default SavedMovies;