import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { UserCreateApi } from "../../apis/user";
import { showSnackbar } from "../../features/snackbar/snackbarSlice";

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
      const response = await UserCreateApi(formDataWithEmail);
      dispatch(
        showSnackbar({
          message: "User created successfully!",
          severity: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        })
      );
      navigate("/tenantDetails", { state: { email } });

      // if (response.status === 200 || response.status === 201) {
      //   if (
      //     response.data.exception.statusCode == 200 ||
      //     response.data.exception.statusCode === 201
      //   ) {
      //     toast.success(response.data.message || "Operation successful!", {
      //       position: "top-right",
      //       autoClose: 3000,
      //       style: { color: "green" },
      //     });
      //   } else {
      //     const errorMessage =
      //       response.data.message || "Error Submitting UserDetails";
      //     toast.error(errorMessage, {
      //       position: "top-right",
      //       autoClose: 3000,
      //       style: { color: "red" },
      //     });
      //   }
      // }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage =
          error.response.data.message || "Error Submitting UserDetails";
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 3000,
        });
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

          <Box
            component="form"
            noValidate
            sx={{ mt: 5, width: "100%" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="subdomain"
              label="Subdomain"
              name="subdomain"
              autoComplete="subdomain"
              autoFocus
              {...register("subdomain", { required: "Subdomain is required" })}
              error={!!errors.subdomain}
              helperText={errors.subdomain?.message}
              // value={subdomain}
              // onChange={(e) => setSubDomain(e.target.value)}
            /> */}
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
              // value={firstName}
              // onChange={(e) => setFirstName(e.target.value)}
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
              // value={lastName}
              // onChange={(e) => setLastName(e.target.value)}
            />
            {/* <TextField
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
              // value={userName}
              // onChange={(e) => setUserName(e.target.value)}
            /> */}
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
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
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
