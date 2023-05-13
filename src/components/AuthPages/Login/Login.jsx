import './Login.scss';
import Welcome from '../Welcome/Welcome';
import AuthForm from '../AuthForm/AuthForm';

function Login({}) {
  return (
    <div className="login">
      <Welcome />
      <AuthForm />
    </div>
  )
}

export default Login;