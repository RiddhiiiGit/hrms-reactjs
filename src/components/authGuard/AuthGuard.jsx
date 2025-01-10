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

  if (!validRoutes.includes(location.pathname)) {
    return <NoDataFound />;
  }
  useEffect(() => {
    // Redirect to dashboard if logged in and on the login page
    if (isLoggedIn && location.pathname === "/login") {
      navigate("/dashboard", { replace: true });
    }

    // Redirect to login if not logged in or missing serviceToken
    if (!isLoggedIn || !serviceToken) {
      localStorage.removeItem("serviceToken");
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, serviceToken, location.pathname, navigate]);

  return isLoggedIn ? children : null;
  // if (!isLoggedIn) {
  //   return <Navigate to="/login" />;
  // }
  // if (!validRoutes.includes(location.pathname)) {
  //   return <NoDataFound />;
  // }
  // useEffect(() => {
  //   if (!isLoggedIn || !serviceToken) {
  //     localStorage.removeItem("serviceToken");
  //     navigate("/login");
  //   } else if (isLoggedIn && document.location.pathname === "/login") {
  //     navigate("/dashboard");
  //   }
  // }, []);
  // return isLoggedIn ? children : null;
};

export default AuthGuard;
