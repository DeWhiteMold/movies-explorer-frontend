import './Login.scss';
import Welcome from '../Welcome/Welcome';
import AuthForm from '../AuthForm/AuthForm';
import mainApi from '../../../utilits/MainApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState('')

  function handleLog(inputData) {
    console.log(inputData);
    mainApi.signin(inputData)
      .then((res) => {
        localStorage.setItem('JWT', res.token)
      })
      .then(() => {
        navigate('/', {replace: true})
        setAuthError('')
      })
      .catch((err) => {
        if(err === 'Ошибка: 400') {
          setAuthError('Что-то пошло не так');
        } else {
          setAuthError(err.message)
        }
      })
  }
  return (
    <div className="login">
      <Welcome />
      <AuthForm onSubmit={handleLog} authError={authError}/>
    </div>
  )
}

export default Login;