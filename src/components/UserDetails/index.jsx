import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [subdomain, setSubDomain] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleNavigate = () => {
    navigate("/home");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
        backgroundColor: "#f5f5f5",
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
          <Typography
            component="h5"
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#42a5f5",
              alignItems: "center",
            }}
          >
            Welcome to Technobrains!!
          </Typography>

          <Box component="form" noValidate sx={{ mt: 5, width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="subdomain"
              label="Subdomain"
              name="subdomain"
              autoComplete="subdomain"
              autoFocus
              value={subdomain}
              onChange={(e) => setSubDomain(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              autoComplete="fullName"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="UserName"
              name="userName"
              autoComplete="userName"
              autoFocus
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Create Password"
              name="password"
              autoComplete="password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                backgroundColor: "#bbdefb",
                "&:hover": {
                  backgroundColor: "#90caf9",
                },
                color: "#fff",
              }}
              onClick={handleNavigate}
            >
              Let's Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default index;
