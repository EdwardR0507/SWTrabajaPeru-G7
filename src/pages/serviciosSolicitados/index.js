import { React } from "react";
import NavBar from "../../layouts/NavBar";
import HeadingBar from "../../layouts/HeadingBar/HeadingBar";
import { Container, Typography, withStyles, Grid, Box } from "@material-ui/core/";
import ServiciosSolicitados from "../../layouts/Tables/ServiciosSolicitados"

const StyledTypography = withStyles({
  root: {
    fontSize: "2.25rem",
    lineHeigth: "2.25em",
    fontStyle: "normal",
    fontWeigth: "400",
  },
})(Typography);

const StyledContainer = withStyles({
  root: {
    marginTop: "0.9em",
    paddingLeft: "9.4em",
    display: "flex",
    alignItems: "center",
  },
})(Container);

const ServicioSolicitado = () => {
  return(
    <>
      <NavBar/>
      <HeadingBar before={"TRABAJADOR"} after={"SERVICIOS SOLICITADOS"} />
      <StyledContainer>
        <StyledTypography>SERVICIOS SOLICITADOS</StyledTypography>
      </StyledContainer>
      <Grid container   justifyContent="center"  alignItems="center" >
        <Box ml={10} pl={6} mt={3}>
          <ServiciosSolicitados></ServiciosSolicitados>
        </Box>
      </Grid>
    </>
  ) 
};
export default ServicioSolicitado;
