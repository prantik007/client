import React from "react";
import { Typography, TextField } from "@mui/material";

const ComposeChirp = () => {
  return (
    <div>
      <Typography variant="h4">Home</Typography>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        fullWidth
        placeholder="What's happening?"
      />
    </div>
  );
};

export default ComposeChirp;
