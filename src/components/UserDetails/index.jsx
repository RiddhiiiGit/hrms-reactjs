import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../../features/snackbar/snackbarSlice";
import { TenantRegistrationApi } from "../../apis/tenantRegistration";

const index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [email] = useState(location.state?.email || null);
  const onSubmit = async (data) => {
    try {
      const formDataWithEmail = { ...data, email };
      const response = await TenantRegistrationApi(formDataWithEmail);
      dispatch(
        showSnackbar({
          message: "Tenant Registered successfully!",
          severity: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        })
      );
      navigate("/tenantDetails", { state: { email } });
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage =
          error.response.data.message || "Error Submitting UserDetails";
        dispatch(
          showSnackbar({
            message: "Tenant is not registered!!",
            severity: "warning",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          })
        );
      }
    }
  };

  return (
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

          <Box
            component="form"
            noValidate
            sx={{ mt: 5, width: "100%" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="subdomainName"
              label="subdomainName"
              name="subdomainName"
              autoComplete="subdomainName"
              autoFocus
              {...register("subdomainName", {
                required: "Subdomain is required",
              })}
              error={!!errors.subdomainName}
              helperText={errors.subdomainName?.message}
             
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              {...register("firstName", { required: "First name is required" })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              autoFocus
              {...register("lastName", { required: "Last name is required" })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              
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
              {...register("userName", { required: "Username is required" })}
              error={!!errors.userName}
              helperText={errors.userName?.message}
             
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
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
              
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
              Let's Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default index;
