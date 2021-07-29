import { React, useState } from "react";
import { useForm } from "react-hook-form";
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
  FormControl,
  MenuItem,
  IconButton,
} from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
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
/*Props: objeto, setter del objeto, modo que tomará el modal que se va a renderizar (agregar o editar, basta con pasarle Agregar), nombre del servicio, descripción del servicio, método para poder editar el servicio*/
const ServiceModal = ({
  data,
  setData,
  mood,
  service,
  serviceDescription,
  handleEdit,
}) => {
  // Hook useForm para almacenar los datos de los forms
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
  // Estado para controlar el nombre del servicio
  const [name, setName] = useState("");
  // Estado para controlar la descripción del servicio
  const [description, setDescription] = useState("");

  // Función para abrir el modal
  const handleOpen = () => {
    setName("");
    setOpen(true);
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setName("");
    setOpen(false);
  };

  // Función para capturar lo que se escriba la descripción
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  // Función para capturar lo que se escriba el nombre
  const handleSelect = (e) => {
    setName(e.target.value);
  };

  //Función que crea un nuevo componente InfoService y envía datos al backend
  const onSubmit = (datos, e) => {
    e.preventDefault();
    console.log(datos);
    handleClose();
    setDescription("");
    setData([...data, { id: data[data.length - 1].id + 1, name, description }]);
    reset();
  };

  // Función para editar un servicio
  const onSubmitEdit = (datos, e) => {
    e.preventDefault();
    console.log(datos);
    handleClose();
    reset();
  };

  // Función para comprobar la existencia de un nombre por defecto en el select que se encuentra deshabilitado (en editModal)
  const existName = (e) => (e ? e : "");
  return (
    // Renderizado condicional para diferenciar entre el boton Agregar y el botón Editar
    <>
      {mood === "Agregar" ? (
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleOpen}
          endIcon={<AddIcon />}
        >
          Agregar
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleOpen}
          endIcon={<CreateIcon />}
        >
          Editar
        </Button>
      )}

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
            {/* Renderizado condicional para diferenciar entre el título Nuevo o Editar*/}
            {mood === "Agregar" ? (
              <Typography className={classes.title}>Nuevo Servicio</Typography>
            ) : (
              <Typography className={classes.title}>Editar Servicio</Typography>
            )}
            {/*Renderizado condicional para los formularios*/}
            {mood === "Agregar" ? (
              /* Formulario donde se llenarán los datos para crear un nuevo servicio */
              <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Container className={classes.container}>
                  <Container className={classes.containerData}>
                    <Container className={classes.containerService}>
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-required-label">
                          Nombre del Servicio
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-required-label"
                          id="demo-simple-select-required"
                          name="services"
                          value={existName(name)}
                          {...register("services", {
                            required: true,
                          })}
                          onChange={handleSelect}
                          className={classes.selectEmpty}
                        >
                          <MenuItem value="Albañilería">Albañilería</MenuItem>
                          <MenuItem value="Gasfitería">Gasfitería</MenuItem>
                        </Select>
                        {errors.services && "Debe seleccionar un servicio"}
                      </FormControl>
                    </Container>

                    <TextField
                      id="filled-multiline-flexible"
                      label="Descripción"
                      multiline
                      name="description"
                      {...register("description", { maxLength: 300 })}
                      onChange={handleDescription}
                      rowsMax={3}
                      variant="filled"
                    />
                    {errors.description && "Ingrese máximo 300 caracteres"}
                  </Container>
                  {/*Aquí irá la imagen del servicio, primero importamos la imagen y luego la colocamos dentro del src, no olvidar poner el alt */}
                  <Container className={classes.containerImage}>
                    <IconButton aria-label="add" className={classes.addIcon}>
                      <AddCircleIcon />
                    </IconButton>
                    {/*<img src={imgService} alt={"Servicio"} className={classes.image} />*/}
                  </Container>
                </Container>
                <Container className={classes.containerButton}>
                  <Container className={classes.wrapp}>
                    <PrimaryButton
                      type="submit"
                      name="ACEPTAR"
                      className={classes.submit}
                      onClick={handleSubmit(onSubmit)}
                    ></PrimaryButton>
                  </Container>
                  <SecondaryButton
                    variant="contained"
                    name="CANCELAR"
                    onClick={handleClose}
                  ></SecondaryButton>
                </Container>
              </form>
            ) : (
              /* Formulario donde se llenarán los datos para editar un servicio */
              <form
                className={classes.form}
                onSubmit={handleSubmit(onSubmitEdit)}
              >
                <Container className={classes.container}>
                  <Container className={classes.containerData}>
                    <Container className={classes.containerService}>
                      <InputLabel id="demo-simple-select-required-label">
                        Nombre del Servicio
                      </InputLabel>
                      <Select
                        native
                        disabled
                        inputProps={{
                          name: "servicio",
                          id: "filled-servicio-native-simple",
                        }}
                      >
                        <option>{service}</option>
                      </Select>
                    </Container>
                    <TextField
                      id="filled-multiline-flexible"
                      label="Descripción"
                      multiline
                      name="description"
                      {...register("description", { maxLength: 300 })}
                      defaultValue={serviceDescription}
                      onChange={handleEdit}
                      rowsMax={3}
                      variant="filled"
                    />
                    {errors.description && "Ingrese máximo 300 caracteres"}
                  </Container>
                  {/*Aquí irá la imagen del servicio, primero importamos la imagen y luego la colocamos dentro del src, no olvidar poner el alt */}
                  <Container className={classes.containerImage}>
                    <IconButton aria-label="add" className={classes.addIcon}>
                      <AddCircleIcon />
                    </IconButton>
                    {/*<img src={imgService} alt={"Servicio"} className={classes.image} />*/}
                  </Container>
                </Container>
                <Container className={classes.containerButton}>
                  <Container className={classes.wrapp}>
                    <PrimaryButton
                      type="submit"
                      className={classes.submit}
                      variant="contained"
                      name="ACEPTAR"
                      onClick={handleSubmit(onSubmitEdit)}
                    ></PrimaryButton>
                  </Container>
                  <SecondaryButton
                    variant="contained"
                    name="CANCELAR"
                    onClick={handleClose}
                  ></SecondaryButton>
                </Container>
              </form>
            )}
          </div>
        </Fade>
      </Modal>
    </>
  );
};
export default ServiceModal;
