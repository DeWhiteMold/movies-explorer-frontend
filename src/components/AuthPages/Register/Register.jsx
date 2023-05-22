import './Register.scss';
import Welcome from '../Welcome/Welcome';
import AuthForm from '../AuthForm/AuthForm';
import mainApi from '../../../utilits/MainApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState('')

  function handleReg(inputData) {
    mainApi.signup(inputData)
      .then(() => {
        navigate('/signin', {replace: true})
        setAuthError('')
      })
      .catch((err) => {console.log(err)})
  }

  return (
    <div className="register">
      <Welcome />
      <AuthForm onSubmit={handleReg} authError={authError}/>
    </div>
  )
}

export default Register;