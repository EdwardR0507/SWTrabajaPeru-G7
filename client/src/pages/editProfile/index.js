/*Importamos las librerias principales*/
import React from "react";
import axios from "axios";
import { useLocation } from "react-router";
import NavBar from "../../layouts/NavBar";
import {
  Container,
  Typography,
  makeStyles,
  withStyles,
  Grid,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core/";
import { useInput } from "../../hooks/useInput";
import useLocations from "../../hooks/useLocations";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Input from "../../components/TextFields/Input";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import useFilterSelect from "../../hooks/useFilterSelect";
/*Declaramos los estilos que se van a usar por cada componente*/
/*Declaramos el estilo de la letra*/ 
const StyledTypography = withStyles({
  root: {
    fontSize: "34px",
    lineHeigth: "36px",
    fontStyle: "normal",
    fontWeigth: "400",
  },
})(Typography);
/*Declaramos el estilo del container*/ 
const StyledContainer = withStyles({
  root: {
    marginTop: "0.9em",
    paddingLeft: "9.4em",
    display: "flex",
    alignItems: "center",
  },
})(Container);
/*Declaramos el estilo de la letra*/ 
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
/*Declaramos la función principal*/ 
export default function EditProfile() {
  /*Declaramos la función principal*/ 
  const classes = useStyles();
  const location = useLocation();
  const state = location.state;

  const locations = useLocations();

  const { value: departamento, bind: bindDepatamento } = useInput("");
  const { value: provincia, bind: bindProvincia } = useInput("");
  const { value: distrito, bind: bindDistrito } = useInput("");

  const [filteredProvincias, filteredDistritos] = useFilterSelect(
    departamento,
    provincia
  );

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let profileEdit = {};
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
/*Declaramos lo que nos va a retornar la funcion*/ 
  return (
    <>
      
      <NavBar user={state.user} />
      <StyledContainer>
        <form className={classes.form} noValidate>
          /*Usamos grid para dividir las vistas*/ 
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
