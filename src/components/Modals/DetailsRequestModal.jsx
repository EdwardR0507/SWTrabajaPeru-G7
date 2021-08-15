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
import { fetchData } from "../../services/services";
import RatingModal from "../Modals/RatingModal";
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
const DetailsRequestModal = ({ serviceData, getToken, solId, solEstado }) => {
  // Variable para customizar los componentes
  const classes = useStyles();

  // Estado para controlar la apertura y cierre de los modales
  const [open, setOpen] = useState(false);
  const [service, setService] = useState([]);
  const [token, setToken] = useState("");
  const [detailReq, setDetailReq] = useState({});
  const [solState, setSolState] = useState("");
  useEffect(() => {
    setService(serviceData);
    setToken(getToken);
  }, [serviceData, getToken]);

  // Función para abrir el modal y para ver detalles de la solicitud
  const handleOpen = () => {
    const id = service.filter((el) => el.sol_id === solId)[0].sol_id;
    const newData = { sol_id: id };
    fetchData(token, "POST", "solicitud-auth", "OBTAIN_SOLICITUD", newData)
      .then((res) => {
        setDetailReq(res[0]);
      })
      .then(() => {
        setOpen(true);
      });
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setSolState("");
    setOpen(false);
  };

  const handleChange = (e) => {
    setSolState(e.target.value);
  };

  const conditionalRender = () => {
    return solEstado !== "Finalizado" ? (
      <>
        <InputLabel id="demo-simple-select-required-label">
          Estado del Servicio
        </InputLabel>
        <Select
          name="sol_estado"
          value={solState}
          defaultValue={detailReq.sol_estado}
          onChange={handleChange}
        >
          <MenuItem value="Rechazado">Rechazado</MenuItem>
          <MenuItem value="Pendiente">Pendiente</MenuItem>
        </Select>

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
              onClick={handleSubmit}
            ></PrimaryButton>
          </Container>
        </Container>
      </>
    ) : (
      <Container className={classes.containerButton}>
        <SecondaryButton
          variant="contained"
          name="Cerrar"
          onClick={handleClose}
        ></SecondaryButton>
      </Container>
    );
  };

  // Envío de datos y cambiar el estado de la solicitud
  const handleSubmit = () => {
    const id_sol = service.filter((el) => el.sol_id === solId)[0].sol_id;
    const data = { sol_id: id_sol, sol_estado: solState };
    fetchData(
      token,
      "POST",
      "solicitud-auth",
      "CHANGE_SOLICITUD_STATE",
      data
    ).then(() => {
      window.location.replace("");
      setOpen(false);
    });
  };

  const ModalRender = () => {
    return solEstado === "Pendiente" ? (
      <RatingModal
        solId={solId}
        token={token}
        person={"CLIENTE"}
        solEstado={solEstado}
      />
    ) : (
      <SecondaryButton
        role="open"
        onClick={handleOpen}
        variant="contained"
        color="primary"
        name="Ver más"
      ></SecondaryButton>
    );
  };

  return detailReq ? (
    <>
      {ModalRender()}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        role="close"
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
              {conditionalRender()}
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
export default DetailsRequestModal;
