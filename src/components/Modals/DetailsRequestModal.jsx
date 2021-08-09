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
} from "@material-ui/core/";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import theme from "../../themes/themes";
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

  // Estado para controlar la apertura y cierre de los modales
  const [open, setOpen] = useState(false);
  const [service, setService] = useState([]);
  const [token, setToken] = useState("");
  const [detailReq, setDetailReq] = useState({});

  useEffect(() => {
    setService(serviceData);
    setToken(getToken);
  }, [serviceData, getToken]);

  // Función para abrir el modal
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
    setOpen(false);
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
  };

  return detailReq ? (
    <>
      <SecondaryButton
        className={classes.button}
        // Funcion para abrir modal
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
        role="Modal"
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
            <form className={classes.form}>
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
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                name="sol_estado"
                onChange={handleSelect}
                className={classes.selectEmpty}
              >
                <option>Pendiente</option>
                <option>Finalizado</option>
              </Select>
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
                    onClick={handleClose}
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
