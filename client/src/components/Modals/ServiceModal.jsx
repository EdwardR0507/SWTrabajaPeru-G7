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
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleOpen = () => {
    setName("");
    setOpen(true);
  };

  const handleClose = () => {
    setName("");
    setOpen(false);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSelect = (e) => {
    setName(e.target.value);
  };

  //Función que crea un nuevo componente InfoService
  const onSubmit = (datos, e) => {
    e.preventDefault();
    handleClose();
    setDescription("");
    setData([...data, { id: data[data.length - 1].id + 1, name, description }]);
    reset();
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
                        value={name ? name : ""}
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
                  <AddCircleIcon className={classes.addIcon} />
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
          </div>
        </Fade>
      </Modal>
    </>
  );
};
export default ServiceModal;
