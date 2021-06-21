import React from "react";
import NavBar from "../../layouts/NavBar";
import HeadingBar from "../../layouts/HeadingBar/HeadingBar";
import Container from "@material-ui/core/Container";
import AddButton from "../../components/Buttons/AddButton";
import Typography from "@material-ui/core/Typography";
import InfoService from "../../components/Info/InfoService.jsx";
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
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

const StyledContainerButtons = withStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
  },
})(Container);

const StyledBeforeButton = withStyles({
  root: {
    backgroundColor: "#414040",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    color: "white",
  },
})(NavigateBeforeIcon);

const StyledNextButton = withStyles({
  root: {
    backgroundColor: "#000",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    color: "white",
  },
})(NavigateNextIcon);

export default function ManageServices() {
  return (
    <>
      <NavBar></NavBar>
      <HeadingBar></HeadingBar>
      <StyledContainer>
        <StyledTypography>Mis Servicios</StyledTypography>
        <AddButton name="+ agregar"></AddButton>
      </StyledContainer>
      <InfoService></InfoService>
      <InfoService></InfoService>
      <InfoService></InfoService>
      <InfoService></InfoService>
      <InfoService></InfoService>
      <StyledContainerButtons>
        <IconButton>
          <StyledBeforeButton></StyledBeforeButton>
        </IconButton>
        <IconButton>
          <StyledNextButton></StyledNextButton>
        </IconButton>
      </StyledContainerButtons>
    </>
  );
}
