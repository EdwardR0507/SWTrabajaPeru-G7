import { React, useState } from "react";
import {
  makeStyles,
  Container,
  Typography,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core/";
import NotificationsIcon from "@material-ui/icons/Notifications";
import theme from "../../themes/themes";
import PrimaryButton from "../Buttons/PrimaryButton";

const useStyles = makeStyles(() => ({
  //Estilos para la customización del modal
  modal: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    left: "45%",
    top: "13%",
    display: "flex",
    justifyContent: "space-evenly",
    borderRadius: "4px",
    boxShadow: theme.shadows[5],
    padding: "10px",
    width: "28vw",
    height: "20vh",
  },
  containerImage: {
    width: "50%",
  },
  image: {
    maxWidth: "100%",
    objectFit: "cover",
  },
  containerText: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
  },
  title: {
    width: "100%",
    fontSize: "0.8125rem",
    lineHeigth: "2.25em",
    fontStyle: "normal",
    fontWeigth: "400",
  },
}));

const ContactModal = ({ name }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NotificationsIcon
        fontSize="large"
        style={{ color: "#FFF" }}
        onClick={handleOpen}
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        disableScrollLock
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container className={classes.paper}>
            <Container className={classes.containerImage}>
              <></>
              {/*<img src={imgUser} alt={"Usuario"} className={classes.image} />*/}
            </Container>
            <Container className={classes.containerText}>
              <Typography className={classes.title}>
                {name} quiere contratar tus servicios
              </Typography>
              <PrimaryButton onClick={handleClose} name="Ver Más" />
            </Container>
          </Container>
        </Fade>
      </Modal>
    </>
  );
};

export default ContactModal;
