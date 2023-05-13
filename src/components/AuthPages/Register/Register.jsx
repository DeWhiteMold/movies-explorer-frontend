import './Register.scss';
import Welcome from '../Welcome/Welcome';
import AuthForm from '../AuthForm/AuthForm';

function Register({}) {
  return (
    <div className="register">
      <Welcome />
      <AuthForm />
    </div>
  )
}

export default Register;