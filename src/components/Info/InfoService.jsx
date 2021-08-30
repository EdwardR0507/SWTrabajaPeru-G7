import { React, useState } from "react";
import {
  makeStyles,
  withStyles,
  Container,
  Typography,
} from "@material-ui/core/";
import ServiceModal from "../Modals/ServiceModal";
import DialogDelete from "../Dialog/DialogDelete";
import { useLocation } from "react-router";
import { fetchData } from "../../services/services";
import image from "../../assets/services.jpg";
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
    marginBottom: "2em",
    overflowWrap: "break-word",
    display: "inline-block",
    wordBreak: "break-word"
  },
})(Container);

const InfoService = ({ cat_id, cat_nombre, ser_descripcion }) => {
  const classes = useStyles();

  const [descriptionService, setDescriptionService] = useState(ser_descripcion);
  //Controlar el renderizado condicional, al ser false no se renderizará el componente InfoService
  const [stateRender, setStateRender] = useState(true);

  const [modalDescription, setModalDescription] = useState(ser_descripcion);

  const location = useLocation();
  const state = location.state;

  const handleEdit = (e) => {
    setModalDescription(e.target.value);
  };

  const handleDelete = () => {
    const newData = { cat_id: cat_id };
    fetchData(state?.token, "POST", "service-auth", "DELETE_SERVICE", newData);
    setStateRender(false);
  };

  return (
    <>
      {stateRender ? (
        <Container className={classes.root}>
          <StyledContainerData>
            {/*Aquí irá la imagen del servicio, primero importamos la imagen y luego la colocamos dentro del src, no olvidar poner el alt */}
            <StyledContainerImage>
              <img src={image} alt={"servicio"} className={classes.image} />
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
              cat_nombre={cat_nombre}
              serviceDescription={descriptionService}
              role="edit"
              handleEdit={handleEdit}
              modalDescription={modalDescription}
              setDescriptionService={setDescriptionService}
            />
            <DialogDelete
              role="delete"
              cat_nombre={cat_nombre}
              handleDelete={handleDelete}
            />
          </StyledContainerButtons>
        </Container>
      ) : null}
    </>
  );
};

export default InfoService;
