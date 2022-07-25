import React from "react";
import { AppBar, Container, Grid, Grow, Typography, Item, Divider } from "@mui/material";
import chirperLogo from "./images/chirper-logo.png";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import News from "./components/News/News";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} align='center' justify="center" >
        <Grid item xs={3}>
          <Navbar />
        </Grid>
        <Grid item xs={6}>
          <Content />
        </Grid>
        <Grid item xs={3}>
          <News />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
