import { Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LoginFooter = () => {
  return (
    <Grid2
      container
      direction="column"
      justifyContent="flex-end"
      sx={{ minHeight: "100vh" }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="subtitle2"
          component={Link}
          href="https://technobrains.io/"
          target="_blank"
          underline="hover"
          sx={{ color: "gray" }}
        >
          technobrains.io
        </Typography>
      </Stack>
    </Grid2>
  );
};

export default LoginFooter;
