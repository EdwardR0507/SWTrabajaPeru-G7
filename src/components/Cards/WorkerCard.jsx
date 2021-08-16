import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

const StyledCard = withStyles({
  root: {
    width: "300px",
    margin: "20px auto",
  },
})(Card);

const StyledCardMedia = withStyles({
  root: {
    height: "0",
    paddingTop: "41%",
    marginBottom: "10%",
  },
})(CardMedia);

const WorkerCard = (props) => {
  const [worker, setWorker] = useState({});

  useEffect(() => {
    setWorker(props.worker);
  }, [props.worker]);

  return worker ? (
    <StyledCard>
      <StyledCardMedia image="src/assets/CardTest.jpeg" />
      <CardContent>
        <Typography variant="h6">{worker.us_nombres}</Typography>
        <Typography variant="body2">
          {worker.us_distrito}/{worker.us_provincia}/{worker.us_departamento}
        </Typography>
      </CardContent>
      <CardActions>
        {worker.calificacion ? (
          <Rating name="read-only" value={worker.calificacion} readOnly />
        ) : (
          <Typography variant="body2">Sin Calificación</Typography>
        )}
      </CardActions>
    </StyledCard>
  ) : (
    <>
      {console.log(worker)}
      <div>Cargando... </div>
    </>
  );
};

export default WorkerCard;
