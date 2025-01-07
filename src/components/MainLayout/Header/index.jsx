import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import React from "react";
import LogoSection from "./LogoSection";
import { Avatar, Box, ButtonBase, Container } from "@mui/material";
import ProfileSection from "./ProfileSection";
import NotificationSection from "./NotificationSection";
import DownloadTracker from "./DownloadTracker.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import { useSidebar } from "../../../contexts/SidebarContext.jsx";

const Header = () => {
  const appliedTheme = useTheme();
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            background: appliedTheme.palette.primary.main,
            padding: "15px",
            position: "sticky",
            top: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "60px",
            }}
          >
            <LogoSection />
            <ButtonBase
              onClick={toggleSidebar}
              sx={{ borderRadius: "12px", overflow: "hidden" }}
            >
              <Avatar
                aria-label="Menu"
                variant="rounded"
                sx={{
                  transition: "all .2s ease-in-out",
                  background: appliedTheme.palette.secondary.light,
                  color: appliedTheme.palette.secondary.main,
                  "&:hover": {
                    background: appliedTheme.palette.secondary.main,
                    color: appliedTheme.palette.secondary.light,
                  },
                }}
                color="inherit"
              >
                <MenuIcon stroke={1.5} size="1.3rem" />
              </Avatar>
            </ButtonBase>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <DownloadTracker />
            <NotificationSection />
            <ProfileSection />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
