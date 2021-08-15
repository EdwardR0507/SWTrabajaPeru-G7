import { React, useState } from "react";
import {
  makeStyles,
  Container,
  Typography,
  Modal,
  Backdrop,
  Fade,
  Button,
  Grid,
} from "@material-ui/core/";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import theme from "../../themes/themes";
import { fetchData } from "../../services/services";
import Rating from "@material-ui/lab/Rating";
const useStyles = makeStyles(() => ({
  //Estilos para la customización del modal
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    position: "absolute",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 1),
    width: "30vw",
    height: "40vh",
  },
  form: {
    width: "100%",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  //Contenedor estilo para botones
  containerButton: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
  },
  //Estilo submit
  wrapp: {
    width: "200px",
  },
  start: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

const RatingModal = ({ person, token, solId, solEstado }) => {
  // Variable para customizar los componentes
  const classes = useStyles();

  // Estado para controlar la apertura y cierre de los modales
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);

  // Función para abrir el modal
  const handleOpen = () => {
    console.log("solestado: ", solEstado);
    const data = { sol_id: solId, sol_estado: "Finalizado" };
    fetchData(
      token,
      "POST",
      "solicitud-auth",
      "CHANGE_SOLICITUD_STATE",
      data
    ).then(() => {
      setOpen(true);
    });
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setOpen(false);
    window.location.replace("");
  };

  const handleChange = (e, value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id_solicitud: solId,
      calif_tra: rating,
    };
    fetchData(token, "POST", "solicitud-auth", "RATE_SERVICE", newData).then(
      () => {
        handleClose();
      }
    );
  };

  return (
    <>
      <Button
        className={classes.button}
        // Funcion para abrir modal
        onClick={handleOpen}
        variant="contained"
        color="primary"
      >
        FINALIZAR
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        disableScrollLock
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Typography className={classes.title} variant="h5">
                CALIFICAR {person}
              </Typography>

              <Grid
                className={classes.start}
                container
                justifycontent="center"
                alignItems="center"
              >
                <Grid item>
                  <Rating
                    name="simple-controlled"
                    size="large"
                    value={parseInt(rating)}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              {/* Contenedor de botones finales */}
              <Container className={classes.containerButton}>
                <SecondaryButton
                  variant="contained"
                  name="RECHAZAR"
                  onClick={handleClose}
                ></SecondaryButton>

                <Container className={classes.wrapp}>
                  <PrimaryButton
                    type="submit"
                    name="ACEPTAR"
                    className={classes.submit}
                    onClick={handleSubmit}
                  ></PrimaryButton>
                </Container>
              </Container>
              {/*Fin Contenedor de botones finales */}
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
export default RatingModal;
