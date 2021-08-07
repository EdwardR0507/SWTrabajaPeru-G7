/*Importamos las librerias principales*/
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router";
import NavBar from "../../layouts/NavBar";
import { Container, withStyles, Grid } from "@material-ui/core/";
import ServiceDetailsCard from "../../components/Cards/ServiceDetailsCard";
import WorkerCard from "../../components/Cards/WorkerCard";
import { fetchData } from "../../services/services";
import axios from "axios";
import GlobalEnv from "../../GlobalEnv";
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
  const location = useLocation();
  const [user, setUser] = useState();
  const state = location.state;
  const [service, setService] = useState();
  /*Declaramos lo que nos va a retornar la funcion*/
  //Información del usuario
  useEffect(() => {
    fetchData(state?.token, "GET", "user-auth", "GET_MY_USER").then((res) => {
      setUser(res);
    });
  }, [state?.token]);

  //Cambiar por las funciones de service.js
    console.log(state);
    //Cambiar post por get cuando se arregle
   
  useEffect(() => {
    console.log(location);
    axios
      .post(
        `${GlobalEnv.host}/service-auth`,
        {
          command: "OBTAIN_SERVICE",
          transaction: {
            us_id: state?.us_id,
            cat_id: state?.cat_id
          }
        },
        {
          headers: {
            authorization: `Bearer ${state?.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data[0]);
        setService(res.data[0])
      });
  }, []);

  useEffect(() => {
    console.log(location);
    axios
      .post(
        `${GlobalEnv.host}/user-auth`,
        {
          command: "OBTAIN_USER",
          transaction: {
            us_id: state?.us_id,
          }
        },
        {
          headers: {
            authorization: `Bearer ${state?.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        //setService(res.data[0])
      });
  }, []);

  return service ? (
    <>
      {/*Declaramos el navbar que es el encabezado de la page*/}
      <NavBar user={user} />
      <StyledContainer>
        {/*Usamos grid para dividir las los dos cards*/}
        {console.log(user)}
        <Grid container xs={12} sm={8} spacing={12}>
          <ServiceDetailsCard service={service} />
        </Grid>
        <Grid container xs={12} sm={4} spacing={12}>
          <WorkerCard user={user} />
        </Grid>
      </StyledContainer>
    </>
  ) : (
    <div>Cargando...</div>
  );
};
export default ServiceDetails;
