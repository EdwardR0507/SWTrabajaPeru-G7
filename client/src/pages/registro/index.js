import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useInput } from "../../hooks/useInput";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import NavBar from "../../layouts/NavBar";
import Input from "../../components/TextFields/Input";
import useLocations from "../../hooks/useLocations";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  formControl: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
    margin: theme.spacing(0),
  },
}));

const StyledTypography = withStyles({
  root: {
    fontSize: "34px",
    lineHeigth: "36px",
    fontStyle: "normal",
    fontWeigth: "400",
  },
})(Typography);

const SignUp = () => {
  const classes = useStyles();
  const locations = useLocations();
  const { register, formState: {errors}, handleSubmit } = useForm();

  const onSubmit = async (user, evt) => {
    evt.preventDefault();
    console.log(user);
    await axios
      .post("http://localhost:4000/user", {
        command: "REGISTER_USER",
        transaction: user,
      })
      .then((res) => {
        console.log(res);
        return res;
      });
  };

  return (
    <>
      <NavBar></NavBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <StyledTypography>Registro</StyledTypography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    variant="filled" 
                    fullWidth 
                    label="Nombres y Apellidos" 
                    name="us_nombres"
                    type="text"
                    {...register("us_nombres", {required: true})}
                />
              {errors.us_nombres?.type === "required" && "Ingrese nombres y apellidos"}
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  id="email"
                  label="Correo Electrónico"
                  name="us_correo"
                  type="email"
                  {...register("us_correo", {required: true})}
                />
                {errors.us_correo?.type === "required" && "Ingrese correo electrónico"}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  id="phoneNumber"
                  label="Teléfono"
                  name="us_celular"
                  {...register("us_celular", {required: true})}
                />
              </Grid>
                {errors.us_celular?.type === "required" && "Ingrese celular"}

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  name="us_contrasena"
                  label="Contraseña"
                  type="password"
                  id="password"
                  {...register("us_contrasena", {required: true})}
                />
                {errors.us_contrasena?.type === "required" && "Ingrese contraseña"}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  name="passwordConfirm"
                  label="Confirmar Contraseña"
                  type="password"
                  id="passwordConfirm"
                />
                {errors.passwordConfirm?.type === "required" && "Ingrese contraseña"}
              </Grid>

              <Grid container item xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="imput2" htmlFor="filled-age-native-simple">
                    Departamento
                  </InputLabel>
                  <Select
                    native
                    name="us_departamento"
                    {...register("us_departamento", {required: true})}
                  >
                    <option hidden />
                    <option value={1}>Amazonas</option>
                    <option value={2}>Áncash</option>
                    <option value={3}>Apurímac</option>
                    <option value={4}>Arequipa</option>
                    <option value={5}>Ayacucho</option>
                    <option value={6}>Cajamarca</option>
                    <option value={7}>Callao</option>
                    <option value={8}>Cusco</option>
                    <option value={9}>Huancavelica</option>
                    <option value={10}>Huánuco</option>
                    <option value={11}>Ica</option>
                    <option value={12}>Junín</option>
                    <option value={13}>La Libertad</option>
                    <option value={14}>Lambayeque</option>
                    <option value={15}>Lima</option>
                    <option value={16}>Loreto</option>
                    <option value={17}>Madre de Dios</option>
                    <option value={18}>Moquegua</option>
                    <option value={19}>Pasco</option>
                    <option value={20}>Piura</option>
                    <option value={21}>Puno</option>
                    <option value={22}>San Martín</option>
                    <option value={23}>Tacna</option>
                    <option value={24}>Tumbes</option>
                    <option value={25}>Ucayali</option>
                  </Select>
                  {errors.us_departamento?.type === "required" && "Ingrese departamento"}
                </FormControl>
              </Grid>

              <Grid container item xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="imput4" htmlFor="filled-age-native-simple">
                    Provincia
                  </InputLabel>
                  <Select
                    native
                    name="us_provincia"
                    {...register("us_provincia", {required: true})}
                  >
                    <option aria-label="None" value="" />
                    <option value={1}>Provincia 1</option>
                    <option value={2}>Provincia 2</option>
                    <option value={3}>Provincia 3</option>
                  </Select>
                  {errors.us_provincia?.type === "required" && "Ingrese provincia"}
                </FormControl>
              </Grid>

              <Grid container item xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="imput6" htmlFor="filled-age-native-simple">
                    Distrito
                  </InputLabel>
                  <Select
                    native
                    name="us_distrito"
                    {...register("us_distrito", {required: true})}
                  >
                    <option aria-label="None" value="" />
                    <option value={1}>Distrito 1</option>
                    <option value={2}>Distrito 2</option>
                    <option value={3}>Distrito 3</option>
                  </Select>
                  {errors.us_distrito?.type === "required" && "Ingrese distrito"}
                </FormControl>
              </Grid>

              <Grid item xs={6} sm={6}>
                <SecondaryButton
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  name="CANCELAR"
                ></SecondaryButton>
              </Grid>
              <Grid item xs={6} sm={6}>
                <PrimaryButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  name="REGISTRAR"
                  onClick={handleSubmit(onSubmit)}
                />
              </Grid>

              <Grid item xs={6} sm={6} align="center" fontWeight="bold">
                ¿YA TIENES UNA CUENTA?
              </Grid>
              <Grid item xs={6} sm={6}>
                <Link variant="body2" component={RouterLink} to="/signin">
                  INICIA SESIÓN
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
