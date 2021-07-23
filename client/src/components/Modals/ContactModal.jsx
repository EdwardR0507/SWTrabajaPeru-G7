import { React, useState } from "react";
import {
  makeStyles,
  Container,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  IconButton,
} from "@material-ui/core/";
import NotificationsIcon from "@material-ui/icons/Notifications";
import theme from "../../themes/themes";

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
  containerButton: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    background: theme.palette.secondary.main,
    color: theme.colorLetter.primary.main,
    "&:hover": {
      background: theme.palette.secondary.main,
    },
  },
}));

const ContactModal = ({ name }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleAcept = () => {
    setOpen(false);
  };

  const handleReject = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton aria-label="notifications" onClick={handleOpen}>
        <NotificationsIcon fontSize="large" style={{ color: "#FFF" }} />
      </IconButton>

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
          <Container className={classes.paper}>
            <Container className={classes.containerImage}>
              <></>
              {/*<img src={imgUser} alt={"Usuario"} className={classes.image} />*/}
            </Container>
            <Container className={classes.containerText}>
              <Typography className={classes.title}>
                {name} quiere contratar tus servicios
              </Typography>
              <div className={classes.containerButton}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={handleAcept}
                >
                  Aceptar
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.button}
                  onClick={handleReject}
                >
                  Rechazar
                </Button>
              </div>
            </Container>
          </Container>
        </Fade>
      </Modal>
    </>
  );
};

export default ContactModal;
