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
  const matchDownSM = useMediaQuery(appliedTheme.breakpoints.down("md"));

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
      </Grid2>
    </AuthWrapper>
  );
};

export default LoginPage;
