import './AuthForm.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { emailRegExp, nameRegExp } from '../../../utilits/regExps';

function AuthForm({authError, onSubmit}) {
  const currentLocation = useLocation().pathname;
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [nameErrorText, setNameErrorText] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');

  function handleNameChange(e) {
    const text = e.target.value
    setNameValue(text);
    if(text.match(nameRegExp) && text.trim()) {
      setNameErrorText('');
    } else {
      setNameErrorText('Введите имя без спецсимволов');
    }
  }
  function handleEmailChange(e) {
    const text = e.target.value
    setEmailValue(text);
    if(text.match(emailRegExp) && text.trim()) {
      setEmailErrorText('')
    } else {
      setEmailErrorText('Введите почту');
    }
  }
  function handlePasswordChange(e) {
    const text = e.target.value
    setPasswordValue(text);
    if(text.trim()) {
      setPasswordErrorText('')
    } else {
      setPasswordErrorText('Введите пароль');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      email: emailValue,
      password: passwordValue,
      ...(currentLocation === '/signup' && {name: nameValue})
    })
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {
        currentLocation === '/signup' &&
          <>
            <div className="auth-form__input-box">
              <span className="auth-form__input-name">Имя</span>
              <input type="text" className="auth-form__input" required={true} value={nameValue} onChange={handleNameChange} />
            </div>
            <span className="auth-form__error-text">{nameErrorText}</span>
          </>
      }
      <div className="auth-form__input-box">
        <span className="auth-form__input-name">E-mail</span>
        <input type="text" className="auth-form__input" required={true} value={emailValue} onChange={handleEmailChange}/>
      </div>
      <span className="auth-form__error-text">{emailErrorText}</span>
      <div className="auth-form__input-box">
        <span className="auth-form__input-name">Пароль</span>
        <input type="password" className="auth-form__input" required={true} value={passwordValue} onChange={handlePasswordChange}/>
      </div>
      <span className="auth-form__error-text">{authError ? authError : passwordErrorText}</span>
      <button type="submit" className="auth-form__submit-btn"
        disabled={
          (currentLocation === '/signup' && !nameValue) || !emailValue || !passwordValue || nameErrorText || emailErrorText || passwordErrorText
        }
      >
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