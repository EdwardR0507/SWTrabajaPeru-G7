/*Importamos las librerias principales*/
import { React, useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import theme from "../../themes/themes";
import ContactEmployeeModal from "../Modals/ContactEmployeeModal";
import { Divider, Grid, Box, Typography } from "@material-ui/core";
import image from "../../assets/services.jpg";
/*Declaramos los estilos que se van a usar por cada componente*/
/*Declaramos el estilo del card*/

const StyledCard = withStyles({
  root: {
    width: "90% ",
    margin: "20px auto",
  },
})(Card);

/*Declaramos el estilo del card media*/
const StyledCardMedia = withStyles({
  root: {
    height: "0",
    margin: "2% 0",
    paddingTop: "41%",
  },
})(CardMedia);

/*Declaramos el estilo de la letra*/
const StyledBody = withStyles({
  root: {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "10px",
  },
})(Typography);
/*Declaramos el estilo de la letra*/
const StyledBody2 = withStyles({
  root: {
    margin: "10px",
  },
})(Typography);

const Boxes = withStyles({
  root: {
    background: theme.palette.primary.main,
    color: theme.colorLetter.primary.main,
    width: "100%",
  },
})(Box);
/*Declaramos la función principal*/
const ServiceDetailsCard = (props) => {
  const [service, setService] = useState({});
  const emailUser = props.user.us_correo;
  const emailWorker = props.worker.us_correo;

  console.log("emailUser: ", emailUser);
  console.log("emailWorker: ", emailWorker);

  useEffect(() => {
    setService(props.service);
  }, [props]);

  const conditionalServiceCalification = () => {
    return service.ser_calificacion ? (
      <Rating name="read-only" value={service.ser_calificacion} readOnly />
    ) : (
      <Typography variant="body2">Sin Calificación</Typography>
    );
  };

  const conditionalContactEmployeeModal = () => {
    return emailUser !== emailWorker ? (
      <ContactEmployeeModal
        service={service}
        token={props.token}
        user={props.user}
      />
    ) : null;
  };

  /*Declaramos lo que nos va a retornar la funcion*/
  return service ? (
    <StyledCard>
      {/*Cambiar los datos por informaciónde la bd*/}
      <Grid
        container
        spacing={12}
        alignItems="flex-end"
        justifycontent="center"
      >
        <CardHeader title={service.cat_nombre} />
      </Grid>
      {/*declaramos sivider para dal estilo al borde*/}
      <Divider />
      <Divider />
      <Grid
        container
        spacing={12}
        alignItems="flex-end"
        justifycontent="center"
      >
        <Grid item xs={12} sm={8}>
          <Box ml={2}>{conditionalServiceCalification()}</Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box mt={1} mr={2}>
            {conditionalContactEmployeeModal()}
          </Box>
        </Grid>
      </Grid>
      <StyledCardMedia image={image} />
      <Grid container spacing={12} justifycontent="center">
        <Boxes>
          <StyledBody>Descripción</StyledBody>
        </Boxes>
      </Grid>
      <Grid container spacing={12} justifycontent="center">
        <StyledBody2>{service.ser_descripcion}</StyledBody2>
      </Grid>
    </StyledCard>
  ) : (
    <div>Cargando..</div>
  );
};
export default ServiceDetailsCard;
