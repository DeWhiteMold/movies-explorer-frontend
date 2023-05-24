import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({element}) => {
  return Boolean(localStorage.getItem("JWT")) ? element : <Navigate to="/" replace />
}

export default ProtectedRouteElement;