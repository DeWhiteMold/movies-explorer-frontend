import './Profile.scss';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utilits/MainApi';
import { emailRegExp, nameRegExp } from '../../utilits/regExps';

function Profile({onEdit}) {
  const currentUser = useContext(CurrentUserContext)
  const [nameValue, setNameValue] = useState(currentUser.name);
  const [emailValue, setEmailValue] = useState(currentUser.email);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [editStatus, setEditStatus] = useState('');

  function handleNameChange(e) {
    const text = e.target.value
    setNameValue(text);
    if(text.match(nameRegExp) && text.trim()) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  } 

  function handleEmailChange(e) {
    const text = e.target.value
    setEmailValue(text);
    if(text.match(emailRegExp) && text.trim()) {
      setEmailError(false)
    } else {
      setEmailError(true);
    }
  } 

  function handleSubmit(e) {
    e.preventDefault()
    if(
        ( !nameError || !emailError ) &&
        nameValue !== currentUser.name && 
        emailValue !== currentUser.email
      ) {
      mainApi.updateUserInfo({
        name: nameValue,
        email: emailValue
      })
        .then(() => {
          onEdit();
          setEditStatus('Успешно')
        })
        .catch((err) => {
          if(err === 'Ошибка: 409') {
            setEditStatus('Почта уже используется');
          } else {
            setEditStatus('Что-то пошло не так');
          }
        })
        .finally(() => {
          setTimeout(() => {;
            setEditStatus('')
          }, 1500)
        })

    }
  }

  function handleExit() {
    localStorage.removeItem('JWT');
    localStorage.removeItem('savedMoviesParams');
    localStorage.removeItem('MoviesParams');
    onEdit()
  }

  useEffect(() => {
    setEmailValue(currentUser.email);
    setNameValue(currentUser.name)
  },[currentUser])

  return (
    <div className="profile">
      <section className="profile__info">
        <h2 className="profile__welcome">{editStatus ? editStatus : `Привет, ${currentUser.name}!`}</h2>
        <form className="profile__form">
          <div className="profile__input-line">
            <span className="profile__input-name">Имя</span>
            <input type="text" className="profile__input" required={true} value={nameValue} onChange={handleNameChange} />
          </div>
          <div className="profile__input-line">
            <span className="profile__input-name">E-mail</span>
            <input type="text" className="profile__input" required={true} value={emailValue} onChange={handleEmailChange}/>
          </div>
          <button type="submit" onClick={handleSubmit}
             className={`profile__edit-btn ${(nameError || emailError  || nameValue === currentUser.name || emailValue === currentUser.email) && 'profile__edit-btn_disabled'} && `} >
              Редактировать
          </button>
        </form>
        <Link to="/" className="profile__exit-btn" onClick={handleExit}>Выйти из Аккаунта</Link>
      </section>
    </div>
  )
}

export default Profile;