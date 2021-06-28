import React from "react";
import { Link as RouterLink } from "react-router-dom";
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
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import NavBar from "../../layouts/NavBar";
import Input from "../../components/TextFields/Input";
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

const SignUp = () => {
  const classes = useStyles();

  const locations = useLocations();

  const { value: name, bind: bindName } = useInput("");
  const { value: email, bind: bindEmail } = useInput("");
  const { value: phoneNumber, bind: bindPhoneNumber } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");
  const { value: departamento, bind: bindDepatamento } = useInput("");
  const { value: provincia, bind: bindProvincia } = useInput("");
  const { value: distrito, bind: bindDistrito } = useInput("");

  const [filteredProvincias, filteredDistritos] = useFilterSelect(
    departamento,
    provincia
  );

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let user = {
      us_nombres: name,
      us_correo: email,
      us_celular: phoneNumber,
      us_contrasena: password,
      us_departamento: departamento,
      us_provincia: provincia,
      us_distrito: distrito,
    };
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
                <Input
                  required
                  name="username"
                  type="text"
                  id="username"
                  label="Nombre de Usuario"
                  bind={bindName}
                />
              </Grid>

              <Grid item xs={12}>
                <Input
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  type="email"
                  bind={bindEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Teléfono"
                  name="phoneNumber"
                  bind={bindPhoneNumber}
                />
              </Grid>

              <Grid item xs={12}>
                <Input
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  bind={bindPassword}
                />
              </Grid>

              <Grid item xs={12}>
                <Input
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="Confirmar Contraseña"
                  type="password"
                  id="passwordConfirm"
                />
              </Grid>

              <Grid container item xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="imput2" htmlFor="filled-age-native-simple">
                    Departamento
                  </InputLabel>
                  <Select
                    native
                    inputProps={{
                      name: "departamento",
                      id: "filled-departamento-native-simple",
                    }}
                    {...bindDepatamento}
                  >
                    <option hidden />
                    {locations.departamentos.map((dept) => (
                      <option value={dept.name} key={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid container item xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="imput4" htmlFor="filled-age-native-simple">
                    Provincia
                  </InputLabel>
                  <Select
                    native
                    inputProps={{
                      name: "provincia",
                      id: "filled-provincia-native-simple",
                    }}
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
                </FormControl>
              </Grid>

              <Grid container item xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="imput6" htmlFor="filled-age-native-simple">
                    Distrito
                  </InputLabel>
                  <Select
                    native
                    inputProps={{
                      name: "distrito",
                      id: "filled-distrito-native-simple",
                    }}
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
                  onClick={handleSubmit}
                ></PrimaryButton>
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
