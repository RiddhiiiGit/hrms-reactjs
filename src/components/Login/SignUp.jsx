import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    setValue("email", email);
  }, [email, setValue]);

  const onSubmit = (data) => {
    navigate("/userDetails", { state: { email: data.email } });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "95vh",
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
            padding: 5,
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
              component="h1"
              variant="h5"
              sx={{ fontWeight: "bold", mb: 6, color: "#42a5f5" }}
            >
              Sign Up Now!
            </Typography>
            <Typography component="h5" variant="body1" sx={{ color: "blue" }}>
              Enter Your Email Below For Instant Access.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
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
                {...register("email", {
                  required: "Email Address is required",
                })}
                onChange={(e) => setEmail(e.target.value)}
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
              >
                Create My Account
              </Button>

              <Typography
                component="h5"
                variant="subtitle1"
                sx={{ mt: 5, textAlign: "center" }}
              >
                By clicking "Create My Account" you agree to the
                <span style={{ color: "blue" }}> Terms of Service</span>.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SignUp;
