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

const DialogDelete = ({ handleDelete, cat_nombre, cat_id }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        endIcon={<DeleteIcon />}
        role="open-button"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Eliminar
      </Button>
      <Dialog
        open={open}
        disableScrollLock
        role="close-button"
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
          <Button
            onClick={() => handleDelete(cat_id)}
            variant="contained"
            color="primary"
          >
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
