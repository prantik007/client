import { Typography } from "@mui/material";
import React from "react";
import Logo from "../../../images/chirper-logo.png";
const BrandLogo = () => {
  return (
    <Typography variant="h3" align="center" justifyContent="center">
      <img src={Logo} alt="brand-logo" height="60" />
      Chirper
    </Typography>
  );
};

export default BrandLogo;
