import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
// material-ui
import { styled, useTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Header from "./Header";
// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  return (
    <Box>
      <Header />

      {/* <CssBaseline /> */}
      {/* <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={7}
        sx={{
          // opacity: '91%',
          height: "60px",
          background: theme.palette.secondary.light,
          transition: leftDrawerOpened
            ? theme.transitions.create("width")
            : "none",
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar> */}
    </Box>
  );
};

export default MainLayout;
