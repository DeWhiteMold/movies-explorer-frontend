import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({element}) => {
  return localStorage.getItem("JWT") ? element : <Navigate to="/signin" replace />
}

export default ProtectedRouteElement;