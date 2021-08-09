import { React } from "react";
import {
  makeStyles,
  Container,
  Typography,
  MenuItem,
  Divider,
} from "@material-ui/core/";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  card: {
    width: "500px",
    height: "80px",
    display: "flex",
  },
  cardImage: {
    width: "30%",
  },
  cardText: {
    padding: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});
const ClientCard = ({ nombres, imagen, servicio, token }) => {
  const classes = useStyles();
  const history = useHistory();

  const handlePush = () => {
    history.push({ pathname: "/solicitedServices", state: { token: token } });
  };
  return (
    <>
      <MenuItem className={classes.card} onClick={handlePush}>
        <Container className={classes.cardImage}>Imagen </Container>
        <Container className={classes.cardText}>
          <Typography variant="subtitle1" align="center" color="primary">
            {nombres}
          </Typography>
          <Typography variant="body2" align="center">
            Quiere solicitar el servicio de {servicio}
          </Typography>
        </Container>
      </MenuItem>
      <Divider />
    </>
  );
};
export default ClientCard;
