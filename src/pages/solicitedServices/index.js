import { React, useState, useEffect } from "react";
import NavBar from "../../layouts/NavBar";
import HeadingBar from "../../layouts/HeadingBar/HeadingBar";
import {
  Container,
  Typography,
  Grid,
  Box,
  makeStyles,
} from "@material-ui/core/";
import TableServices from "../../layouts/Tables/TableServices";
import { useLocation, useHistory } from "react-router";
import { fetchData } from "../../services/services";
import Spinner from "../../components/Spinner/Spinner";

const useStyles = makeStyles(() => ({
  typography: {
    fontSize: "2.25rem",
    lineHeigth: "2.25em",
    fontStyle: "normal",
    fontWeigth: "400",
    marginTop: "1%",
    paddingLeft: "9%",
  },

  button: {
    marginLeft: "20%",
  },
}));

const SolicitedServices = () => {
  const location = useLocation();
  const state = location.state;
  const history = useHistory();
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [serviceData, setServiceData] = useState([]);

  const user_sesion = localStorage.getItem("User_session");
  const token = user_sesion.slice(1, -1);

  useEffect(() => {
    if (!localStorage.hasOwnProperty("User_session")) {
      history.push({
        pathname: "/signup",
      });
    } else {
      fetchData(token, "GET", "user-auth", "GET_MY_USER")
        .then((res) => {
          setUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token, history]);

  useEffect(() => {
    fetchData(token, "GET", "solicitud-auth", "GET_SOLICITUDES")
      .then((res) => {
        console.log("res data service:");
        console.log(res);
        setServiceData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return user ? (
    <>
      <NavBar user={user} token={state?.token} />
      <HeadingBar before={"TRABAJADOR"} after={"MIS SOLICITUDES"} />
      <Container>
        <Typography className={classes.typography}>Mis Solicitudes</Typography>
        <Grid container justifycontent="center" aligncontent="center">
          <Box mt={3} ml={"auto"} mr={"auto"}>
            <TableServices getToken={state?.token} serviceData={serviceData} />
          </Box>
        </Grid>
      </Container>
    </>
  ) : (
    <Spinner />
  );
};
export default SolicitedServices;
