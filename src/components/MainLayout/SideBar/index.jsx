import React, { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { useSidebar } from "../../../contexts/SidebarContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const appliedTheme = useTheme();

  return (
    <>
      <Drawer
        variant="persistent"
        anchor="left"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        sx={{
          width: 260,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 290,
            boxSizing: "border-box",
            marginTop: "86px",
            boxShadow: "4px 0 6px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <List>
          {["Home", "About", "Services", "Contact"].map((text) => (
            <ListItem
              key={text}
              button="true"
              component={Link}
              to={`${text.toLowerCase()}`}
              sx={{
                color: appliedTheme.palette.text.primary,
                "&:hover": {
                  color: appliedTheme.palette.text.dark,
                  background: appliedTheme.palette.primary.main,
                  borderRadius: "7px",
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
