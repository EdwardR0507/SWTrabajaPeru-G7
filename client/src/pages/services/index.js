import { React, useState, useEffect } from "react";
import axios from "axios";
import GlobalEnv from "../../GlobalEnv";
import { useLocation } from "react-router";
import NavBar from "../../layouts/NavBar";
import HeadingBar from "../../layouts/HeadingBar/HeadingBar";
import { Container, Typography, withStyles } from "@material-ui/core/";
import InfoService from "../../components/Info/InfoService.jsx";
import ServiceModal from "../../components/Modals/ServiceModal";
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

const arrObj = [
  {
    id: null,
    name: "",
    description: "",
  },
];

const ManageServices = () => {
  const location = useLocation();
  const state = location.state;

  const [user, setUser] = useState();
  const [data, setData] = useState(arrObj);

  useEffect(() => {
    //Cambiar post por get cuando se arregle
    axios
      .post(`${GlobalEnv.host}/user-auth`, {
        command: "OBTAIN_USER"
      }, {
        headers: {
          authorization: `Bearer ${state?.token}`
        }
      }
      )
      .then((res) => {
        console.log(res)
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <NavBar user={user} />
      <HeadingBar before={"TRABAJADOR"} after={"MIS SERVICIOS"}></HeadingBar>
      <StyledContainer>
        <StyledTypography>Mis Servicios</StyledTypography>
        <ServiceModal data={data} setData={setData} mood="Agregar" />
      </StyledContainer>
      {data.map((el) => {
        if (el.id === null) {
          return null;
        } else {
          return <InfoService key={el.id} {...el} />;
        }
      })}
    </>
  );
};
export default ManageServices;
