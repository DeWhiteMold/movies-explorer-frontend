import './Header.scss';
import profileIcon from '../../images/profileIcon.svg';
import menuIcon from '../../images/menuIcon.svg';
import { Link, useLocation } from 'react-router-dom';

function Header({onMenuClick}) {
  const currentLocation = useLocation().pathname;

  return (
    (currentLocation === '/' || currentLocation === '/movies' || currentLocation === '/saved-movies' || currentLocation === '/profile') &&
      <header className={`header ${ currentLocation === '/' ? 'header_main-page' : ''}`}>
        <Link to='/' className="header__logo"> </Link>
        {
          currentLocation !== '/' ? 
          <>
            <nav className="header__nav">
              <Link to='/movies' className={`header__nav-item ${ currentLocation === '/movies' ? 'header__nav-item_selected' : '' }`}>Фильмы</Link>
              <Link to='/saved-movies' className={`header__nav-item ${ currentLocation === '/saved-movies' ? 'header__nav-item_selected' : '' }`}>Сохранённые фильмы</Link>
            </nav>
            <Link to='/profile' className="header__profile-btn">
              <img src={profileIcon} alt="профиль" className="header__profile-btn-img" />
              <span className="header__profile-btn-text">Аккаунт</span>
            </Link>
            <button type="button" className="header__menu-btn" onClick={onMenuClick}>
              <img src={menuIcon} alt="меню" className="header__menu-icon" />
            </button>
          </> : 
          <div className="header__auth-block">
            <Link to='/signup' className="header__reg-btn">Регистрация</Link>
            <Link to='/signin' className="header__login-btn">Войти</Link>
          </div>
        }
      </header>
  );
}

export default Header;