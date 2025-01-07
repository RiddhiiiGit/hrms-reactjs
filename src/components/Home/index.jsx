import React from "react";
import AddTenantDetails from "./TenantDetails/AddTenantDetails";
import { Box, Typography } from "@mui/material";

const index = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component="h5"
        variant="subtitle"
        sx={{
          fontWeight: "bold",
          color: "gray",
          fontSize: "36px",
        }}
      >
        Dashboard: Comming Soon..
      </Typography>
      {/* <AddTenantDetails /> */}
    </Box>
  );
};

export default index;
