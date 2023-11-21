import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.authReducer);

  return userInfo ? <Outlet /> : <Navigate to={"/auth"} replace />;
};

export default PrivateRoute;
