import './AuthForm.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AuthForm() {
  const navigate = useNavigate();
  const currentLocation = useLocation().pathname;
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function handleNameChange(e) {
    setNameValue(e.target.value)
  }
  function handleEmailChange(e) {
    setEmailValue(e.target.value)
  }
  function handlePasswordChange(e) {
    setPasswordValue(e.target.value)
  }

  return (
    <form className="auth-form">
      {
        currentLocation === '/signup' &&
          <div className="auth-form__input-box">
            <span className="auth-form__input-name">Имя</span>
            <input type="text" className="auth-form__input" value={nameValue} onChange={handleNameChange} />
          </div>
      }
      <div className="auth-form__input-box">
        <span className="auth-form__input-name">E-mail</span>
        <input type="text" className="auth-form__input" value={emailValue} onChange={handleEmailChange}/>
      </div>
      <div className="auth-form__input-box">
        <span className="auth-form__input-name">Пароль</span>
        <input type="password" className="auth-form__input" value={passwordValue} onChange={handlePasswordChange}/>
      </div>
      <span className="auth-form__error-text"> Что-то пошло не так... </span>
      <button type="submit" className="auth-form__submit-btn">
        {
          currentLocation === '/signup' ? 'Зарегистрироваться' : 'Войти'
        }
      </button>
      <div className="auth-form__switch-block">
        <span className="auth-form__switch-text">
          {
            currentLocation === '/signup' ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'
          }
        </span>
        <Link to={currentLocation === '/signup' ? '/signin' : '/signup'} className="auth-form__switch-btn">
          {
            currentLocation === '/signup' ? 'Войти' : 'Регистрация'
          }
        </Link>
      </div>
    </form>
  )
}

export default AuthForm;