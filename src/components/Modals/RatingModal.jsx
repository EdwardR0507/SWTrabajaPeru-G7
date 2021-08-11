import { React, useState, useEffect } from "react";
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
import { useForm } from "react-hook-form";
import AddIcon from "@material-ui/icons/Add";
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
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
    },
}));

const RatingModal = ({ service, token, user }) => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Variable para customizar los componentes
  const classes = useStyles();

  // Estado para controlar la apertura y cierre de los modales
  const [open, setOpen] = useState(false);
  const [serviceData, setServiceData] = useState({});

  useEffect(() => {
    setServiceData(service);
  }, [service, user]);

  // Función para abrir el modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (datos, e) => {
    const newData = {
      cat_id: serviceData.cat_id,
      us_id_trabajador: serviceData.us_id,
      sol_mensaje: datos.sol_mensaje,
    };
    fetchData(
      token,
      "POST",
      "solicitud-auth",
      "CREATE_SOLICITUD",
      newData
    ).then((res) => {
      console.log("respuesta creación de solicitud:");
      console.log(res);
    });
    e.preventDefault();
    reset();
    handleClose();
  };

  return (
    <>
      <Button
        className={classes.button}
        // Funcion para abrir modal
        onClick={handleOpen}
        variant="contained"
        color="primary"
        endIcon={<AddIcon />}
      >
        CALIFICAR
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
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <Typography className={classes.title} variant="h5">
                CALIFICAR TRABAJADOR
              </Typography>  
            
              <Grid className={classes.start} container justifycontent="center" alignItems="center">
                    <Grid item>
                      <Rating name="size-large" size="large"/>  
                    </Grid>                   
              </Grid>

              {/* Contenedor de botones finales */}
              <Container className={classes.containerButton}>
                <SecondaryButton
                  variant="contained"
                  name="CANCELAR"
                  onClick={handleClose}
                ></SecondaryButton>

                <Container className={classes.wrapp}>
                  <PrimaryButton
                    type="submit"
                    name="ENVIAR"
                    className={classes.submit}
                    onClick={handleSubmit(onSubmit)}
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
