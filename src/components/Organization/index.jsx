// import React from "react";
import OrganizationsList from "./AddOrganizationDetails";
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
      {/* <OrganizationsList/> */}
    </Box>
  );
};

export default index;
