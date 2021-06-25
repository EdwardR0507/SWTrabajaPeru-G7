import React from "react";
import { withStyles } from "@material-ui/styles";
import theme from "../../themes/themes";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavBar from "../../layouts/NavBar";
import ServiceCard from "../../components/Cards/ServiceCard";
import WorkerCard from "../../components/Cards/WorkerCard";

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
    color: theme.palette.secondary.main,
    marginRight: "40px",
    marginTop: "12px",
    letterSpacing: "0.18px",
  },
})(Link);

export default function Home() {
  return (
    <>
      <NavBar />
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
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
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
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <StyledIconButton>
            <NavigateNextIcon />
          </StyledIconButton>
        </StyledCardContainer>
      </Container>
    </>
  );
}
