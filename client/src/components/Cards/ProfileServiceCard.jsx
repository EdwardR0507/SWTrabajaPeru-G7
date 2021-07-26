import React from "react";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  Avatar,
  Divider,
  Grid, 
} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles} from "@material-ui/core/styles";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Rating from "@material-ui/lab/Rating";

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

export default function ProfileServiceCard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  return (
    <Box className={classes.root}>
      <Card>
        <CardHeader
          avatar={<Avatar></Avatar>}
          title="Kori Antunez Palomino"
          subheader="Fecha de publicación del servicio"
        />
        <CardContent>
          <Typography className={classes.title} variant="h6" component="p">
            TÍTULO DEL SERVICIO
          </Typography>
          <Divider></Divider>
          <Typography
            className={classes.description}
            variant="body2"
            component="p"
          >
            Descripción del servicio
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
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
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
  );
}
