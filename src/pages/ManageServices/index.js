import { React, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router";
import NavBar from "../../layouts/NavBar";
import HeadingBar from "../../layouts/HeadingBar/HeadingBar";
import { Container, Typography, withStyles } from "@material-ui/core/";
import InfoService from "../../components/Info/InfoService.jsx";
import ServiceModal from "../../components/Modals/ServiceModal";
import { fetchData } from "../../services/services";
import Spinner from "../../components/Spinner/Spinner";

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

const StyledInfo = withStyles({
  root: {
    marginTop: "1.5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50vh",
  },
})(Container);

const ManageServices = () => {
  const location = useLocation();
  const state = location.state;

  const history = useHistory();

  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!localStorage.hasOwnProperty("User_session")) {
      history.push({
        pathname: "/signup",
      });
    } else {
      let token = localStorage.getItem("User_session");
      token = token.slice(1, -1);
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
    let token = localStorage.getItem("User_session");
    token = token.slice(1, -1);
    fetchData(token, "GET", "service-auth", "GET_MY_SERVICES")
      .then((res) => {
        console.log("get my services: ", res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAdd = (datos, cat_id) => {
    fetchData(state?.token, "POST", "service-auth", "CREATE_SERVICE", datos)
      .then((res) => {
        setData([
          ...data,
          {
            cat_id,
            ...datos,
          },
        ]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEdit = (datos) => {
    fetchData(state?.token, "POST", "service-auth", "EDIT_SERVICE", datos)
      .then((res) => {
        setData(
          data.map((item) => (item.cat_id === datos.cat_id ? datos : item))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = (cat_id) => {
    const newData = data.filter((item) => item.cat_id !== cat_id);
    fetchData(state?.token, "POST", "service-auth", "DELETE_SERVICE", {
      cat_id: cat_id,
    });
    setData(newData);
  };

  const renderServices = () => {
    return data.length > 0 ? (
      data.map((service) => {
        return (
          <InfoService
            key={`${service.cat_id}-${service.cat_nombre}-${service.ser_descripcion}`}
            data={data}
            setData={setData}
            handleEdit={handleEdit}
            service={service}
            handleDelete={handleDelete}
          />
        );
      })
    ) : (
      <StyledInfo>
        <Typography variant="h4">No tienes servicios</Typography>
      </StyledInfo>
    );
  };

  return user ? (
    <>
      <NavBar user={user} token={state?.token} />
      <HeadingBar before={"TRABAJADOR"} after={"MIS SERVICIOS"} />
      <StyledContainer>
        <StyledTypography>Mis Servicios</StyledTypography>
        <ServiceModal mood="Agregar" handleAdd={handleAdd} />
      </StyledContainer>
      {renderServices()}
    </>
  ) : (
    <Spinner />
  );
};
export default ManageServices;
