import { React, useState } from "react";
import {
  makeStyles,
  Container,
  Typography,
  InputLabel,
  Button,
  TextField,
  Select,
  Modal,
  Backdrop,
  Fade,
  IconButton,
} from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import theme from "../../themes/themes";

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
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "80vw",
    height: "80vh",
  },
  title: {
    fontSize: "1.8em",
    lineHeigth: "2.25em",
    fontStyle: "normal",
    fontWeigth: "400",
  },
  button: {
    width: "9em",
    height: "2.8em",
    color: theme.colorLetter.primary.main,
    fontSize: "0.9em",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    textTransform: "uppercase",
    marginLeft: "20%",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  form: {
    width: "100%",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  containerData: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
  },
  containerService: {
    display: "flex",
    flexDirection: "column",
    padding: "0",
  },
  containerImage: {
    position: "relative",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    width: "70%",
    height: "70%",
  },
  addIcon: {
    position: "absolute",
    left: "0",
    top: "0",
  },
  image: {
    maxWidth: "100%",
    objectFit: "cover",
  },
  containerButton: {
    display: "flex",
    width: "60%",
    justifyContent: "space-evenly",
  },
  wrapp: {
    width: "214px",
  },
}));

const ServiceModal = ({ data, setData }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  //Función que crea un nuevo componente InfoService
  const handleCreate = () => {
    setData([...data, { id: data[data.length - 1].id + 1, name, description }]);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSelect = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleOpen}
        endIcon={<AddIcon />}
      >
        Agregar
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography className={classes.title}>Nuevo Servicio</Typography>
            {/* Formulario donde se llenarán los datos para crear un nuevo servicio */}
            <form className={classes.form}>
              <Container className={classes.container}>
                <Container className={classes.containerData}>
                  <Container className={classes.containerService}>
                    <InputLabel
                      id="imput6"
                      htmlFor="filled-age-native-simple"
                      color="primary"
                    >
                      Nombre del Servicio
                    </InputLabel>
                    <Select
                      native
                      onChange={handleSelect}
                      inputProps={{
                        name: "servicio",
                        id: "filled-servicio-native-simple",
                      }}
                    >
                      <option hidden />
                      <option value="Albañilería">Albañilería</option>
                      <option value="Gasfitería">Gasfitería</option>
                    </Select>
                  </Container>
                  <TextField
                    id="filled-multiline-flexible"
                    label="Descripción"
                    multiline
                    rowsMax={3}
                    variant="filled"
                    onChange={handleDescription}
                  />
                </Container>
                {/*Aquí irá la imagen del servicio, primero importamos la imagen y luego la colocamos dentro del src, no olvidar poner el alt */}
                <Container className={classes.containerImage}>
                  <IconButton aria-label="delete" className={classes.addIcon}>
                    <AddCircleIcon />
                  </IconButton>
                  {/*<img src={imgService} alt={"Servicio"} className={classes.image} />*/}
                </Container>
              </Container>
              <Container className={classes.containerButton}>
                <Container className={classes.wrapp}>
                  <PrimaryButton
                    type="submit"
                    className={classes.create}
                    variant="contained"
                    name="ACEPTAR"
                    onClick={handleCreate}
                  ></PrimaryButton>
                </Container>
                <SecondaryButton
                  variant="contained"
                  name="CANCELAR"
                  onClick={handleClose}
                ></SecondaryButton>
              </Container>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
export default ServiceModal;