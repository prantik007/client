import { Box, Divider, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ComposeChirp from "./Home/ComposeChirp";
import ButtonCustom from "./../UI/ButtonCustom";
import Chirps from "./Home/Chirps/Chirps";
const Content = () => {
  return (
    <Stack>
      <Stack>
        <ComposeChirp />
        <ButtonCustom variant='contained' size='medium'>Chirp</ButtonCustom>
      </Stack>
      <br/>
      <Divider/>
      <br/>
      <Chirps/>
    </Stack>
  );
};

export default Content;
