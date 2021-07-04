import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddIcon from "@material-ui/icons/Add";
import theme from "../../themes/themes";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import SecondaryButton from "../Buttons/SecondaryButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles(() => ({
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
    width: "50em",
    height: "25em",
  },
  title: {
    fontSize: "1.8em",
    lineHeigth: "2.25em",
    fontStyle: "normal",
    fontWeigth: "400",
  },
  button: {
    background: theme.palette.primary.main,
    width: "9em",
    height: "2.8em",
    borderRadius: "4px",
    color: theme.colorLetter.primary.main,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontWeight: "500",
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
    height: "100%",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  container: {
    height: "100%",
    display: "flex",
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
    width: "100%",
  },
  containerButton: {
    display: "flex",
    justifyContent: "center",
  },
}));
const ServiceModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className={classes.button} onClick={handleOpen}>
        <AddIcon />
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
            <form className={classes.form}>
              <Container className={classes.container}>
                <Container className={classes.containerData}>
                  <Container className={classes.containerService}>
                    <InputLabel
                      id="imput6"
                      htmlFor="filled-age-native-simple"
                      color="primary"
                    >
                      Nombre el Servicio
                    </InputLabel>
                    <Select
                      native
                      inputProps={{
                        name: "servicio",
                        id: "filled-servicio-native-simple",
                      }}
                    >
                      <option hidden />
                      <option value="Albañil">Albañil</option>
                    </Select>
                  </Container>
                  <TextField
                    id="filled-multiline-flexible"
                    label="Descripción"
                    multiline
                    rowsMax={4}
                    variant="filled"
                  />
                </Container>
                <Container className={classes.containerImage}>Imagen</Container>
              </Container>
              <Container className={classes.containerButton}>
                <SecondaryButton
                  className="createButton"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  name="CREAR"
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
