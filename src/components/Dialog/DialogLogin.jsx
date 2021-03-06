import React from 'react';
import { useHistory } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function DialogLogin() {
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="primary" role="open-button" onClick={handleClickOpen}>
                Ver Más
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogContent>
                    <Typography gutterBottom>
                        Para poder acceder a esta información usted debe iniciar sesión.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus role="redirect" onClick={()=>{
                        history.push({
                            pathname: "/signin"
                        })
                    }} color="primary" variant="contained">Iniciar Sesión</Button>
                    <Button autoFocus role="close-button" onClick={handleClose} color="secondary" variant="contained" >
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}