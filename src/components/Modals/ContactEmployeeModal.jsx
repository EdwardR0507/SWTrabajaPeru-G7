import { React, useState } from "react";
import {
    makeStyles,
    Container,
    Typography,
    TextField,
    Modal,
    Backdrop,
    Fade,
} from "@material-ui/core/";

import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import theme from "../../themes/themes";
import InputField from "../TextFields/InputField";
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
        position: "absolute",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "absolute",
        height: "70vh",
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
    
    //Conteiner data form
    containerData: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "100%",
    },

    //Contenedor estilo para botones
    containerButton: {
        display: "flex",
        width: "60%",
        justifyContent: "space-evenly",
    },
    //Estilo submit
    wrapp: {
        width: "200px",
    },
}));
/**/
const ContactEmployeeModal = ({
    // data,
    // setData,
}) => {
   
    // Variable para customizar los componentes
    const classes = useStyles();

    // Estado para controlar la apertura y cierre de los modales
    const [open, setOpen] = useState(false);

    // Función para abrir el modal
    const handleOpen = () => {
        setOpen(true);
    };


    // Función para cerrar el modal
    const handleClose = () => {
   
        setOpen(false);
    };

    return (
        <>
            <PrimaryButton
                className={classes.button}
                // Funcion para abrir modal
                onClick={handleOpen}
                variant="contained"
                color="primary"
                name="+SOLICITAR"
            ></PrimaryButton>

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
                        <form className={classes.form} >
                            <Container className={classes.container}>
                                <Container className={classes.containerData}>
                                    <Container className={classes.containerService}>
                                        <Typography style={{
                                            textAlign: "center",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }} variant="h5">CONTACTAR CON EL TRABAJADOR</Typography>

                                    </Container>

                                    <InputField style={{
                                        width: "300",
                                    }}

                                        type="text"
                                        id="filled-multiline-flexible"
                                        label="Nombre y Apellidos"
                                        name="emp_name"
                                        rowsMax={1}
                                        variant="filled"
                                    />
                                    <InputField
                                        id="filled-multiline-flexible"
                                        label="Correo Electrónico"
                                        name="emp_email"
                                        rowsMax={1}
                                        variant="filled"
                                    />
                                    <InputField

                                        id="filled-multiline-flexible"
                                        label="Número Telefónico"
                                        name="em_phone"
                                        rowsMax={1}
                                        variant="filled"
                                    />
                                    <TextField
                                        id="filled-multiline-flexible"
                                        label="Mensaje"
                                        type="textarea"
                                        multiline

                                        rowsMax={1}
                                        variant="filled"

                                    />
                                </Container>
                            </Container>

                            {/* Contenedor de botones finales */}
                            <Container className={classes.containerButton}>

                                <SecondaryButton
                                    variant="contained"
                                    name="CANCELAR"
                                    onClick={handleClose}
                                ></SecondaryButton>

                                <Container className={classes.wrapp}>
                                    <PrimaryButton
                                        type="submit"
                                        name="ENVIAR"
                                        className={classes.submit}
                                    // onClick={handleSubmit(onSubmit)}
                                    ></PrimaryButton>
                                </Container>
                            </Container>
                            {/*Fin Contenedor de botones finales */}
                        </form>
                    </div>
                </Fade>
            </Modal>
        </>
    );
};
export default ContactEmployeeModal;
