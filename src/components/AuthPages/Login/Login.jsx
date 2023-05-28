import './Login.scss';
import Welcome from '../Welcome/Welcome';
import AuthForm from '../AuthForm/AuthForm';
import mainApi from '../../../utilits/MainApi';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({onLogin}) {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState('')

  function handleLog(inputData) {
    mainApi.signin(inputData)
      .then((res) => {
        localStorage.setItem('JWT', res.token);
        onLogin(res.token);
      })
      .then(() => {
        navigate('/movies', {replace: true})
        setAuthError('')
      })
      .catch((err) => {
        if(err === 'Ошибка: 401') {
          setAuthError('Неправильный email или пароль');
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
    <div className="login">
      <Welcome />
      <AuthForm onSubmit={handleLog} authError={authError}/>
    </div>
  )
}

export default Login;