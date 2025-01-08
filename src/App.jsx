import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Box,
  CircularProgress,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useSelector } from "react-redux";
import themeConfig from "./Utills/theme";
import AuthGuard from "./components/authGard/AuthGard";
import { AuthProvider } from "./contexts/AuthContext";
const LoginPage = lazy(() => import("./components/Login/LoginPage"));
const SignUp = lazy(() => import("./components/Login/SignUp"));
const Home = lazy(() => import("./components/Home"));
const UserDetail = lazy(() => import("./components/UserDetails"));
const MainLayout = lazy(() => import("./components/MainLayout/MainLayout"));
const AddTenantDetails = lazy(() =>
  import("./components/Home/TenantDetails/AddTenantDetails")
);
const NoDataFound = lazy(() =>
  import("./components/ui-components/models/NoDataFound")
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
      <AuthProvider>
        <Router>
          <Suspense
            fallback={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "110vh",
                }}
              >
                <CircularProgress />
              </Box>
            }
          >
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetail />} />
              <Route path="/tenantDetails" element={<AddTenantDetails />} />
              {/* <Route path="/dashboard" element={<MainLayout />}> */}
              <Route
                path="/dashboard"
                element={
                  <AuthGuard>
                    <MainLayout />
                  </AuthGuard>
                }
              >
                <Route path="home" element={<Home />} />
              </Route>
              <Route path="*" element={<NoDataFound />} />
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
