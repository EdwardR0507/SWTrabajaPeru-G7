import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useInput } from "../../hooks/useInput";
import { useHistory } from "react-router-dom";
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
import useLocations from "../../hooks/useLocations";
import useFilterSelect from "../../hooks/useFilterSelect";

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

const StyledErrorSpan = withStyles({
  root: {
    color: "#FF4D4D",
  },
})(Typography);

const SignUp = () => {
  const classes = useStyles();
  const locations = useLocations();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const history = useHistory();

  const { value: departamento, bind: bindDepartamento } = useInput("");
  const { value: provincia, bind: bindProvincia } = useInput("");
  const { value: distrito, bind: bindDistrito } = useInput("");

  const [filteredProvincias, filteredDistritos] = useFilterSelect(
    departamento,
    provincia
  );

  const onSubmit = async (user, evt) => {
    evt.preventDefault();
    console.log(user);
    await axios.post("http://localhost:4000/user", {
      command: "REGISTER_USER",
      transaction: user,
    });
    //.then((res) => {
    //history.push(`/home/:${res.data.transaction.us_id}`)
    //})
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
                  {...register("us_nombres", { required: true, maxLength: 40 })}
                />
                <StyledErrorSpan>
                  {errors.us_nombres?.type === "required" &&
                    "Ingrese nombres y apellidos"}
                </StyledErrorSpan>
                <StyledErrorSpan>
                  {errors.us_nombres?.type === "maxLength" &&
                    "Nombre no válido"}
                </StyledErrorSpan>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  id="email"
                  label="Correo Electrónico"
                  name="us_correo"
                  type="email"
                  {...register("us_correo", {
                    required: true,
                    maxLength: 45,
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  })}
                />
                <StyledErrorSpan>
                  {errors.us_correo?.type === "required" &&
                    "Ingrese correo electrónico"}
                </StyledErrorSpan>
                <StyledErrorSpan>
                  {errors.us_correo?.type === "pattern" &&
                    "Dirección de correo no válido"}
                </StyledErrorSpan>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  id="phoneNumber"
                  label="Teléfono"
                  name="us_celular"
                  {...register("us_celular", {
                    required: true,
                    pattern: /^^9\d{8}$/,
                  })}
                />
                <StyledErrorSpan>
                  {errors.us_celular?.type === "required" && "Ingrese celular"}
                </StyledErrorSpan>
                <StyledErrorSpan>
                  {errors.us_celular?.type === "pattern" &&
                    "Número de celular no válido"}
                </StyledErrorSpan>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  name="us_contrasena"
                  label="Contraseña"
                  type="password"
                  id="password"
                  {...register("us_contrasena", {
                    required: true,
                    minLength: 8,
                    maxLength: 14,
                  })}
                />
                <StyledErrorSpan>
                  {errors.us_contrasena?.type === "required" &&
                    "Ingrese contraseña"}
                </StyledErrorSpan>
                <StyledErrorSpan>
                  {errors.us_contrasena?.type === "minLength" &&
                    "Ingrese como mínimo 8 caracteres"}
                </StyledErrorSpan>
                <StyledErrorSpan>
                  {errors.us_contrasena?.type === "maxLength" &&
                    "Ingrese como máximo 14 caracteres"}
                </StyledErrorSpan>
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
                {errors.passwordConfirm?.type === "required" &&
                  "Ingrese contraseña"}
              </Grid>

              <Grid container item xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="imput2" htmlFor="filled-age-native-simple">
                    Departamento
                  </InputLabel>
                  <Select
                    native
                    name="us_departamento"
                    {...register("us_departamento", { required: true })}
                    {...bindDepartamento}
                  >
                    <option hidden />
                    {locations.departamentos.map((dept) => (
                      <option value={dept.name} key={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </Select>
                  <StyledErrorSpan>
                    {errors.us_departamento?.type === "required" &&
                      "Ingrese departamento"}
                  </StyledErrorSpan>
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
                    {...register("us_provincia", { required: true })}
                    {...bindProvincia}
                  >
                    <option hidden />
                    {filteredProvincias &&
                      filteredProvincias.map((prov) => (
                        <option value={prov.name} key={prov.id}>
                          {prov.name}
                        </option>
                      ))}
                  </Select>
                  <StyledErrorSpan>
                    {errors.us_provincia?.type === "required" &&
                      "Ingrese provincia"}
                  </StyledErrorSpan>
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
                    {...register("us_distrito", { required: true })}
                    {...bindDistrito}
                  >
                    <option hidden />
                    {filteredDistritos &&
                      filteredDistritos.map((dist) => (
                        <option value={dist.name} key={dist.id}>
                          {dist.name}
                        </option>
                      ))}
                  </Select>
                  <StyledErrorSpan>
                    {errors.us_distrito?.type === "required" &&
                      "Ingrese distrito"}
                  </StyledErrorSpan>
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
