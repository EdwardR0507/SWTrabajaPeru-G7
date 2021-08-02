/*Importamos las librerias principales*/
import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardHeader, Avatar, Divider, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Rating from "@material-ui/lab/Rating";
/*Declaramos los estilos que se van a usar por cada componente*/
const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3),
  },
  media: {
    height: 200,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: theme.spacing(1),
  },
  description: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  button: {
    paddingTop: theme.spacing(3),
  },
}));
/*Declaramos la función principal*/
export default function ProfileServiceCard(props) {
  const classes = useStyles();
  //const [value, setValue] = useState(2);
  const [service, setService] = useState();

  useEffect(() => {
    setService(props.service)
  }, [])

  /*Declaramos lo que nos va a retornar la funcion*/
  return service ? (
    <Box className={classes.root}>
      <Card>
        <CardContent>
          <Typography className={classes.title} variant="h6" component="p">
            {service.cat_nombre}
          </Typography>
          <Divider></Divider>
          <Typography
            className={classes.description}
            variant="body2"
            component="p"
          >
            {service.ser_descripcion}
          </Typography>

          <CardMedia
            className={classes.media}
            image="https://www.azulweb.net/wp-content/uploads/2020/07/El-camino-para-ser-un-desarrollador-web-profesional.jpg"
            style={{ borderRadius: 10 }}
            title="Contemplative Reptile"
          />
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={6} spacing={1}>
              <Typography className={classes.title} variant="h6" component="p">
                S/100.00
              </Typography>
              {service.ser_calificacion ?
                (<Rating
                  name="read-only"
                  value={service.ser_calificacion}
                  readOnly
                />) :
                (<Typography className={classes.title} variant="body1">
                  Sin Calificación
                </Typography>)
              }

            </Grid>
            <Grid item xs={6} spacing={1}>
              <Box className={classes.button}>
                <PrimaryButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  name="CONTACTAR"
                ></PrimaryButton>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  ) : (
    <div>Cargando...</div>
  );
}
