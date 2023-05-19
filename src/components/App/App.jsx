import './App.scss';
import '../MainPage/Main/Main';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Main from '../MainPage/Main/Main';
import Movies from '../MoviesPages/Movies/Movies';
import SavedMovies from '../MoviesPages/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../AuthPages/Register/Register';
import Login from '../AuthPages/Login/Login';
import { cards, user } from './tempruaryData';

function App() {
  const [isMenuOpen, setIsMenuOpne] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Header onMenuClick={() => {setIsMenuOpne(state => !state)}}/>
        <main className="main">
        <Routes>
          <Route path='*' element ={ <NotFoundPage /> } />
          <Route path='/' element={ <Main /> } />
          <Route path='/movies' element={ <Movies cards={cards} /> } />
          <Route path='/saved-movies' element={ <SavedMovies cards={cards} /> } />
          <Route path='/profile' element={ <Profile user={user}/> } />
          <Route path='/signup' element={ <Register /> } />
          <Route path='/signin' element={ <Login /> } />
        </Routes>
        <NavTab isOpen={isMenuOpen} onClose={() => {setIsMenuOpne(state => !state)}}/>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
