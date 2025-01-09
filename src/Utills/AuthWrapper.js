// material-ui
import { styled } from "@mui/material/styles";

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const AuthWrapper1 = styled("div")(({ appliedTheme }) => ({
  backgroundColor: appliedTheme?.palette?.primary?.light,
  minHeight: "100vh",
}));

export default AuthWrapper1;
