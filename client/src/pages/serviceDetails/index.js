/*Importamos las librerias principales*/
import { React, useState } from "react";
import { useLocation } from "react-router";
import NavBar from "../../layouts/NavBar";
import { Container, Typography, withStyles, Grid} from "@material-ui/core/";
import ServiceDetailsCard from "../../components/Cards/ServiceDetailsCard";
import WorkerDetailsCard from "../../components/Cards/WorkerDetailsCard";
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
const arrObj = [
  {
    id: null,
    name: "",
    description: "",
  },
];
/*Declaramos la funcion principal*/
const ServiceDetails = () => {
  const location = useLocation();
  const state = location.state;
  const [data, setData] = useState(arrObj);
/*Declaramos lo que nos va a retornar la funcion*/ 
  return (
    <>
      /*Declaramos el navbar que es el encabezado de la page*/ 
      <NavBar />
      <StyledContainer>
      /*Usamos grid para dividir las vistas*/ 
      <Grid container xs={12}  sm={8} spacing={12}>
         <ServiceDetailsCard />
      </Grid>
      <Grid container xs={12}  sm={4} spacing={12}>
          <WorkerDetailsCard />
      </Grid>
      </StyledContainer>
    </>
  );
};
export default ServiceDetails;
