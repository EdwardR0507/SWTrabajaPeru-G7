/*Importamos las librerias principales*/
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router";
import NavBar from "../../layouts/NavBar";
import { Container, withStyles, Grid } from "@material-ui/core/";
import ServiceDetailsCard from "../../components/Cards/ServiceDetailsCard";
import WorkerCard from "../../components/Cards/WorkerCard";
import { fetchData } from "../../services/services";

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
  const [user, setUser] = useState({});
  const state = location.state;
  const history = useHistory();
  const [service, setService] = useState({});
  const [worker, setWorker] = useState();
  /*Declaramos lo que nos va a retornar la funcion*/
  //Información del usuario
  let token = localStorage.getItem("User_session")
  token = token.slice(1, -1)
  
  useEffect(() => {
    if(!localStorage.hasOwnProperty("User_session")){
      history.push({
        pathname: "/signup"
      })
    }
    else{
    fetchData(token, "GET", "user-auth", "GET_MY_USER").then((res) => {
      setUser(res);
    });
    }
  }, [state?.token]);

  useEffect(() => {
    const data = {
      us_id: state?.us_id,
      cat_id: state?.cat_id,
    };
    fetchData(
      token,
      "POST",
      "service-auth",
      "OBTAIN_SERVICE",
      data
    ).then((res) => {
      setService(res[0]);
    });
  }, [state?.token, state?.us_id, state?.cat_id]);

  useEffect(() => {
    const newData = { us_id: state?.us_id };
    fetchData(token, "POST", "user-auth", "OBTAIN_USER", newData).then(
      (res) => {
        setWorker(res[0]);
      }
    );
  }, [state?.token, state?.us_id]);

  return service && worker ? (
    <>
      {/*Declaramos el navbar que es el encabezado de la page*/}
      <NavBar user={user} token={state?.token} />
      <StyledContainer>
        {/*Usamos grid para dividir las los dos cards*/}
        {console.log(user)}
        <Grid container xs={12} sm={8} spacing={12}>
          <ServiceDetailsCard
            service={service}
            token={state?.token}
            user={user}
            worker={worker}
          />
        </Grid>
        <Grid container xs={12} sm={4} spacing={12}>
          <WorkerCard worker={worker} />
        </Grid>
      </StyledContainer>
    </>
  ) : (
    <div>Cargando...</div>
  );
};
export default ServiceDetails;
