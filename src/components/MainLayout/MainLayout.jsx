import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box>
      <Header />
      <Sidebar />
      <Outlet />
    </Box>
  );
};

export default MainLayout;
