// theme.js
import { createTheme } from "@mui/material/styles";
import themeTypography from "./Typography";

const themeConfig = createTheme({
  palette: {
    primary: {
      main: "#e0f2f1",
      light: "#ffffff",
    },
    secondary: {
      main: "#00695c",
      light: "#80cbc4",
    },
    background: {
      default: "#f5f5f5",
      main: "#616161",
    },
    text: {
      primary: "#000000",
      secondary: "#555555",
      dark: "#00897b",
    },

    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    orange: {
      light: "#ffe0b2",
      main: "#ff9800",
      dark: "#e65100",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
    },
    success: {
      light: "#81c784",
      200: "#66bb6a",
      main: "#4caf50",
      dark: "#388e3c",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      900: "#212121",
    },
    dark: {
      light: "#424242",
      main: "#303030",
      dark: "#212121",
      800: "#121212",
      900: "#0d0d0d",
    },
  },

  typography: themeTypography({
    palette: {
      text: {
        grey900: "#212121",
        darkTextSecondary: "#d8ddf0",
        darkTextPrimary: "#d5d9e9",
      },
    },
  }),
  components: {
    MainCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#424242",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
            "&:hover fieldset": { borderColor: "#bbdefb" },
            "&.Mui-focused fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
          },
          "& .MuiFormLabel-root": {
            color: "rgba(0, 0, 0, 0.6)",
            "&.Mui-focused": { color: "rgba(0, 0, 0, 0.6)" },
          },
        },
      },
    },
  },
});

export default themeConfig;
