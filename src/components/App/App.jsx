import './App.scss';
import '../MainPage/Main/Main';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Main from '../MainPage/Main/Main';
import Movies from '../MoviesPages/Movies/Movies';
import SavedMovies from '../MoviesPages/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../AuthPages/Register/Register';
import Login from '../AuthPages/Login/Login';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../../utilits/ProtectedRoute';
import mainApi from '../../utilits/MainApi';

function App() {
  const [isMenuOpen, setIsMenuOpne] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    mainApi.getUserInfo()
      .then(res => setCurrentUser(res.data))
  }, [localStorage.getItem('JWT')])

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <BrowserRouter>
          <Header onMenuClick={() => {setIsMenuOpne(state => !state)}}/>
          <main className="main">
          <Routes>
            <Route path='*' element ={ <NotFoundPage /> } />
            <Route path='/' element={ <Main /> } />
            <Route path='/movies' element={ <ProtectedRouteElement element={ <Movies /> } />} />
            <Route path='/saved-movies' element={ <ProtectedRouteElement element={ <SavedMovies /> }/> } />
            <Route path='/profile' element={ <ProtectedRouteElement element={ <Profile /> }/> } />
            <Route path='/signup' element={ <Register /> } />
            <Route path='/signin' element={ <Login /> } />
          </Routes>
          <NavTab isOpen={isMenuOpen} onClose={() => {setIsMenuOpne(state => !state)}}/>
          </main>
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
