/*Importamos las librerias principales*/
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import { Container, Grid, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ProfileCard from "../../components/Cards/ProfileCard";
import ProfileServiceCard from "../../components/Cards/ProfileServiceCard";
import NavBar from "../../layouts/NavBar";
import { fetchData } from "../../services/services";
import Spinner from "../../components/Spinner/Spinner";
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
  const [profile, setProfile] = useState();
  const [services, setServices] = useState([]);
  const location = useLocation();
  const state = location.state;
  const history = useHistory();

  let token;

  //Información del usuario
  useEffect(() => {
    console.log(state);
    //Cambiar post por get cuando se arregle
    if (!localStorage.hasOwnProperty("User_session")) {
      history.push({
        pathname: "/signup",
      });
    } else {
      token = localStorage.getItem("User_session");
      token = token.slice(1, -1);
      fetchData(token, "GET", "user-auth", "GET_MY_USER")
        .then((res) => {
          console.log(res);
          setUser(res);
          if (location.pathname === "/myAccount") {
            setProfile(res);
          } else if (location.pathname === "/profile") {
            fetchData(token, "POST", "user-auth", "OBTAIN_USER", {
              us_id: state?.idUser,
            }).then((res) => {
              console.log(res);
              setProfile(res[0]);
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [state]);

  useEffect(() => {
    token = localStorage.getItem("User_session");
    token = token.slice(1, -1);
    if (location.pathname === "/myAccount") {
      fetchData(token, "GET", "service-auth", "GET_MY_SERVICES").then((res) => {
        console.log(res);
        setServices(res);
      });
    }
    //Falta agregar la obtención de servicios de otro usuario
    else if (location.pathname === "/profile") {
      fetchData(token, "POST", "service-auth", "GET_OTHERS_SERVICES", {
        us_id: state?.idUser,
      }).then((res) => {
        console.log(res);
        setServices(res);
      });
    }
  }, [state?.token]);

  return user && profile && services ? (
    <>
      <NavBar user={user} token={state?.token} />
      <StyledContainer>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <ProfileCard user={profile}></ProfileCard>
          </Grid>
          <Grid item xs={8} spacing={3}>
            {services.map((service) => (
              <Box>
                <ProfileServiceCard
                  key={`${service.cat_id} - ${service.cat_nombre}`}
                  service={service}
                ></ProfileServiceCard>
              </Box>
            ))}
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  ) : (
    <Spinner />
  );
}
