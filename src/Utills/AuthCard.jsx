// material-ui
import { Box } from "@mui/material";
import MainCard from "../components/ui-components/MainCard/MainCard";

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const AuthCard = ({ children, ...other }) => (
  <MainCard
    sx={{
      maxWidth: { xs: 400, lg: 475 },
      margin: { xs: 2.5, md: 3 },
      "& > *": {
        flexGrow: 1,
        flexBasis: "50%",
      },
      boxShadow: "0 2px 14px 0 rgb(32 40 45 / 8%)",
      ":hover": {
        boxShadow: "0 2px 14px 0 rgb(32 40 45 / 8%)",
      },
    }}
    content={false}
    {...other}
  >
    <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
  </MainCard>
);

export default AuthCard;
