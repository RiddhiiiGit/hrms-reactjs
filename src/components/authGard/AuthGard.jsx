import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import NoDataFound from "../ui-components/models/NoDataFound";

const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const serviceToken = localStorage.getItem("serviceToken");

  const validRoutes = [
    "/dashboard",
    "/dashboard/home",
    "/userDetails",
    "/tenantDetails",
    "/signup",
  ];
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  if (!validRoutes.includes(location.pathname)) {
    return <NoDataFound />;
  }

  useEffect(() => {
    if (!isLoggedIn || !serviceToken) {
      localStorage.removeItem("serviceToken");
      navigate("/login");
    } else if (document.location.pathname === "/login") {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);
  return isLoggedIn ? children : null;
};

export default AuthGuard;
