import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import {
  makeStyles,
  Container,
  Typography,
  InputLabel,
  Button,
  TextField,
  Select,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  FormControl,
  MenuItem,
} from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import FormError from "../../components/Errors/FormError";
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
/*Props: objeto, setter del objeto, modo que tomará el modal que se va a renderizar (agregar o editar, basta con pasarle Agregar), nombre del servicio, descripción del servicio, función para poder editar el servicio*/
const ServiceModal = ({ mood, ser_imagen, service, handleAdd, handleEdit }) => {
  // Hook useForm para almacenar los datos de los forms
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const state = location.state;

  // Variable para customizar los componentes
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [selectName, setSelectName] = useState("");

  const [fileUrl, setFileUrl] = useState(ser_imagen);

  const [id, setId] = useState(null);

  const [list, setList] = useState([
    {
      cat_id: null,
      cat_nombre: "",
    },
  ]);

  // Función para abrir el modal
  const handleOpen = () => {
    setId(service?.cat_id);
    if (mood === "Agregar") {
      fetchData(state?.token, "GET", "service-auth", "GET_CATEGORIES")
        .then((res) => {
          setList(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setSelectName("");
    }
    setOpen(true);
  };

  // Función para cerrar el modal
  const handleClose = () => {
    reset();
    setOpen(false);
  };

  // Función para capturar lo que se seleccione(setSelectName)
  const handleSelect = (e) => {
    setSelectName(e.target.value);
  };
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const conversion = async () => {
    const file = document.querySelector("#image").files[0];
    const fileTosend = await toBase64(file);
    return fileTosend;
  };

  //Función que crea un nuevo componente InfoService y envía datos al backend
  const onSubmit = async (datos, e) => {
    /*const imageB64 = await conversion();
    const dataToSend = {
      ...datos,
      ser_imagen: imageB64,
    };
    console.log("datosToSend: ", dataToSend);*/
    e.preventDefault();
    if (mood === "Agregar") {
      handleAdd(id, {
        ...datos,
        ser_descripcion: datos.ser_descripcion.trim(),
      });
    } else {
      let newData = {
        cat_id: id,
        cat_nombre: service?.cat_nombre,
        ser_descripcion: datos.ser_descripcion.trim(),
        //ser_imagen: imageToB64,
      };
      if (datos.ser_descripcion === undefined) {
        newData.ser_descripcion = service?.ser_descripcion.trim();
      }
      handleEdit(newData);
    }
    handleClose();
    reset();
  };

  function processImage(event) {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  }

  return (
    // Renderizado condicional para diferenciar entre el boton Agregar y el botón Editar
    <>
      <Button
        variant="contained"
        role="open"
        color="primary"
        className={classes.button}
        onClick={handleOpen}
        endIcon={mood === "Agregar" ? <AddIcon /> : <CreateIcon />}
      >
        {mood === "Agregar" ? "Agregar" : "Editar"}
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        role="close"
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
            <Typography className={classes.title}>
              {mood === "Agregar" ? "Nuevo" : "Editar"} Servicio
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <Container className={classes.container}>
                <Container className={classes.containerData}>
                  <Container className={classes.containerService}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-required-label">
                        Nombre del Servicio
                      </InputLabel>
                      {mood === "Agregar" ? (
                        <Select
                          labelId="demo-simple-select-required-label"
                          id="demo-simple-select-required"
                          name="cat_nombre"
                          value={selectName}
                          {...register("cat_nombre", {
                            required: true,
                          })}
                          onChange={handleSelect}
                        >
                          {list.map((el) => (
                            <MenuItem key={el.cat_id} value={el.cat_nombre}>
                              {el.cat_nombre}
                            </MenuItem>
                          ))}
                        </Select>
                      ) : (
                        <Select
                          native
                          disabled
                          name="cat_id"
                          value={selectName}
                          {...register("cat_id")}
                        >
                          <option>{service?.cat_nombre}</option>
                        </Select>
                      )}
                      <FormError
                        condition={errors.cat_nombre?.type === "required"}
                        content="Debe seleccionar un servicio"
                      />
                    </FormControl>
                  </Container>
                  {mood === "Agregar" ? (
                    <>
                      <TextField
                        id="filled-multiline-flexible"
                        label="Descripción"
                        multiline
                        name="ser_descripcion"
                        {...register("ser_descripcion", {
                          required: true,
                          maxLength: 300,
                          pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]+$/,
                        })}
                        rowsMax={3}
                        variant="filled"
                      />
                      {errors.ser_descripcion?.type === "required" && (
                        <FormError
                          condition={
                            errors.ser_descripcion?.type === "required"
                          }
                          content="El campo descripción no puede estar vacío"
                        />
                      )}
                    </>
                  ) : (
                    <TextField
                      id="filled-multiline-flexible"
                      label="Descripción"
                      multiline
                      name="ser_descripcion"
                      defaultValue={service?.ser_descripcion}
                      {...register("ser_descripcion", {
                        maxLength: 300,
                        pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]+$/,
                      })}
                      rowsMax={3}
                      variant="filled"
                    />
                  )}

                  {errors.ser_descripcion?.type === "pattern" && (
                    <FormError
                      condition={errors.ser_descripcion?.type === "pattern"}
                      content="Ingrese solo numeros y letras"
                    />
                  )}
                  {errors.ser_descripcion?.type === "maxLength" && (
                    <FormError
                      condition={errors.ser_descripcion?.type === "maxLength"}
                      content="Ingrese máximo 300 caracteres"
                    />
                  )}
                </Container>
                {/*Aquí irá la imagen del servicio, primero importamos la imagen y luego la colocamos dentro del src, no olvidar poner el alt */}
                <Container className={classes.containerImage}>
                  <IconButton
                    aria-label="delete"
                    component="label"
                    className={classes.addIcon}
                  >
                    <AddCircleIcon fontSize="large" />
                    <input
                      type="file"
                      hidden
                      onChange={processImage}
                      id="image"
                    />
                  </IconButton>
                  <img src={fileUrl} alt={"service"} />
                </Container>
              </Container>
              <Container className={classes.containerButton}>
                <SecondaryButton
                  variant="contained"
                  name="CANCELAR"
                  onClick={handleClose}
                ></SecondaryButton>
                <Container className={classes.wrapp}>
                  <PrimaryButton
                    type="submit"
                    role="button"
                    name="ACEPTAR"
                    className={classes.submit}
                    onClick={handleSubmit(onSubmit)}
                  ></PrimaryButton>
                </Container>
              </Container>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
export default ServiceModal;
