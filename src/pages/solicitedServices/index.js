import { React, useState, useEffect } from "react";
import NavBar from "../../layouts/NavBar";
import HeadingBar from "../../layouts/HeadingBar/HeadingBar";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  makeStyles,
} from "@material-ui/core/";
import TableServices from "../../layouts/Tables/TableServices";
import { useLocation } from "react-router";
import { fetchData } from "../../services/services";

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
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetchData(state?.token, "GET", "user-auth", "GET_MY_USER")
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state?.token]);

  useEffect(() => {
    fetchData(state?.token, "GET", "solicitud-auth", "GET_SOLICITUDES")
      .then((res) => {
        console.log("res data service:");
        console.log(res);
        setServiceData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state?.token]);

  return user ? (
    <>
      <NavBar user={user} token={state?.token} />
      <HeadingBar before={"TRABAJADOR"} after={"SOLICITUDES"} />
      <Container>
        <Typography className={classes.typography}>Solicitudes</Typography>
        <Grid container justifycontent="center" aligncontent="center">
          <Box mt={3} ml={"auto"} mr={"auto"}>
            <TableServices
              getToken={state?.token}
              serviceData={serviceData}
              getUser={user}
            />
          </Box>
        </Grid>
      </Container>
    </>
  ) : (
    <div>Cargando...</div>
  );
};
export default SolicitedServices;
