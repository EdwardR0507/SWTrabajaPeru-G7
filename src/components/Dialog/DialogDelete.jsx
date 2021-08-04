import { React, useState } from "react";
import {
  makeStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import theme from "../../themes/themes";
import axios from "axios";
import GlobalEnv from "../../GlobalEnv";

const useStyles = makeStyles(() => ({
  button: {
    width: "9em",
    height: "2.8em",
    fontSize: "0.9em",
    lineHeight: "16px",
    letterSpacing: "1.25px",
  },
  cancelButton: {
    background: theme.palette.secondary.main,
    color: theme.colorLetter.primary.main,
    "&:hover": {
      background: theme.palette.secondary.main,
    },
  },
}));

const DialogDelete = ({ setState, cat_id, cat_nombre }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const token = JSON.parse(localStorage.getItem("User_session")).token;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    console.log("Cataidi:");
    console.log(cat_id);
    //Cambiar post por get cuando se arregle
    axios
      .post(
        `${GlobalEnv.host}/service-auth`,
        {
          command: "DELETE_SERVICE",
          transaction: cat_id,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setState(false);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        endIcon={<DeleteIcon />}
        className={classes.button}
        onClick={handleClickOpen}
      >
        Eliminar
      </Button>
      <Dialog
        open={open}
        disableScrollLock
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`¿Está seguro que desea eliminar el servicio de ${cat_nombre}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Al eliminar el servicio de {cat_nombre}, se eliminará toda la
            información relacionada con este servicio
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} variant="contained" color="primary">
            Aceptar
          </Button>
          <Button
            onClick={handleClose}
            className={classes.cancelButton}
            autoFocus
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default DialogDelete;
