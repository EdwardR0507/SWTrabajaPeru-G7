/*Importamos las librerias principales*/
import { React, useState } from "react";
import { useLocation } from "react-router";
import NavBar from "../../layouts/NavBar";
import { Container, withStyles, Grid} from "@material-ui/core/";
import ServiceDetailsCard from "../../components/Cards/ServiceDetailsCard";
import WorkerCard from "../../components/Cards/WorkerCard";
/*Declaramos los estilos que se van a usar por cada componente*/

/*Declaramos el estilo del container*/ 
const StyledContainer = withStyles({
  root: {
    marginTop: "0.9em",
    paddingLeft: "9.4em",
    display: "flex",
    alignItems: "center",
  },
})(Container);
/*Declaramos el objeto*/

/*Declaramos la funcion principal*/
const ServiceDetails = () => {
/*Declaramos lo que nos va a retornar la funcion*/ 
  return (
    <>
      {/*Declaramos el navbar que es el encabezado de la page*/}
      <NavBar />
      <StyledContainer>
        {/*Usamos grid para dividir las los dos cards*/}
        <Grid container xs={12} sm={8} spacing={12}>
          <ServiceDetailsCard />
        </Grid>
        <Grid container xs={12} sm={4} spacing={12}>
          <WorkerCard/>
        </Grid>
      </StyledContainer>
    </>
  );
};
export default ServiceDetails;
