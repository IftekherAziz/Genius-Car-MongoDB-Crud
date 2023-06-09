import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user , loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <div>
    <Navigate to="/login" replace></Navigate>
  </div>;
};

export default PrivateRoute;
