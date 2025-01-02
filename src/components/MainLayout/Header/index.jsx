// material-ui
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import React from "react";
import LogoSection from "./LogoSection";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import themeConfig from "../../../Utills/Theme";
import ProfileSection from "./ProfileSection";
import NotificationSection from "./NotificationSection";

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const { mode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const theme = React.useMemo(
    () =>
      createTheme({
        ...themeConfig,
        palette: {
          ...themeConfig.palette,
          mode,
        },
      }),
    [mode]
  );

  const appliedTheme = useTheme();

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
            }}
          >
            <LogoSection />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <NotificationSection />
            <ProfileSection />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
