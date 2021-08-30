import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
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

const HiredServices = () => {
  const location = useLocation();
  const state = location.state;
  const history = useHistory();
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [solData, setSolData] = useState([]);

  let token = localStorage.getItem("User_session")
  token = token.slice(1, -1)

  useEffect(() => {
    if(!localStorage.hasOwnProperty("User_session")){
      history.push({
        pathname: "/signup"
      })
    }
    else{
      fetchData(token, "GET", "user-auth", "GET_MY_USER")
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [state?.token]);

  useEffect(() => {
    fetchData(token, "GET", "solicitud-auth", "GET_MY_SOLICITUDES")
      .then((res) => {
        console.log("res data service:");
        console.log(res);
        setSolData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state?.token]);

  return user ? (
    <>
      <NavBar user={user} token={state?.token} />
      <HeadingBar before={"CLIENTE"} after={"MIS SERVICIOS CONTRATADOS"} />
      <Container>
        <Typography className={classes.typography}>
          Mis Servicios Contratados
        </Typography>
        <Grid container justifycontent="center" aligncontent="center">
          <Box mt={3} ml={"auto"} mr={"auto"}>
            <TableServices
              mood={"CLIENT"}
              getToken={state?.token}
              serviceData={solData}
            />
          </Box>
        </Grid>
      </Container>
    </>
  ) : (
    <div>Cargando...</div>
  );
};
export default HiredServices;
