import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import themeConfig from "./Utills/Theme";
import { useSelector } from "react-redux";

const LoginPage = lazy(() => import("./components/Login/LoginPage"));
const SignUp = lazy(() => import("./components/Login/SignUp"));
const Home = lazy(() => import("./components/Home"));
const UserDetail = lazy(() => import("./components/UserDetails"));
const MainLayout = lazy(() => import("./components/MainLayout/Header"));
const AddTenantDetails = lazy(() =>
  import("./components/Home/TenantDetails/AddTenantDetails")
);

function App() {
  const { mode } = useSelector((state) => state.theme);

  const theme = React.useMemo(
    () =>
      createTheme({
        ...themeConfig,
        palette: {
          ...themeConfig.palette,
          mode,
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="userDetails" element={<UserDetail />} />
          <Route path="tenantDetails" element={<AddTenantDetails />} />
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
