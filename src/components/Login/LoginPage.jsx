import React, { useState } from "react";
import {
  Typography,
  Grid2,
  Box,
  Container,
  Button,
  TextField,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import LoginFooter from "./LoginFooter";
import companyLogo from ""

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
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
          <Grid2 item sx={{ mb: 6 }}>
            <Link to="#">
              <img src={companyLogo} alt="logo" height="70" />
            </Link>
          </Grid2>
          <Typography component="h1" variant="h6" sx={{ fontWeight: "bold" }}>
            Welcome To Technobrains!!
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
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
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleSignUpClick}
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
