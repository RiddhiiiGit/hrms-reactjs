import React from "react";
import { Box, Typography } from "@mui/material";

import AddTenantDetails from "./TenantDetails/AddTenantDetails";
import { Box, ThemeProvider, Typography } from "@mui/material";
import themeConfig from "../../Utills/theme";
import MainCard from "../ui-components/MainCard/MainCard";
const index = () => {
  return (
    <ThemeProvider theme={themeConfig}>
      <MainCard>
        <Typography variant="body2">
          This is the content inside the MainCard component.
        </Typography>
      </MainCard>
    </ThemeProvider>
  );
};

export default index;
