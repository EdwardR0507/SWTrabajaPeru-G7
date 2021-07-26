/*Importamos las librerias principales*/
import React from "react";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "../../components/Cards/ProfileCard";
import { Container } from "@material-ui/core";
import ProfileServiceCard from "../../components/Cards/ProfileServiceCard";
import NavBar from "../../layouts/NavBar";
import { withStyles } from "@material-ui/core/styles";
/*Declaramos los estilos que se van a usar por cada componente*/
/*Declaramos el estilo del container*/ 
const StyledContainer = withStyles({
  root: {
    marginTop: "0.9em",
    paddingLeft: "2.4em",
    display: "flex",
    alignItems: "center",
  },
})(Container);
/*Declaramos la función principal*/
export default function socialProfile() {
  return (
    <>
      <NavBar></NavBar>
      <StyledContainer>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
              <ProfileCard></ProfileCard>
          </Grid>
          <Grid item xs={8} spacing={3}>
            <Box>
              <ProfileServiceCard></ProfileServiceCard>
            </Box>
            <Box>
              <ProfileServiceCard></ProfileServiceCard>
            </Box>
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
}
