import React from "react";
import NavBar from "../../layouts/NavBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useInput } from "../../hooks/useInput";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Input from "../../components/TextFields/Input";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import useLocations from "../../hooks/useLocations";
import useFilterSelect from "../../hooks/useFilterSelect";

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

  const { value: departamento, bind: bindDepatamento } = useInput("");
  const { value: provincia, bind: bindProvincia } = useInput("");
  const { value: distrito, bind: bindDistrito } = useInput("");

  const [filteredProvincias, filteredDistritos] = useFilterSelect(
    departamento,
    provincia
  );

  /*const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };*/

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
                  /*value={state.age}
                onChange={handleChange}*/
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

            <Grid container item xs={6} spacing={3}>
              <Input id="imput3" label="Nombres y apellidos" />
            </Grid>

            <Grid container item xs={6} spacing={3}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="imput4" htmlFor="filled-age-native-simple">
                  Provincia
                </InputLabel>
                <Select
                  /*value={state.age}
                onChange={handleChange}*/
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

            <Grid container item xs={6} spacing={3}>
              <Input id="imput5" label="Correo electrònico" />
            </Grid>

            <Grid container item xs={6} spacing={3}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="imput6" htmlFor="filled-age-native-simple">
                  Distrito
                </InputLabel>
                <Select
                  /*value={state.age}
                onChange={handleChange}*/
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
