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
import { useLocation } from "react-router";
import { fetchData } from "../../services/services";

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
  const location = useLocation();
  const state = location.state;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    console.log("Cat_id:");
    console.log(cat_id);
    const newData = { cat_id: cat_id };
    fetchData(state?.token, "POST", "service-auth", "DELETE_SERVICE", newData)
      .then((res) => {
        console.log(res);
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
            Al eliminar el servicio de {cat_nombre} será inaccesible toda la
            información relacionada con este servicio. Para restablecer el
            servicio deberá agregarlo nuevamente
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
