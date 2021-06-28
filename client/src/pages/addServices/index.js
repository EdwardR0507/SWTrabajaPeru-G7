import React from "react";
import NavBar from "../../layouts/NavBar";
import Container from "@material-ui/core/Container";
import HeadingBar from "../../layouts/HeadingBar/HeadingBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Input from "../../components/TextFields/Input";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Image from "material-ui-image";

const StyledContainerAll = withStyles({
  root: {
    marginTop: "0.9em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "80vw",
    height: "400px",
  },
})(Container);

const StyledTypography = withStyles({
  root: {
    fontSize: "2.25rem",
    lineHeigth: "2.25em",
    fontStyle: "normal",
    fontWeigth: "400",
  },
})(Typography);

const StyledContainer = withStyles({
  root: {
    marginTop: "0.9em",
    height: "300px",
    display: "flex",
  },
})(Container);

const StyledContainerImage = withStyles({
  root: {
    width: "100%",
  },
})(Container);

const StyledContainerButton = withStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
})(Container);

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
}));

export default function AddServices() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <HeadingBar before={"TRABAJADOR"} after={"REGISTRAR SERVICIO"} />
      <StyledContainerAll>
        <StyledTypography>Nuevo Servicio</StyledTypography>
        <StyledContainer>
          <form className={classes.form} noValidate>
            <Input id="imput1" label="Nombre del Servicio" />
            <Input id="imput2" label="Descripción" />
            <Input id="imput3" label="Tarifa" />
          </form>
          <StyledContainerImage>Imagen</StyledContainerImage>
        </StyledContainer>
        <StyledContainerButton>
          <SecondaryButton
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.submit}
            name="CREAR"
          ></SecondaryButton>
        </StyledContainerButton>
      </StyledContainerAll>
    </>
  );
}
