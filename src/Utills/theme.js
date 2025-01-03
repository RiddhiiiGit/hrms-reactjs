// theme.js
import { createTheme } from "@mui/material/styles";

const themeConfig = createTheme({
  palette: {
    primary: {
      main: "#e0f2f1",
    },
    secondary: {
      main: "#00695c",
      light: "#80cbc4",
    },
    background: {
      default: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#555555",
    },
  },
});

export default themeConfig;
