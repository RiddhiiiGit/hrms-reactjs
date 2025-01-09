import { useEffect, useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid2,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import AnimateButton from "../ui-components/Extended/AnimateButton";
import { useAuth } from "../../contexts/AuthContext";

const AuthDetails = ({ ...others }) => {
  const { login } = useAuth();
  const appliedTheme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [subdomain, setSubdomain] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSignUpClick = (data) => {
    setEmail(data.email);
    localStorage.setItem("email", data.email);
    navigate("/signup", { state: { email: data.email } });
  };
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail || "");
  }, []);
  return (
    <>
      <Grid2 container direction="column" justifyContent="center" spacing={2}>
        <Grid2
          item="true"
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">
              Sign in with Email address
            </Typography>
          </Box>
        </Grid2>
      </Grid2>

      <Formik
        initialValues={{
          email: "",
          password: "",
          subdomain: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
          //   subdomain: Yup.string().required("Subdomain is required"),
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            login();
            navigate("/dashboard");
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl
              fullWidth
              error={Boolean(touched.subdomain && errors.subdomain)}
              sx={{ ...appliedTheme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-subdomain-login">
                Subdomain
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-subdomain-login"
                type={showPassword ? "text" : "password"}
                value={values.subdomain}
                name="subdomain"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Password"
              />
              {touched.subdomain && errors.subdomain && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                >
                  {errors.subdomain}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              sx={{ ...appliedTheme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-email-login">
                Email Address
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address"
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={{ ...appliedTheme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-password-login">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              spacing={1}
            >
              <Typography
                variant="subtitle1"
                color="secondary"
                component={Link}
                to="/forgot-password"
                sx={{ textDecoration: "none", cursor: "pointer" }}
              >
                Forgot Password?
              </Typography>
            </Stack>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Sign in
                </Button>
              </AnimateButton>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Sign Up
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthDetails;
