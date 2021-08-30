import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { withStyles } from "@material-ui/styles";
import { Container, Typography, IconButton } from "@material-ui/core/";
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

export default function Home() {
  //Paginación
  const [pageServices, setPageServices] = useState(0);
  const [pageWorkers, setPageWorkers] = useState(0);

  const location = useLocation();
  const [services, setServices] = useState();
  // Servicios que se reenderizan por página
  const [workers, setWorkers] = useState();
  // Trabajadores que se renderizan por página
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

  let token;

  useEffect(() => {
    console.log(localStorage.getItem("User_session"))
    if (localStorage.hasOwnProperty("User_session")) {
      token = localStorage.getItem("User_session")
      token = token.slice(1, -1)
      fetchData(token, "GET", "user-auth", "GET_MY_USER")
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

  const handleServiceBefore = () => {
    if (pageServices > 0) {
      setPageServices(pageServices - 1);
    }
  };

  const handleWorkerBefore = () => {
    if (pageWorkers > 0) {
      setPageWorkers(pageWorkers - 1);
    }
  };

  const handleServiceAfter = () => {
    if (pageServices < services.length - 4) {
      setPageServices(pageServices + 1);
    }
  };

  const handleWorkerAfter = () => {
    if (pageWorkers < workers.length - 4) {
      setPageWorkers(pageWorkers + 1);
    }
  };

  const conditionalNavBar = () => {
    return user ? <NavBar user={user} token={token} /> : <NavBar />;
  }

  return workers && services ? (
    <>
      {conditionalNavBar()}
      <Container role="home">
        <StyledContentContainer>
          <StyledH2 variant="h2">Servicios</StyledH2>
        </StyledContentContainer>
        <StyledCardContainer>
          {/*Extensión a cantidad de servicios aleatorios
                       con información desde la base de datos 
                       Iterar y por cada info generar un service card*/}
          <StyledIconButton onClick={handleServiceBefore}>
            <NavigateBeforeIcon />
          </StyledIconButton>
          {services
            ?.slice(pageServices, pageServices + 3)
            .map((service) =>
              user ? (
                <ServiceCard
                  key={`${service.us_id}-${service.cat_id}`}
                  service={service}
                  token={token}
                />
              ) : (
                <ServiceCard
                  key={`${service.us_id}-${service.cat_id}`}
                  service={service}
                />
              )
            )}
          <StyledIconButton onClick={handleServiceAfter}>
            <NavigateNextIcon />
          </StyledIconButton>
        </StyledCardContainer>
        <StyledContentContainer>
          <StyledH2 variant="h2">Trabajadores</StyledH2>
        </StyledContentContainer>
        <StyledCardContainer>
          <StyledIconButton onClick={handleWorkerBefore}>
            <NavigateBeforeIcon />
          </StyledIconButton>
          {workers?.slice(pageWorkers, pageWorkers + 3).map((worker) => (
            <WorkerCard worker={worker} />
          ))}
          <StyledIconButton onClick={handleWorkerAfter}>
            <NavigateNextIcon />
          </StyledIconButton>
        </StyledCardContainer>
      </Container>
    </>
  ) : (
    <div>Cargando...</div>
  );
}
