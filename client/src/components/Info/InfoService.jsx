import { React, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Container, Button, Typography } from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import ServiceModal from "../Modals/ServiceModal";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    marginTop: "20px",
    marginBottom: "20px",
    width: "80%",
    height: "25vh",
    borderBottom: "1px solid #00000012",
  },
  description: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    textAlign: "justify",
  },
  button: {
    width: "9em",
    height: "2.8em",
    fontSize: "0.9em",
    lineHeight: "16px",
    letterSpacing: "1.25px",
  },
  image: {
    maxWidth: "100%",
    objectFit: "cover",
  },
}));

const StyledContainerData = withStyles({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
})(Container);

const StyledContainerImage = withStyles({
  root: {
    width: "25%",
  },
})(Container);

const StyledContainerButtons = withStyles({
  root: {
    display: "flex",
    width: "70%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
})(Container);

const WrapContainer = withStyles({
  root: {
    width: "100%",
    padding: "0.1em",
    overflowWrap: "break-word",
  },
})(Container);

const InfoService = ({ cat_nombre, ser_descripcion }) => {
  const classes = useStyles();

  const [descriptionService, setDescriptionService] = useState(ser_descripcion);
  const [state, setState] = useState(true);

  const [modalDescription, setModalDescription] = useState(ser_descripcion);

  const handleDelete = () => {
    setState(false);
  };

  const handleEdit = (e) => {
    setModalDescription(e.target.value);
  };

  return (
    <>
      {state ? (
        <Container className={classes.root}>
          <StyledContainerData>
            {/*Aquí irá la imagen del servicio, primero importamos la imagen y luego la colocamos dentro del src, no olvidar poner el alt */}
            <StyledContainerImage>
              <></>
              {/*<img src={imageService} alt={"servicio"} className={classes.image} />*/}
            </StyledContainerImage>
            <Container className={classes.description}>
              <Typography color="primary" variant="subtitle1">
                {cat_nombre}
              </Typography>
              <WrapContainer>
                <Typography variant="body2">{descriptionService}</Typography>
              </WrapContainer>
            </Container>
          </StyledContainerData>
          <StyledContainerButtons>
            <ServiceModal
              serviceDescription={descriptionService}
              handleEdit={handleEdit}
              modalDescription={modalDescription}
              setDescriptionService={setDescriptionService}
            />
            <Button
              variant="contained"
              endIcon={<DeleteIcon />}
              className={classes.button}
              onClick={handleDelete}
            >
              Eliminar
            </Button>
          </StyledContainerButtons>
        </Container>
      ) : null}
    </>
  );
};

export default InfoService;
