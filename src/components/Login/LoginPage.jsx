import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid2,
  Box,
  Container,
  Button,
  TextField,
  Link,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import LoginFooter from "./LoginFooter";
import CompanyLogo from "../../assets/images/companyLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const { login } = useAuth();

  const handleSignUpClick = (data) => {
    setEmail(data.email);
    localStorage.setItem("email", data.email);
    navigate("/signup", { state: { email: data.email } });
  };
  const handleLogin = (data) => {
    login();
    navigate("/dashboard");
  };
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail || "");
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          backgroundColor: "white",
          padding: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack sx={{ mb: 6 }}>
            <Link to="#">
              <img src={CompanyLogo} alt="logo" height="70" />
            </Link>
          </Stack>
          <Typography component="h1" variant="h6" sx={{ fontWeight: "bold" }}>
            Welcome To Technobrains!!
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleLogin)}
            noValidate
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              {...register("email", { required: "Email Address is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", {
                required: "Password is required",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#bbdefb",
                "&:hover": {
                  backgroundColor: "#90caf9",
                },
                color: "#fff",
              }}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              sx={{
                backgroundColor: "#bbdefb",
                "&:hover": {
                  backgroundColor: "#90caf9",
                },
                color: "#fff",
              }}
              onClick={handleSubmit(handleSignUpClick)}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
      <LoginFooter />
    </Box>
  );
};

export default LoginPage;
