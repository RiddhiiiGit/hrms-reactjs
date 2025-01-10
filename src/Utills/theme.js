// theme.js
import { createTheme } from "@mui/material/styles";
import themeTypography from "./Typography";

const themeConfig = createTheme({
  palette: {
    primary: {
      main: "#e0f2f1",
      // light: "#ffffff",
      light: "#eceff1",
    },
    secondary: {
      main: "#009688",
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
    fontFamily: "'Poppins', sans-serif",
    palette: {
      text: {
        grey900: "#212121",
        darkTextSecondary: "#d8ddf0",
        darkTextPrimary: "#d5d9e9",
        grey500: "#9e9e9e",
      },
    },
  }),
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif",
        },
      },
    },
    MainCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#424242",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        },
      },
    }, 

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#fafafa",
          // borderRadius: `${appliedTheme?.customization?.borderRadius}px`,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#616161",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#616161",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#eceff1",
          },
          "&.MuiInputBase-multiline": {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: "#fafafa",
          padding: "15.5px 14px",
          // borderRadius: `${appliedTheme?.customization?.borderRadius}px`,
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          // borderRadius: `${appliedTheme?.customization?.borderRadius}px`,
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
<<<<<<< HEAD

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // background: bgColor,
          // borderRadius: `${theme?.customization?.borderRadius}px`,
          "& .MuiOutlinedInput-notchedOutline": {
            // borderColor: theme.colors?.grey400,
          },
          "&:hover $notchedOutline": {
            // borderColor: theme.colors?.primaryLight,
          },
          "&.MuiInputBase-multiline": {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          // background: bgColor,
          padding: "15.5px 14px",
          // borderRadius: `${theme?.customization?.borderRadius}px`,
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        // notchedOutline: {
=======
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: "0.4em",
            height: "0.4em",
          },
          "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: "4px",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        // rounded: {
>>>>>>> 597594751a4ce81efcbdcb6a5b50aceda4ffd02e
        //   borderRadius: `${theme?.customization?.borderRadius}px`,
        // },
      },
    },
<<<<<<< HEAD

    
=======
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: "#212121",
          padding: "24px",
        },
        title: {
          fontSize: "1.125rem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
>>>>>>> 597594751a4ce81efcbdcb6a5b50aceda4ffd02e
  },
});

export default themeConfig;
