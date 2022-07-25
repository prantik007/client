import { Stack } from "@mui/material";
import React from "react";
import BrandLogo from "./BrandLogo/BrandLogo";
import ButtonCustom from "../UI/ButtonCustom";
import { FaHome, FaInbox, FaPersonBooth, FaEarlybirds } from "react-icons/fa";

const Navbar = () => {
  const btnProps = {
    size: "medium",
  };
  return (
    <Stack spacing={2} alignSelf="left">
      <BrandLogo />

      <ButtonCustom {...btnProps} startIcon={<FaHome />}>
        Home
      </ButtonCustom>
      <ButtonCustom {...btnProps} startIcon={<FaInbox />}>
        Messages
      </ButtonCustom>
      <ButtonCustom {...btnProps} startIcon={<FaPersonBooth />}>
        Profile
      </ButtonCustom>
      <ButtonCustom
        size={"large"}
        variant={"contained"}
        startIcon={<FaEarlybirds />}
      >
        New Chirp
      </ButtonCustom>
    </Stack>
  );
};

export default Navbar;
