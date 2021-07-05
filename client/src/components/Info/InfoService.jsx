import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import theme from "../../themes/themes";
import Image from "material-ui-image";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    marginTop: "20px",
    width: "85%",
    height: "9em",
    borderBottom: "1px solid #00000012",
  },
  description: {
    fontSize: "1.1em",
    fontFamily: "Roboto",
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

const ServiceCard = ({ name, description }) => {
  const classes = useStyles();

  const [nameService, setNameService] = useState(name);
  const [descriptionService, setDescriptionService] = useState(description);
  const [state, setState] = useState(true);

  const handleEdit = () => {
    setNameService("nombre");
    setDescriptionService("descripcion");
  };

  const handleDelete = () => {
    setState(false);
  };

  const filteredWords = (str) => {
    let wrapWords = [];
    let i = 0,
      j = 0;
    if (str.split(" ").length === 1) {
      if (str.length >= 35) {
        while (i <= str.length) {
          wrapWords[j] = str.slice(i, i + 35);
          i += 35;
          j++;
        }
        return wrapWords.join("\n");
      } else {
        return str;
      }
    } else {
      return str;
    }
  };

  return (
    <>
      {state ? (
        <>
          <Container className={classes.root}>
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
                  {nameService}
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {filteredWords(descriptionService)}
                </Typography>
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
