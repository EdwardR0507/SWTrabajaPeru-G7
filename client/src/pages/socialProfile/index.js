/*Importamos las librerias principales*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import GlobalEnv from "../../GlobalEnv";
import { useLocation } from "react-router";
import { Container, Grid, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ProfileCard from "../../components/Cards/ProfileCard";
import ProfileServiceCard from "../../components/Cards/ProfileServiceCard";
import NavBar from "../../layouts/NavBar";
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
  const [user, setUser] = useState();
  const location = useLocation();
  const state = location.state

  useEffect(() => {
    console.log(state)
    //Cambiar post por get cuando se arregle
    axios
      .post(`${GlobalEnv.host}/user-auth`, {
        command: "OBTAIN_USER"
      }, {
        headers: {
          authorization: `Bearer ${state?.token}`
        }
      }
      )
      .then((res) => {
        console.log(res)
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <NavBar user={user} />
      <StyledContainer>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <ProfileCard user={user}></ProfileCard>
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
