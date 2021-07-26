import React from "react";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "../../components/Cards/ProfileCard";
import { Container } from "@material-ui/core";
import DetailsServiceCard from "../../components/Cards/ServiceDetailsCard";
import NavBar from "../../layouts/NavBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const StyledContainer = withStyles({
  root: {
    marginTop: "0.9em",
    paddingLeft: "9.4em",
    display: "flex",
    alignItems: "center",
  },
})(Container);

export default function socialProfile() {
  return (
    <>
      <NavBar></NavBar>
      <StyledContainer>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4} >
            <ProfileCard></ProfileCard>
          </Grid>
          <Grid item xs={8} spacing={3}>
            <Box>
              <DetailsServiceCard></DetailsServiceCard>
            </Box>
            <Box>
              <DetailsServiceCard></DetailsServiceCard>
            </Box>
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
}
