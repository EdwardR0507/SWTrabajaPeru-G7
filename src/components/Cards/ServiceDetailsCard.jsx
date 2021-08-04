/*Importamos las librerias principales*/
import React from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Rating from '@material-ui/lab/Rating';
import theme from "../../themes/themes";
import { Divider, Grid, Box, IconButton, Container, Typography} from "@material-ui/core";
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
    paddingTop: "41%",
  },
})(CardMedia);

/*Declaramos el estilo de la letra*/
const StyledBody = withStyles({
  root: {
    color:"white",
    fontSize: '1.5rem',
    fontWeight: 'bold',
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
    width: "100%"
  },
})(Box);
/*Declaramos la función principal*/ 
const ServiceDetailsCard = () => {
  const [valuestar] = React.useState(2);
/*Declaramos lo que nos va a retornar la funcion*/ 
  return (
    <StyledCard>
      {/*Cambiar los datos por informaciónde la bd*/}
      <Grid
        container
        spacing={12}
        alignItems="flex-end"
        justifyContent="center"
      >
          <CardHeader title="TÍTULO DEL SERVICIO" />
      </Grid>
      {/*declaramos sivider para dal estilo al borde*/}
      <Divider />
      <Divider />
      <Grid
        container
        spacing={12}
        alignItems="flex-end"
        justifyContent="center"
      >
        <Grid item xs={12} sm={8} >
          <Box ml={2}>
            <Rating name="read-only" value={valuestar} readOnly />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box mt={1} mr={2}>
            <PrimaryButton
              variant="contained"
              color="primary"
              name="+SOLICITAR"
            ></PrimaryButton>
          </Box>
        </Grid>
      </Grid>
      <StyledCardMedia image="../../assets/CardTest.jpeg" />
      <Grid container spacing={12} justifyContent="center">
        <Boxes>
          <StyledBody>DESCRIPCIÓN</StyledBody>
        </Boxes>
      </Grid>
      <Grid container spacing={12} justifyContent="center">
          <StyledBody2>Esta es la descripcion del servicio</StyledBody2>
      </Grid>
    </StyledCard>
  );
};

export default ServiceDetailsCard;