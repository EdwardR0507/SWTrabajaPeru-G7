import React from "react";
import NavBar from "../../layouts/NavBar";
import HeadingBar from "../../layouts/HeadingBar/HeadingBar";
import Container from "@material-ui/core/Container";
import AddButton from "../../components/Buttons/AddButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const StyledTypography = withStyles({
  root: {
    fontSize: "34px",
    lineHeigth: "36px",
    fontStyle: "normal",
    fontWeigth: "400",
  },
})(Typography);

const StyledContainer = withStyles({
  root: {
    marginTop: "0.9em",
    paddingLeft: "9.4em",
    display: "flex",
    alignItems: "center",
  },
})(Container);

export default function ManageServices() {
  return (
    <>
      <NavBar></NavBar>
      <HeadingBar></HeadingBar>
      <StyledContainer>
        <StyledTypography>Mis Servicios</StyledTypography>
        <AddButton name="+ agregar"></AddButton>
      </StyledContainer>
    </>
  );
}
