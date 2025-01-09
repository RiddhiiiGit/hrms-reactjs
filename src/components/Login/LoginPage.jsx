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
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import CompanyLogo from "../../assets/images/companyLogo.png";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import AuthCard from "../../Utills/AuthCard";
import AuthDetails from "./AuthDetails";
import AuthWrapper from "../../Utills/AuthWrapper";

const LoginPage = () => {
  const appliedTheme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const matchDownSM = useMediaQuery(appliedTheme.breakpoints.down("md"));

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
    <AuthWrapper>
      <Grid2
        item="true"
        container
        maxWidth="sm"
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: "100vh" }}
      >
        <Grid2 item="true" xs={12}>
          <Grid2
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            <Grid2 item="true" sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCard>
                <Grid2
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid2 item="true" sx={{ mb: 3 }}>
                    <Link to="#">
                      <img src={CompanyLogo} alt="logo" height="75" />
                    </Link>
                  </Grid2>
                  <Grid2 item="true" xs={12}>
                    <Grid2
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid2 item="true">
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color={appliedTheme.palette.secondary.main}
                            gutterBottom
                            variant={matchDownSM ? "h3" : "h2"}
                          >
                            Hi, Welcome Back
                          </Typography>
                          <Typography
                            variant="caption"
                            fontSize="16px"
                            textAlign={matchDownSM ? "center" : "inherit"}
                          >
                            Enter your credentials to continue
                          </Typography>
                        </Stack>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                  <Grid2 item="true" xs={12}>
                    <AuthDetails />
                  </Grid2>
                </Grid2>
              </AuthCard>
            </Grid2>
          </Grid2>
        </Grid2>
        {/* <Stack sx={{ mb: 6 }}>
          <Link to="#">
            <img src={CompanyLogo} alt="logo" height="70" />
          </Link>
        </Stack>

        <Stack alignItems="center" justifyContent="center" spacing={1}>
          <Typography
            color={appliedTheme.palette.secondary.main}
            gutterBottom
            variant={matchDownSM ? "h3" : "h2"}
          >
            Hi, Welcome Back
          </Typography>
          <Typography
            variant="caption"
            fontSize="16px"
            textAlign={matchDownSM ? "center" : "inherit"}
          >
            Enter your credentials to continue
          </Typography>
        </Stack> */}
        {/* <Stack sx={{ mb: 6 }}>
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
          </Box> */}

        {/* <LoginFooter /> */}
      </Grid2>
    </AuthWrapper>
  );
};

export default LoginPage;
