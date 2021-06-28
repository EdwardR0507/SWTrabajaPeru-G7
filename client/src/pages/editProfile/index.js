import React from "react";
import axios from "axios";
import NavBar from "../../layouts/NavBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useInput } from "../../hooks/useInput";
import useLocations from "../../hooks/useLocations";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Input from "../../components/TextFields/Input";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

const StyledTypography = withStyles({
  root: {
    fontSize: "34px",
    lineHeigth: "36px",
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

const useStyles = makeStyles((theme) => ({
  formControl: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
    margin: theme.spacing(0),
  },
  selectEmpty: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
    marginTop: theme.spacing(0),
  },
}));

export default function EditProfile() {
  const classes = useStyles();

  const locations = useLocations();

  const { value: name, bind: bindName } = useInput("");
  const { value: email, bind: bindEmail } = useInput("");
  const { value: phoneNumber, bind: bindPhoneNumber } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");
  const { value: departamento, bind: bindDepatamento } = useInput("");
  const { value: provincia, bind: bindProvincia } = useInput("");
  const { value: distrito, bind: bindDistrito } = useInput("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let profileEdit = {
      us_nombres: name,
      us_correo: email,
      us_celular: phoneNumber,
      us_contrasena: password,
      us_departamento: departamento,
      us_provincia: provincia,
      us_distrito: distrito,
    };
    await axios
      .post("http://localhost:4000/editProfile", {
        command: "EDIT_PROFILE",
        transaction: profileEdit,
      })
      .then((res) => {
        console.log(res);
        return res;
      });
  };

  return (
    <>
      <NavBar></NavBar>
      <StyledContainer>
        <form className={classes.form} noValidate>
          <Grid container spacing={6}>
            <Grid container item xs={12} spacing={1}></Grid>

            <Grid container item xs={12} spacing={3}>
              <StyledTypography>Editar Perfil</StyledTypography>
            </Grid>

            <Grid container item xs={6} spacing={3}>
              <Input id="imput1" label="Usuario" />
            </Grid>

            <Grid container item xs={6} spacing={3}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="imput2" htmlFor="filled-age-native-simple">
                  Departamento
                </InputLabel>
                <Select
                  native
                  /*value={state.age}
                onChange={handleChange}*/
                  inputProps={{
                    name: "departamento",
                    id: "filled-departamento-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Departamento 1</option>
                  <option value={2}>Departamento 2</option>
                  <option value={3}>Departamento 3</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid container item xs={6} spacing={3}>
              <Input id="imput3" label="Nombres y apellidos" />
            </Grid>

            <Grid container item xs={6} spacing={3}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="imput4" htmlFor="filled-age-native-simple">
                  Provincia
                </InputLabel>
                <Select
                  native
                  /*value={state.age}
                onChange={handleChange}*/
                  inputProps={{
                    name: "provincia",
                    id: "filled-provincia-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Provincia 1</option>
                  <option value={2}>Provincia 2</option>
                  <option value={3}>Provincia 3</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid container item xs={6} spacing={3}>
              <Input id="imput5" label="Correo electrònico" />
            </Grid>

            <Grid container item xs={6} spacing={3}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="imput6" htmlFor="filled-age-native-simple">
                  Distrito
                </InputLabel>
                <Select
                  native
                  /*value={state.age}
                onChange={handleChange}*/
                  inputProps={{
                    name: "distrito",
                    id: "filled-distrito-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Distrito 1</option>
                  <option value={2}>Distrito 2</option>
                  <option value={3}>Distrito 3</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid container item xs={6} spacing={3}>
              <Input id="imput7" label="Número de teléfono" />
            </Grid>

            <Grid container item xs={6} spacing={3}></Grid>

            <Grid container item xs={6} spacing={3}>
              <Input
                id="imput8"
                variant="filled"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            <Grid container item xs={6} spacing={3}></Grid>

            <Grid container item xs={6} spacing={3}>
              <Input
                id="imput9"
                variant="filled"
                required
                fullWidth
                name="password"
                label="Confirmar Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            <Grid container justify="center" item xs={12} spacing={3}>
              <Grid container item xs={3} spacing={3}>
                <SecondaryButton
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  name="CANCELAR"
                ></SecondaryButton>
              </Grid>
              <Grid container item xs={3} spacing={3}>
                <PrimaryButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  name="GUARDAR PERFIL"
                ></PrimaryButton>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </StyledContainer>
    </>
  );
}
