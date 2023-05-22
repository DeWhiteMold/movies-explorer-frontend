import './Profile.scss';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utilits/MainApi';
import { emailRegExp, nameRegExp } from '../../utilits/regExps';

function Profile() {
  const currentUser = useContext(CurrentUserContext)
  const [nameValue, setNameValue] = useState(currentUser.name);
  const [EmailValue, setEmailValue] = useState(currentUser.email);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

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
    if(!nameError || !emailError) {
      mainApi.getUserInfo({
        name: nameValue,
        email: EmailValue
      })
        .catch((err) => console.log(err))

    }
  }

  function handleExit() {
    localStorage.removeItem('JWT')
  }

  return (
    <div className="profile">
      <section className="profile__info">
        <h2 className="profile__welcome">{`Привет, ${currentUser.name}!`}</h2>
        <form className="profile__form">
          <div className="profile__input-line">
            <span className="profile__input-name">Имя</span>
            <input type="text" className="profile__input" required="true" value={nameValue} onChange={handleNameChange} />
          </div>
          <div className="profile__input-line">
            <span className="profile__input-name">E-mail</span>
            <input type="text" className="profile__input" required="true" value={EmailValue} onChange={handleEmailChange}/>
          </div>
          <button type="submit" className="profile__edit-btn" onClick={handleSubmit}>Редактировать</button>
        </form>
        <Link to="/signin" className="profile__exit-btn" onClick={handleExit}>Выйти из Аккаунта</Link>
      </section>
    </div>
  )
}

export default Profile;