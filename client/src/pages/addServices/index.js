import React from "react";
import NavBar from "../../layouts/NavBar";
import Container from "@material-ui/core/Container";
import HeadingBar from "../../layouts/HeadingBar/HeadingBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Image from "material-ui-image";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
const StyledContainerAll = withStyles({
  root: {
    marginTop: "2em",
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
    height: "100%",
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

const StyledContainerData = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
  },
})(Container);

const StayledContainerService = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "0",
  },
})(Container);

const useStyles = makeStyles((theme) => ({
  form: {
    height: "100%",
    display: "flex",
    width: "100%",
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
        <form className={classes.form} noValidate>
          <StyledContainer>
            <StyledContainerData>
              <StayledContainerService>
                <InputLabel id="imput6" htmlFor="filled-age-native-simple">
                  Nombre el Servicio
                </InputLabel>
                <Select
                  native
                  inputProps={{
                    name: "servicio",
                    id: "filled-servicio-native-simple",
                  }}
                >
                  <option hidden />
                  <option value="Albañil">Albañil</option>
                </Select>
              </StayledContainerService>
              <TextField
                id="filled-multiline-flexible"
                label="Descripción"
                multiline
                rowsMax={4}
                variant="filled"
              />
            </StyledContainerData>
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
        </form>
      </StyledContainerAll>
    </>
  );
}
