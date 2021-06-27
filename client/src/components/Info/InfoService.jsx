import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import theme from "../../themes/themes";
import Image from "material-ui-image";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const StyledContainer = withStyles({
  root: {
    display: "flex",
    marginTop: "20px",
    width: "59.4em",
    height: "9em",
    borderBottom: "1px solid #00000012",
  },
})(Container);

const StyledEditButton = withStyles({
  root: {
    background: theme.palette.primary.main,
    color: theme.colorLetter.primary.main,
    display: "flex",
    justifyContent: "space-evenly",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    textTransform: "uppercase",
    width: "140px",
    height: "48px",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
})(Button);

const StyledDeletButton = withStyles({
  root: {
    background: theme.serviceButton.primary.main,
    display: "flex",
    justifyContent: "space-evenly",
    color: theme.palette.secondary.main,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    textTransform: "uppercase",
    width: "140px",
    height: "48px",
    "&:hover": {
      background: theme.serviceButton.primary.main,
    },
  },
})(Button);

const StyledContainerData = withStyles({
  root: {
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
})(Container);

const StyledContainerImage = withStyles({
  root: {
    width: "15em",
  },
})(Container);

const StyledImage = withStyles({
  root: {
    maxWidth: "100%",
  },
})(Image);

const StyledContainerButtons = withStyles({
  root: {
    display: "flex",
    width: "50%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
})(Container);

const ServiceCard = () => {
  return (
    <>
      <StyledContainer>
        <StyledContainerData>
          <StyledContainerImage>
            {/*
            <StyledImage
              src="acá irá la imagen del servicio"
              cover
            ></StyledImage>*/}
          </StyledContainerImage>
          <Container>
            <Typography color="primary" variant="subtitle1">
              Nombre del Servicio
            </Typography>
            <Typography variant="subtitle2">lorem ipsum</Typography>
          </Container>
        </StyledContainerData>
        <StyledContainerButtons>
          <StyledEditButton>
            Editar
            <CreateIcon />
          </StyledEditButton>
          <StyledDeletButton>
            Eliminar
            <DeleteIcon />
          </StyledDeletButton>
        </StyledContainerButtons>
      </StyledContainer>
    </>
  );
};

export default ServiceCard;
