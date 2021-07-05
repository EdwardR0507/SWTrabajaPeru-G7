import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import theme from "../../themes/themes";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "20px",
    width: "85%",
    height: "9em",
    borderBottom: "1px solid #00000012",
  },
}));

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
    width: "8.7em",
    height: "2.85em",
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
    height: "2.85em",
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

const StyledContainerButtons = withStyles({
  root: {
    display: "flex",
    width: "50%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
})(Container);

const ServiceCard = () => {
  const classes = useStyles();

  const [name, setName] = useState("Nombre del Servicio");
  const [description, setDescription] = useState("Descripción");
  const [state, setState] = useState(true);

  const handleEdit = () => {
    setName("");
    setDescription("");
  };

  const handleDelete = () => {
    setState(false);
  };

  return (
    <>
      {state ? (
        <>
          <Container className={classes.root}>
            <StyledContainerData>
              <StyledContainerImage><></>
              </StyledContainerImage>
              <Container>
                <Typography color="primary" variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="subtitle2">{description}</Typography>
              </Container>
            </StyledContainerData>
            <StyledContainerButtons>
              <StyledEditButton onClick={handleEdit}>
                Editar
                <CreateIcon />
              </StyledEditButton>
              <StyledDeletButton onClick={handleDelete}>
                Eliminar
                <DeleteIcon />
              </StyledDeletButton>
            </StyledContainerButtons>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default ServiceCard;
