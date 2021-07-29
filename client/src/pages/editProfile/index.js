/*Importamos las librerias principales*/
import React from "react";
import axios from "axios";
import GlobalEnv from "../../GlobalEnv";
import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import NavBar from "../../layouts/NavBar";
import {
  Container,
  Typography,
  makeStyles,
  withStyles,
  Grid,
  InputLabel,
  FormControl,
  TextField,
  Select,
  Box
} from "@material-ui/core/";
import { useInput } from "../../hooks/useInput";
import useLocations from "../../hooks/useLocations";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import FormError from "../../components/Errors/FormError";
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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const location = useLocation();
  const state = location.state;
  const locations = useLocations();

  const { value: departamento, bind: bindDepartamento } = useInput("");
  const { value: provincia, bind: bindProvincia } = useInput("");
  const { value: distrito, bind: bindDistrito } = useInput("");

  const [filteredProvincias, filteredDistritos] = useFilterSelect(
    departamento,
    provincia
  );

  const onSubmit = async(userEdited, event) => {
    event.preventDefault();
    console.log(userEdited)
    await axios.post(`${GlobalEnv.host}/user-auth`, {
      command: "EDIT_USER",
      transaction: userEdited
    })
    .then(res => console.log(res))
  }

  /*const handleSubmit = async (evt) => {
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
      
      {state ? <NavBar user={state.user} /> : <NavBar />}
      <StyledContainer>
        <form className={classes.form} noValidate>
          /*Usamos grid para dividir las vistas*/ 
          <Grid container spacing={6}>
           
            <Grid item xs={12} >
              <Box mt={1}>
              <StyledTypography>Editar Perfil</StyledTypography>  
              </Box> 
            </Grid>

            <Grid item xs={6} >
            <TextField
                  variant="filled"
                  fullWidth
                  label="Nombres y Apellidos"
                  defaultValue={state.user.us_nombres}
                  name="us_nombres"
                  type="text"
                  {...register("us_nombres", { required: true, maxLength: 40 })}
                />
                <FormError condition={errors.us_nombres?.type === "required"}
                           content="Ingrese nombres y apellidos" />
                <FormError condition={errors.us_nombres?.type === "maxLength"}
                           content="Nombre no válido" />
            </Grid>

            <Grid item xs={6} >
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>
                  Departamento
                </InputLabel>
                <Select
                  /*value={state.age}
                onChange={handleChange}*/
                  native
                  inputProps={{
                    name: "us_departamento",
                    id: "filled-departamento-native-simple",
                  }}
                  {...register("us_departamento", { required: true })}
                  {...bindDepartamento}
                >
                    {locations.departamentos.map((dept) => {
                      if (dept.name === state.user.us_departamento){
                        return (
                          <option value={dept.name} key={dept.id} selected>
                            {dept.name}
                          </option>
                        )
                      }
                    })}
                    {locations.departamentos.map((dept) => {
                      if (dept.name != state.user.us_departamento){
                        return (
                          <option value={dept.name} key={dept.id}>
                            {dept.name}
                          </option>
                        )
                      }
                    })}
                </Select>
                <FormError condition={errors.us_departamento?.type === "required"}
                             content="Ingrese departamento"/>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
            <TextField
                  fullWidth
                  variant="filled"
                  id="phoneNumber"
                  label="Teléfono"
                  name="us_celular"
                  value={state.user.us_celular}
                  {...register("us_celular", {
                    required: true,
                    pattern: /^^9\d{8}$/,
                  })}
                />
                <FormError condition={errors.us_celular?.type === "required"}
                           content="Ingrese celular"/>                
                <FormError condition={errors.us_correo?.type === "pattern"}
                           content="Número de celular no válido"/>   
            </Grid>

            <Grid item xs={6}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="imput4" htmlFor="filled-age-native-simple">
                  Provincia
                </InputLabel>
                <Select
                  /*value={state.age}
                onChange={handleChange}*/
                  native
                  inputProps={{
                    name: "us_provincia",
                    id: "filled-provincia-native-simple",
                  }}
                  {...register("us_provincia", { required: true })}
                  {...bindProvincia}
                >
                  <option hidden />
                    {filteredProvincias && filteredProvincias.map((prov) => (
                          <option value={prov.name} key={prov.id}>
                            {prov.name}
                          </option>
                        ))}
                </Select>
                <FormError condition={errors.us_provincia?.type === "required"}
                             content="Ingrese provincia"/>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <div>
                {/*Espacio vacío*/}
              </div>
            </Grid>

            <Grid item xs={6}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="imput6" htmlFor="filled-age-native-simple">
                  Distrito
                </InputLabel>
                <Select
                  /*value={state.age}
                onChange={handleChange}*/
                  native
                  inputProps={{
                    name: "us_distrito",
                    id: "filled-distrito-native-simple",
                  }}
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
                <FormError condition={errors.us_distrito?.type === "required"}
                             content="Ingrese distrito"/>
              </FormControl>
            </Grid>

            <Grid item  justify="center"  xs={12}>
              <Grid item xs={3} >
                <SecondaryButton
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  name="CANCELAR"
                ></SecondaryButton>
              </Grid>
              <Grid item xs={3} >
                <PrimaryButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  name="GUARDAR PERFIL"
                  onClick={handleSubmit(onSubmit)}
                ></PrimaryButton>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </StyledContainer>
    </>
  );
}
