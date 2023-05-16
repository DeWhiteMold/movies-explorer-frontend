import './Profile.scss';
import Header from '../Header/Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile({user}) {
  const [nameValue, setNameValue] = useState(user.name);
  const [EmailValue, setEmailValue] = useState(user.email);

  function handleNameChange(e) {
    setNameValue(e.target.value);
  } 

  function handleEmailChange(e) {
    setEmailValue(e.target.value);
  } 

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="profile">
      <section className="profile__info">
        <h2 className="profile__welcome">{`Привет, ${user.name}!`}</h2>
        <form className="profile__form">
          <div className="profile__input-line">
            <span className="profile__input-name">Имя</span>
            <input type="text" className="profile__input" value={nameValue} onChange={handleNameChange} />
          </div>
          <div className="profile__input-line">
            <span className="profile__input-name">E-mail</span>
            <input type="text" className="profile__input" value={EmailValue} onChange={handleEmailChange}/>
          </div>
          <button type="submit" className="profile__edit-btn" onClick={handleSubmit}>Редактировать</button>
        </form>
        <Link to="/signin" className="profile__exit-btn">Выйти из Аккаунта</Link>
      </section>
    </div>
  )
}

export default Profile;