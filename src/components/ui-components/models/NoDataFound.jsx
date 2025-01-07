import PropTypes from "prop-types";
import { SentimentVeryDissatisfied } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const NoDataFound = ({ height, dynamicMsg }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height={height ?? 0}
      textAlign="center"
    >
      <SentimentVeryDissatisfied fontSize="large" color="error" />
      <Typography variant="h4" color="textSecondary" mt={2}>
        {dynamicMsg ? dynamicMsg : "Oops! No data found."}
      </Typography>
      {/* <Typography variant="body2" color="textSecondary" mt={1}>
                Don't worry, you can always come back later.
            </Typography> */}
    </Box>
  );
};

NoDataFound.propTypes = {
  height: PropTypes.any,
  dynamicMsg: PropTypes.string,
};

export default NoDataFound;
