import React, { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useInput } from "../../hooks/useInput";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Link,
  Grid,
  InputLabel,
  FormControl,
  Select,
  Typography,
  Container,
  TextField,
  Snackbar,
  IconButton,
  makeStyles,
  withStyles,
} from "@material-ui/core/";
import CloseIcon from "@material-ui/icons/Close";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import FormError from "../../components/Errors/FormError";
import NavBar from "../../layouts/NavBar";
import useLocations from "../../hooks/useLocations";
import useFilterSelect from "../../hooks/useFilterSelect";
import { fetchUserData } from "../../services/services";
/*Declaramos el estilo de la letra*/
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
  //Estilo envio
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  //Estilo envio
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  //Estilo form control
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

  const [open, setOpen] = useState(false);
  const locations = useLocations();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const history = useHistory();

  const { value: departamento, bind: bindDepartamento } = useInput("");
  const { value: provincia, bind: bindProvincia } = useInput("");
  const { value: distrito, bind: bindDistrito } = useInput("");

  const [filteredProvincias, filteredDistritos] = useFilterSelect(
    departamento,
    provincia
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onSubmit = async (user, evt) => {
    evt.preventDefault();
    fetchUserData("POST", "user", "REGISTER_USER", user).then((res) => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        history.push({
          pathname: "/signin",
        });
      }, 3000);
    });
  };

  return (
    <>
      <NavBar></NavBar>
      {/* Contenedor Principal del formulario de registro */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <StyledTypography>Registro</StyledTypography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              {/* Contenedor Campo de Nombres y Apellidos */}
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  label="Nombres y Apellidos"
                  name="us_nombres"
                  type="text"
                  {...register("us_nombres", { required: true, maxLength: 40 })}
                />
                <FormError
                  condition={errors.us_nombres?.type === "required"}
                  content="Ingrese nombres y apellidos"
                />
                <FormError
                  condition={errors.us_nombres?.type === "maxLength"}
                  content="Nombre no v??lido"
                />
              </Grid>
              {/* Contenedor Campo de Correo Electronico */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  id="email"
                  label="Correo Electr??nico"
                  name="us_correo"
                  type="email"
                  {...register("us_correo", {
                    required: true,
                    maxLength: 45,
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  })}
                />
                <FormError
                  condition={errors.us_correo?.type === "required"}
                  content="Ingrese correo electr??nico"
                />
                <FormError
                  condition={errors.us_correo?.type === "pattern"}
                  content="Direcci??n de correo no v??lido"
                />
              </Grid>
              {/* Fin Campo de Correo Electronico */}
              {/* Contenedor Campo de Numero Telf??nico */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  id="phoneNumber"
                  label="Celular"
                  name="us_celular"
                  {...register("us_celular", {
                    required: true,
                    pattern: /^^9\d{8}$/,
                  })}
                />
                <FormError
                  condition={errors.us_celular?.type === "required"}
                  content="Ingrese celular"
                />
                <FormError
                  condition={errors.us_correo?.type === "pattern"}
                  content="N??mero de celular no v??lido"
                />
              </Grid>
              {/* Fin Campo de Numero Telf??nico */}
              {/* Contenedor Campo de Contrase??a */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  name="us_contrasena"
                  label="Contrase??a"
                  type="password"
                  id="password"
                  {...register("us_contrasena", {
                    required: true,
                    minLength: 8,
                    maxLength: 14,
                  })}
                />
                <FormError
                  condition={errors.us_contrasena?.type === "required"}
                  content="Ingrese contrase??a"
                />
                <FormError
                  condition={errors.us_contrasena?.type === "minLength"}
                  content="Ingrese como m??nimo 8 caracteres"
                />
                <FormError
                  condition={errors.us_contrasena?.type === "maxLength"}
                  content="Ingrese como m??ximo 14 caracteres"
                />
              </Grid>
              {/* Contenedor Campo de Confirmar Contrase??a*/}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  name="passwordConfirm"
                  label="Confirmar Contrase??a"
                  type="password"
                  id="passwordConfirm"
                  {...register("passwordConfirm", {
                    required: true,
                    minLength: 8,
                    maxLength: 14,
                  })}
                />
                <FormError
                  condition={errors.us_contrasena?.type === "required"}
                  content="Ingrese contrase??a"
                />
                <FormError
                  condition={
                    getValues("passwordConfirm") !== getValues("us_contrasena")
                  }
                  content="Contrase??as diferentes"
                />
              </Grid>
              {/* Fin Campo de Confirmar Contrase??a*/}
              {/* Contenedor Campo de Departamento*/}
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
                  <FormError
                    condition={errors.us_departamento?.type === "required"}
                    content="Ingrese departamento"
                  />
                </FormControl>
              </Grid>
              {/* Fin Campo de Departamento*/}
              {/* Contenedor Campo Provincia*/}
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
                  <FormError
                    condition={errors.us_provincia?.type === "required"}
                    content="Ingrese provincia"
                  />
                </FormControl>
              </Grid>
              {/* Fin Campo Provincia*/}
              {/* Contenedor Campo Distrito*/}
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
                  <FormError
                    condition={errors.us_distrito?.type === "required"}
                    content="Ingrese distrito"
                  />
                </FormControl>
              </Grid>
              {/* Fin Campo Distrito*/}
              {/* Contenedor Campo Distrito*/}
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
              {/* Redirecciones finales*/}
              {/* Redireccion ??YA TIENES UNA CUENTA?*/}
              <Grid item xs={6} sm={6} align="center" fontWeight="bold">
                ??YA TIENES UNA CUENTA?
              </Grid>
              {/* Redireccion INICIAR SESION*/}
              <Grid item xs={6} sm={6}>
                <Link variant="body2" component={RouterLink} to="/signin">
                  INICIA SESI??N
                </Link>
              </Grid>
            </Grid>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              role="close"
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              message="Usuario correctamente registrado"
              action={
                <React.Fragment>
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    className={classes.close}
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                </React.Fragment>
              }
            />
          </form>
        </div>
      </Container>
      {/*Fin formulario de registro */}
    </>
  );
};

export default SignUp;
