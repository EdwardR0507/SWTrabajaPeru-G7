import { React, useState, useEffect } from "react";
import {
  makeStyles,
  Container,
  Typography,
  TextField,
  InputLabel,
  Modal,
  Backdrop,
  Fade,
  Select,
  MenuItem,
} from "@material-ui/core/";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import theme from "../../themes/themes";
import FormError from "../../components/Errors/FormError";
import { useForm } from "react-hook-form";
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
    height: "80vh",
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
/**/
const ManajeS = ({ serviceData, getToken, solId }) => {
  // Variable para customizar los componentes
  const classes = useStyles();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  // Estado para controlar la apertura y cierre de los modales
  const [open, setOpen] = useState(false);
  const [service, setService] = useState([]);
  const [token, setToken] = useState("");
  const [detailReq, setDetailReq] = useState({});

  useEffect(() => {
    setService(serviceData);
    setToken(getToken);
  }, [serviceData, getToken]);

  // Función para abrir el modal y para ver detalles de la solicitud
  const handleOpen = () => {
    const id = service.filter((el) => el.sol_id === solId)[0].sol_id;
    console.log("EL ID");
    console.log(id);
    const newData = { sol_id: id };
    console.log(newData);
    fetchData(token, "POST", "solicitud-auth", "OBTAIN_SOLICITUD", newData)
      .then((res) => {
        console.log("res");
        console.log(res);
        setDetailReq(res[0]);
      })
      .then(() => {
        setOpen(true);
      });
  };

  // Función para cerrar el modal
  const handleClose = () => {
    reset();
    setOpen(false);
  };

  // Envío de datos y cambiar el estado de la solicitud
  const onSubmit = (datos, e) => {
    const id_sol = service.filter((el) => el.sol_id === solId)[0].sol_id;
    const data = { sol_id: id_sol, sol_estado: datos.sol_estado };
    e.preventDefault();
    console.log("datos que se envían:");
    console.log(data);
    fetchData(token, "POST", "solicitud-auth", "CHANGE_SOLICITUD_STATE", data)
      .then((res) => {
        console.log("res cambio de estado:");
        console.log(res);
        window.location.replace("");
      })
      .then(() => {
        setOpen(false);
      });
  };

  return detailReq ? (
    <>
      <SecondaryButton
        onClick={handleOpen}
        variant="contained"
        color="primary"
        name="Ver más"
      ></SecondaryButton>

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
                DETALLE DE LA SOLICITUD
              </Typography>
              <TextField
                type="text"
                id="filled-multiline-flexible"
                label="Nombre y Apellidos"
                disabled
                defaultValue={detailReq.us_nombres}
                variant="filled"
              />
              <TextField
                id="filled-multiline-flexible"
                label="Correo Electrónico"
                disabled
                defaultValue={detailReq.us_correo}
                variant="filled"
              />
              <TextField
                id="filled-multiline-flexible"
                label="Número Telefónico"
                disabled
                variant="filled"
                defaultValue={detailReq.us_celular}
              />
              <TextField
                id="filled-multiline-flexible"
                label="Mensaje"
                multiline
                disabled
                defaultValue={detailReq.sol_mensaje}
                rowsMax={3}
                variant="filled"
              />
              <InputLabel id="demo-simple-select-required-label">
                Estado del Servicio
              </InputLabel>
              <Select
                name="sol_estado"
                {...register("sol_estado", {
                  required: true,
                })}
                defaultValue={detailReq.sol_estado}
              >
                <MenuItem value="Rechazado">Rechazado</MenuItem>
                <MenuItem value="Pendiente">Pendiente</MenuItem>
                <MenuItem value="Finalizado">Finalizado</MenuItem>
              </Select>
              <FormError
                condition={errors.sol_estado?.type === "required"}
                content="Debe seleccionar un estado"
              />

              <Container className={classes.containerButton}>
                <SecondaryButton
                  variant="contained"
                  name="CANCELAR"
                  onClick={handleClose}
                ></SecondaryButton>

                <Container className={classes.wrapp}>
                  <PrimaryButton
                    type="submit"
                    name="ACEPTAR"
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
  ) : (
    <div>Cargando...</div>
  );
};
export default ManajeS;
