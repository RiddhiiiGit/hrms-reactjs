import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import("./components/Login/LoginPage"));
const SignUp = lazy(() => import("./components/Login/SignUp"));
const Home = lazy(() => import("./components/Home"));
const UserDetail = lazy(() => import("./components/UserDetails"));
const AddTenantDetails = lazy(() =>
  import("./components/Home/TenantDetails/AddTenantDetails")
);

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="userDetails" element={<UserDetail />} />
          <Route path="tenantDetails" element={<AddTenantDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
