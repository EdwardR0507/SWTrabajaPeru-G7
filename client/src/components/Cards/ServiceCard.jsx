import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import Avatar from "@material-ui/core/Avatar";
import theme from "../../themes/themes";

const StyledCard = withStyles({
  root: {
    width: "25%",
    margin: "20px auto",
  },
})(Card);

const StyledCardMedia = withStyles({
  root: {
    height: "0",
    paddingTop: "41%",
  },
})(CardMedia);

const StyledCardActions = withStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
})(CardActions);

const StyledButton = withStyles({
  root: {
    color: theme.palette.primary.main,
  },
})(Button);

const StyledBody2 = withStyles({
  root: {
    color: theme.cardLetter.primary.main,
  },
})(Typography);

const StyledCaption = withStyles({
  root: {
    marginRight: "5%",
    color: theme.cardLetter.primary.main,
  },
})(Typography);

const ServiceCard = (props) => {
  const [service, setService] = useState();

  useEffect(()=>{
    setService(props.service)
  }, [])

  return service ? (
    <StyledCard>
      {/*Cambiar los datos por informaciónde la bd*/}
      <CardHeader
        avatar={<Avatar></Avatar>}
        title={service.cat_nombre}
        subheader={service.us_nombres}
        action={
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        }
      />
      <StyledCardMedia image="src/assets/CardTest.jpeg" />
      <CardContent>
        <StyledBody2 variant="body2">
          {service.ser_descripcion}
        </StyledBody2>
      </CardContent>
      <StyledCardActions>
        <StyledButton>Ver Más</StyledButton>
      </StyledCardActions>
    </StyledCard>
  ):(
    <div>Cargando...</div>
  );
};

export default ServiceCard;
