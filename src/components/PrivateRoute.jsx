import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";

function PrivateRoute({ children }) {
  const { state } = useContext(AppContext);
  if (!state.isAuth) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
export default PrivateRoute;
