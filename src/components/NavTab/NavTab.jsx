import './NavTab.scss';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';

function NavTab({isOpen, onClose}) {
  const currentLocation = useLocation().pathname;

  return (
    <div className={`nav-tab ${!isOpen && 'nav-tab_hidden'}`}>
      <div className="nav-tab__overlay" onClick={onClose} />
      <nav className="nav-tab__box">
        <button type="button" className="nav-tab__close-btn" onClick={onClose}/>
        <Link to="/" className={`nav-tab__link ${currentLocation === '/' && 'nav-tab__link_current'}`}>Главная</Link>
        <Link to="/movies" className={`nav-tab__link ${currentLocation === '/movies' && 'nav-tab__link_current'}`}>Фильмы</Link>
        <Link to="/saved-movies" className={`nav-tab__link ${currentLocation === '/saved-movies' && 'nav-tab__link_current'}`}>Сохранённые фильмы</Link>
        <Link to="/profile" className="nav-tab__profile-btn">
          <img src={profileIcon} alt="профиль" className="nav-tab__profile-btn-img" />
          <span className="nav-tab__profile-btn-text">Аккаунт</span>
        </Link>
      </nav>
    </div>
  );
}

export default NavTab;