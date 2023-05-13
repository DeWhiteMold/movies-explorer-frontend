import './Welcome.scss';
import { useLocation } from 'react-router-dom';
import logo from '../../../images/logo.png';

function Welcome() {
  const currentLocation = useLocation().pathname;

  return (
    <div className="welcome">
      <img src={logo} alt="лого" className="welcome__logo" />
      <h2 className="welcome__text">
        { currentLocation === '/signin' ? 'Добро пожаловать!' : 'Рады видеть!'}
      </h2>
    </div>
  )
}

export default Welcome;