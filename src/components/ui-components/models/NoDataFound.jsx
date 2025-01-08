import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import React from "react";
import { SentimentVeryDissatisfied } from "@mui/icons-material";

const NoDataFound = ({ height, dynamicMsg }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      width="100%"
      height="100vh"
    >
      <SentimentVeryDissatisfied sx={{ fontSize: 70 }} color="error" />
      <Typography variant="h3" color="textSecondary">
        {dynamicMsg ? dynamicMsg : "Oops! No data found."}
      </Typography>
    </Box>
  );
};

NoDataFound.propTypes = {
  height: PropTypes.any,
  dynamicMsg: PropTypes.string,
};

export default NoDataFound;
