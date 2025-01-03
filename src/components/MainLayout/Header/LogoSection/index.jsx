import { NavLink } from "react-router-dom";

// project imports
import CompanyLogo from "../../../../assets/images/CompanyLogo.png";
import config from "../../../../config";
import { ButtonBase } from "@mui/material";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  return (
    <ButtonBase
      disableRipple
      component={NavLink}
    >
      <img src={CompanyLogo} alt="logo" height="45" />
    </ButtonBase>
  );
};

export default LogoSection;
