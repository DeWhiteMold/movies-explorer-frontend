import './Register.scss';
import Welcome from '../Welcome/Welcome';
import AuthForm from '../AuthForm/AuthForm';
import mainApi from '../../../utilits/MainApi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({onLogin}) {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState('')

  function handleReg(inputData) {
    mainApi.signup(inputData)
      .then(() => {
        setAuthError('')
      })
      .then(() => {
        mainApi.signin( {password: inputData.password, email: inputData.email} )
          .then((res) => {
            localStorage.setItem('JWT', res.token)
            console.log(res.token);
            onLogin(res.token);
          })
          .then(() => {
            console.log(localStorage.getItem('JWT'));
            navigate('/', {replace: true})
            setAuthError('')
          })
      })
      .catch((err) => {
        if(err === 'Ошибка: 409') {
          setAuthError('Почта уже используется');
        } else {
          setAuthError('Что-то пошло не так');
        }
      })
      .finally(() => {
        setTimeout(() => {
          setAuthError('')
        }, 2000)
      })
  }

  useEffect(() => {
    if(localStorage.getItem('JWT')) {
      navigate('/', {replace: true})
    }
  }, [])

  return (
    <div className="register">
      <Welcome />
      <AuthForm onSubmit={handleReg} authError={authError}/>
    </div>
  )
}

export default Register;