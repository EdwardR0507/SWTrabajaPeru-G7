/*Importamos las librerias principales*/
import React, { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  CssBaseline,
  Link,
  Grid,
  Typography,
  Container,
  TextField,
  makeStyles,
  withStyles,
} from "@material-ui/core/";
import FormError from "../../components/Errors/FormError";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import NavBar from "../../layouts/NavBar";
import { fetchUserData } from "../../services/services";
/*Declaramos los estilos que se van a usar por cada componente*/
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
/*Declaramos el estilo de la letra*/
const StyledTypography = withStyles({
  root: {
    fontSize: "34px",
    lineHeigth: "36px",
    fontStyle: "normal",
    fontWeigth: "400",
  },
})(Typography);

/*Declaramos la función principal*/
export default function SignIn() {
  const classes = useStyles();
  /*Creamos constantes*/
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (getUser, evt) => {
    evt.preventDefault();
    fetchUserData("POST", "user", "LOGIN_USER", getUser).then((res) => {
      if (res.status !== "SUCCESS") {
        setErrorMessage(res.message);
      } else {
        localStorage.setItem("User_session", JSON.stringify(res.token));
        history.push({
          pathname: "/",
          state: { token: res.token },
        });
      }
    });
  };
  /* Renderizado de la vista de Inicio de Sesión */
  return (
    <>
      <NavBar></NavBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <StyledTypography>Iniciar Sesión</StyledTypography>
          <form className={classes.form} noValidate>
            <Grid container align="center" spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  id="email"
                  name="us_correo"
                  label="Correo electrónico"
                  type="email"
                  autoComplete="us_correo"
                  {...register("us_correo", {
                    required: true,
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  })}
                />
                <FormError
                  condition={errors.us_correo?.type === "required"}
                  content="Ingrese correo electrónico"
                />
                <FormError
                  condition={errors.us_correo?.type === "pattern"}
                  content="Dirección de correo no válido"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  id="password"
                  name="us_contrasena"
                  label="Contraseña"
                  type="password"
                  autoComplete="current-password"
                  {...register("us_contrasena", {
                    required: true,
                    minLength: 8,
                    maxLength: 14,
                  })}
                />
                <FormError
                  condition={errors.us_contrasena?.type === "required"}
                  content="Ingrese contraseña"
                />
                <FormError
                  condition={errors.us_contrasena?.type === "minLength"}
                  content="Contraseña no válida"
                />
                <FormError
                  condition={errors.us_contrasena?.type === "maxLength"}
                  content="Contraseña no válida"
                />
              </Grid>
              <Grid>
                <FormError
                  condition={errorMessage !== ""}
                  content={errorMessage}
                />
              </Grid>
              <Grid item xs={12}>
                <PrimaryButton
                  type="submit"
                  name="INICIAR SESIÓN"
                  className={classes.submit}
                  onClick={handleSubmit(onSubmit)}
                ></PrimaryButton>
              </Grid>
              <Grid item xs={6} fontWeight="bold">
                ¿NO TIENES CUENTA?
              </Grid>
              <Grid item xs={6}>
                <Link variant="body2" component={RouterLink} to="/signup">
                  {"¡REGISTRATE!"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
