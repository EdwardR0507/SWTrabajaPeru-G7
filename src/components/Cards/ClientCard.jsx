import { React } from "react";
import { makeStyles, Container, Typography } from "@material-ui/core/";
const useStyles = makeStyles({
  card: {
    width: "300px",
    height: "200px",
  },
  cardImage: {},
  cardText: {},
});
const ClientCard = () => {
  const classes = useStyles();
  return (
    <Container className={classes.card}>
      <Container className={classes.cardImage}></Container>
      <Container className={classes.cardText}></Container>
    </Container>
  );
};
export default ClientCard;
