/*Importamos las librerias principales*/
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import { Container, Grid, Box, Typography } from "@material-ui/core";
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

  const user_sesion = localStorage.getItem("User_session");
  const token = user_sesion.slice(1, -1);

  //Información del usuario
  useEffect(() => {
    if (!localStorage.hasOwnProperty("User_session")) {
      history.push({
        pathname: "/signup",
      });
    } else {
      fetchData(token, "GET", "user-auth", "GET_MY_USER")
        .then((myUser) => {
          setUser(myUser);
          location.pathname === "/myAccount"
            ? setProfile(myUser)
            : fetchData(token, "POST", "user-auth", "OBTAIN_USER", {
                us_id: state?.us_id,
              }).then((profUser) => {
                setProfile(profUser[0]);
              });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [state, history, location.pathname, token]);

  useEffect(() => {
    if (location.pathname === "/myAccount") {
      fetchData(token, "GET", "service-auth", "GET_MY_SERVICES").then((res) => {
        console.log(res);
        setServices(res);
      });
    } else if (location.pathname === "/profile") {
      fetchData(token, "POST", "service-auth", "GET_OTHERS_SERVICES", {
        us_id: state?.us_id,
      })
        .then((res) => {
          console.log("services publico:", res);
          console.log(res);
          setServices(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [state, location.pathname, token]);

  const renderServices = () => {
    return services.length > 0 ? (
      services.map((service) => (
        <Box>
          <ProfileServiceCard
            key={`${service.cat_id} - ${service.cat_nombre}`}
            service={service}
          ></ProfileServiceCard>
        </Box>
      ))
    ) : (
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6">
          Este usuario no tiene servicios publicos
        </Typography>
      </Box>
    );
  };

  return user && profile && services ? (
    <>
      <NavBar user={user} token={state?.token} />
      <StyledContainer>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <ProfileCard user={profile}></ProfileCard>
          </Grid>
          <Grid item xs={8} spacing={3}>
            {renderServices()}
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  ) : (
    <Spinner />
  );
}
