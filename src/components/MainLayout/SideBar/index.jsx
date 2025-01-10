import React, { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useSidebar } from "../../../contexts/SidebarContext";
import { Link } from "react-router-dom";
// import LogoSection from "../Header/LogoSection";
import { drawerWidth } from "../../../store/constant";


const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const appliedTheme = useTheme();
  const matchUpMd = useMediaQuery(appliedTheme.breakpoints.up('md'));

  const drawer = (
    <>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Box sx={{ display: 'flex', p: 1.95, mx: 'auto', background: appliedTheme.palette.primary[200] }}>
                {/* <LogoSection /> */}
            </Box>
        </Box>
        {/* <BrowserView>
            <PerfectScrollbar
                component="div"
                style={{
                    height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                    paddingLeft: '5px',
                    paddingRight: '5px'
                }}
            >
                <MenuList />
            </PerfectScrollbar>
        </BrowserView> */}
        {/* <MobileView>
            <Box sx={{ px: 2 }}>
                <MenuList />
            </Box>
        </MobileView> */}
    </>
);
  return (
    <>
    <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }} aria-label="mailbox folders">
      <Drawer
        variant="persistent"
        anchor="left"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        sx={{
          width: drawerWidth,
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
          {["Home", "About", "Services", "Contact","OrganizationDetails"].map((text) => (
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
        {drawer}
      </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
