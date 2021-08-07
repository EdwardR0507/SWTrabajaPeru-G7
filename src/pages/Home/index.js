import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { withStyles } from "@material-ui/styles";
import { Container, Link, Typography, IconButton } from "@material-ui/core/";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavBar from "../../layouts/NavBar";
import ServiceCard from "../../components/Cards/ServiceCard";
import WorkerCard from "../../components/Cards/WorkerCard";
import theme from "../../themes/themes";
import { fetchData, fetchUserData } from "../../services/services";
const StyledContentContainer = withStyles({
  root: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-between",
  },
})(Container);

const StyledCardContainer = withStyles({
  root: {
    margin: "0 10px",
    display: "flex",
  },
})(Container);

const StyledIconButton = withStyles({
  root: {
    height: "50px",
    margin: "auto 0",
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
})(IconButton);

const StyledH2 = withStyles({
  root: {
    fontSize: "36px",
  },
})(Typography);

const StyledLink = withStyles({
  root: {
    color: theme.palette.primary.main,
    marginRight: "40px",
    marginTop: "12px",
    letterSpacing: "0.18px",
  },
})(Link);

export default function Home() {
  const location = useLocation();
  const [services, setServices] = useState();
  const [workers, setWorkers] = useState();
  const [user, setUser] = useState();
  const state = location.state;

  useEffect(() => {
    fetchUserData("GET", "service", "GET_HOME_SERVICES").then((res) => {
      console.log(res);
      setServices(res);
    });
  }, []);

  useEffect(() => {
    fetchUserData("GET", "user", "GET_HOME_USERS").then((res) => {
      console.log(res);
      setWorkers(res);
    });
  }, []);

  useEffect(() => {
    if (state?.token) {
      fetchData(state?.token, "GET", "user-auth", "GET_MY_USER")
        .then((res) => {
          console.log(res);
          setUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  }, [state?.token]);

  return workers && services ? (
    <>
      {user ? <NavBar user={user} token={state?.token} /> : <NavBar />}
      <Container>
        <StyledContentContainer>
          <StyledH2 variant="h2">Servicios</StyledH2>
          <StyledLink href="#">
            <Typography variant="h5">VER TODO</Typography>
          </StyledLink>
        </StyledContentContainer>
        <StyledCardContainer>
          {/*Extensión a cantidad de servicios aleatorios
                       con información desde la base de datos 
                       Iterar y por cada info generar un service card*/}
          <StyledIconButton>
            <NavigateBeforeIcon />
          </StyledIconButton>
          {services?.map((service) =>
            user ? (
              <ServiceCard
                key={`${service.us_id}-${service.cat_id}`}
                service={service}
                token={state?.token}
              />
            ) : (
              <ServiceCard
                key={`${service.us_id}-${service.cat_id}`}
                service={service}
              />
            )
          )}
          <StyledIconButton>
            <NavigateNextIcon />
          </StyledIconButton>
        </StyledCardContainer>
        <StyledContentContainer>
          <StyledH2 variant="h2">Trabajadores</StyledH2>
          <StyledLink href="#">
            <Typography variant="h5">VER TODO</Typography>
          </StyledLink>
        </StyledContentContainer>
        <StyledCardContainer>
          <StyledIconButton>
            <NavigateBeforeIcon />
          </StyledIconButton>
          {workers?.map((worker) => (
            <WorkerCard worker={worker} />
          ))}
          <StyledIconButton>
            <NavigateNextIcon />
          </StyledIconButton>
        </StyledCardContainer>
      </Container>
    </>
  ) : (
    <div>Cargando...</div>
  );
}
