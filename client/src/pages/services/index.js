import React from "react";
import { useLocation } from "react-router";
import { useState } from "react";
import NavBar from "../../layouts/NavBar";
import HeadingBar from "../../layouts/HeadingBar/HeadingBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import InfoService from "../../components/Info/InfoService.jsx";
import ServiceModal from "../../components/Modals/ServiceModal";
import { withStyles } from "@material-ui/core/styles";
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
    id: "1",
    name: "Albañilería",
    description: "Albañil",
  },
];

export default function ManageServices() {
  const location = useLocation();
  const state = location.state;

  const [data, setData] = useState(arrObj);
  return (
    <>
      {
      state ?
        <NavBar user={state.user}/>
      : <NavBar />
    }
      <HeadingBar before={"TRABAJADOR"} after={"MIS SERVICIOS"}></HeadingBar>
      <StyledContainer>
        <StyledTypography>Mis Servicios</StyledTypography>
        <ServiceModal data={data} setData={setData} />
      </StyledContainer>
      {data.map((el) => {
        return <InfoService key={el.id} {...el} />;
      })}
    </>
  );
}
