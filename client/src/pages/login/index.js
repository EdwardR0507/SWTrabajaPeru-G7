import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import NavBar from "../../layouts/NavBar";

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
/**/
const StyledTypography = withStyles({
  root: {
    fontSize: "34px",
    lineHeigth: "36px",
    fontStyle: "normal",
    fontWeigth: "400",
  },
})(Typography);

const StyledErrorSpan = withStyles({
  root: {
    color: "#FF4D4D",
    float: "left",
  },
})(Typography);

export default function SignIn() {
  const classes = useStyles();

  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let user;

  const onSubmit = async (getUser, evt) => {
    evt.preventDefault();
    await axios
      .post("http://localhost:4000/user", {
        command: "LOGIN_USER",
        transaction: getUser,
      })
      .then((res) => {
        user = res.data.transaction;
        console.log(user);
        history.push({
          pathname: "/",
          search: `?id=${user.us_id}`,
          state: { user: user },
        });
      });
  };

  return (
    <>
      <NavBar></NavBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <StyledTypography>Iniciar Sesión</StyledTypography>
          <form className={classes.form} noValidate maxWidth="xs">
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
                <StyledErrorSpan>
                  {errors.us_correo?.type === "required" && "Ingrese el correo"}
                </StyledErrorSpan>
                <StyledErrorSpan>
                  {errors.us_correo?.type === "pattern" && "Correo no válido"}
                </StyledErrorSpan>
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
                <StyledErrorSpan>
                  {errors.us_contrasena?.type === "required" &&
                    "Ingrese la contraseña"}
                </StyledErrorSpan>
                <StyledErrorSpan>
                  {errors.us_contrasena?.type === "minLength" &&
                    "Contraseña no válida"}
                </StyledErrorSpan>
                <StyledErrorSpan>
                  {errors.us_contrasena?.type === "maxLength" &&
                    "Contraseña no válida"}
                </StyledErrorSpan>
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
