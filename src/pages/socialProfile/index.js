/*Importamos las librerias principales*/
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Container, Grid, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ProfileCard from "../../components/Cards/ProfileCard";
import ProfileServiceCard from "../../components/Cards/ProfileServiceCard";
import NavBar from "../../layouts/NavBar";
import { fetchData } from "../../services/services";
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
export default function SocialProfile() {
  const [user, setUser] = useState({});
  const [services, setServices] = useState([]);
  const location = useLocation();
  const state = location.state;

  //Información del usuario
  useEffect(() => {
    console.log(location)
    console.log(state);
    //Cambiar post por get cuando se arregle
    if (location.pathname === "/myAccount") {
      fetchData(state?.token, "GET", "user-auth", "GET_MY_USER")
        .then((res) => {
          console.log(res);
          setUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else if (location.pathname === "/profile") {
      fetchData(state?.token, "POST", "user-auth", "OBTAIN_USER", state?.idUser).then(
        (res) => {
          console.log(res);
          setUser(res[0])
        }
      );
    }
  }, [state]);

  useEffect(() => {
    if (location.pathname === "/myAccount") {
      fetchData(state?.token, "GET", "service-auth", "GET_MY_SERVICES").then(
        (res) => {
          console.log(res);
          setServices(res);
        }
      );
    }
 //Falta agregar la obtención de servicios de otro usuario
  }, [state?.token]);

  return user && services ? (
    <>
      <NavBar user={user} token={state?.token} />
      <StyledContainer>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <ProfileCard user={user}></ProfileCard>
          </Grid>
          <Grid item xs={8} spacing={3}>
            {services.map((service) => (
              <Box>
                <ProfileServiceCard service={service}></ProfileServiceCard>
              </Box>
            ))}
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  ) : (
    <div>Cargando...</div>
  );
}
