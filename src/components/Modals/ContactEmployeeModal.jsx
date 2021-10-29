import { Fragment, React, useState, useEffect } from "react";
import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Button,
  IconButton,
  Snackbar,
} from "@material-ui/core/";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import AddIcon from "@material-ui/icons/Add";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import theme from "../../themes/themes";
import FormError from "../../components/Errors/FormError";
import { fetchData } from "../../services/services";
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
    padding: theme.spacing(2, 4, 3),
    width: "50vw",
    height: "70vh",
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
    width: "60%",
    justifyContent: "space-evenly",
  },
  //Estilo submit
  wrapp: {
    width: "200px",
  },
}));

const ContactEmployeeModal = ({ service, token, user }) => {
  const [openSnack, setOpenSnack] = useState(false);
  const {
    handleSubmit,
    register,
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
    reset();
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
    handleClose();
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
      e.preventDefault();
      reset();
      setOpenSnack(true);
      setTimeout(() => {
        handleCloseSnack();
      }, 4000);
    });
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
        SOLICITAR
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
                CONTACTAR CON EL TRABAJADOR
              </Typography>
              <TextField
                style={{
                  width: "300",
                }}
                type="text"
                id="filled-multiline-flexible"
                label="Nombre y Apellidos"
                defaultValue={user.us_nombres}
                disabled
                name="emp_name"
                rowsMax={1}
                variant="filled"
              />
              <TextField
                id="filled-multiline-flexible"
                label="Correo Electrónico"
                name="emp_email"
                disabled
                defaultValue={user.us_correo}
                rowsMax={1}
                variant="filled"
              />
              <TextField
                id="filled-multiline-flexible"
                label="Celular"
                defaultValue={user.us_celular}
                name="em_phone"
                disabled
                rowsMax={1}
                variant="filled"
              />
              <TextField
                id="filled-multiline-flexible"
                label="Mensaje"
                multiline
                name="sol_mensaje"
                {...register("sol_mensaje", {
                  maxLength: 500,
                })}
                rowsMax={3}
                variant="filled"
              />
              <FormError
                condition={errors.sol_mensaje}
                content="Ingrese máximo 300 caracteres"
              />
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
              <Snackbar
                open={openSnack}
                autoHideDuration={6000}
                role="close"
                onClose={handleCloseSnack}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                message="Solicitud enviada"
                action={
                  <Fragment>
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      className={classes.close}
                      onClick={handleCloseSnack}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Fragment>
                }
              />
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
export default ContactEmployeeModal;
