/*Importamos las librerias principales*/
import { React, useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import NavBar from "../../layouts/NavBar";
import { Container, withStyles, Grid } from "@material-ui/core/";
import ServiceDetailsCard from "../../components/Cards/ServiceDetailsCard";
import WorkerCard from "../../components/Cards/WorkerCard";
import { fetchData } from "../../services/services";
import Spinner from "../../components/Spinner/Spinner";

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
  const state = location.state;
  const history = useHistory();

  const [user, setUser] = useState({});
  const [service, setService] = useState({});
  const [worker, setWorker] = useState();

  /*Declaramos lo que nos va a retornar la funcion*/
  //Información del usuario
  const user_sesion = localStorage.getItem("User_session");
  const token = user_sesion.slice(1, -1);

  useEffect(() => {
    if (!localStorage.hasOwnProperty("User_session")) {
      history.push({
        pathname: "/signup",
      });
    } else {
      fetchData(token, "GET", "user-auth", "GET_MY_USER").then((sesion) => {
        setUser(sesion);
      });
    }
  }, [history, token]);

  useEffect(() => {
    const data = {
      us_id: state?.us_id,
      cat_id: state?.cat_id,
    };
    fetchData(token, "POST", "service-auth", "OBTAIN_SERVICE", data).then(
      (obtainService) => {
        setService(obtainService[0]);
      }
    );
  }, [token, state]);

  useEffect(() => {
    const newData = { us_id: state?.us_id };
    fetchData(token, "POST", "user-auth", "OBTAIN_USER", newData).then(
      (obtainWorker) => {
        setWorker(obtainWorker[0]);
      }
    );
  }, [token, state]);

  return service && worker ? (
    <>
      {/*Declaramos el navbar que es el encabezado de la page*/}
      <NavBar user={user} token={state?.token} />
      <StyledContainer>
        {/*Usamos grid para dividir las los dos cards*/}
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
    <Spinner />
  );
};
export default ServiceDetails;
