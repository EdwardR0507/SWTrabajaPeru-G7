import { React, useState, useEffect } from "react";
import { useLocation } from "react-router";
import NavBar from "../../layouts/NavBar";
import HeadingBar from "../../layouts/HeadingBar/HeadingBar";
import { Container, Typography, withStyles } from "@material-ui/core/";
import InfoService from "../../components/Info/InfoService.jsx";
import ServiceModal from "../../components/Modals/ServiceModal";
import { fetchData } from "../../services/services";

const StyledTypography = withStyles({
  root: {
    fontSize: "2.25rem",
    lineHeigth: "2.25em",
    fontStyle: "normal",
    fontWeigth: "400",
  },
})(Typography);

const StyledContainer = withStyles({
  root: {
    marginTop: "0.9em",
    paddingLeft: "9.4em",
    display: "flex",
    alignItems: "center",
  },
})(Container);

const ManageServices = () => {
  const location = useLocation();
  const state = location.state;

  const [user, setUser] = useState();
  const [data, setData] = useState([]);

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
    fetchData(state?.token, "GET", "service-auth", "GET_MY_SERVICES")
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state?.token]);

  return user ? (
    <>
      <NavBar user={user} token={state?.token} />
      <HeadingBar before={"TRABAJADOR"} after={"MIS SERVICIOS"} />
      <StyledContainer>
        <StyledTypography>Mis Servicios</StyledTypography>
        <ServiceModal data={data} setData={setData} mood="Agregar" />
      </StyledContainer>
      {data.length !== 0 &&
        data.map((el) => {
          return (
            <InfoService
              key={`${el.cat_id}-${el.cat_nombre}-${el.ser_descripcion}`}
              {...el}
            />
          );
        })}
    </>
  ) : (
    <div>Cargando...</div>
  );
};
export default ManageServices;
