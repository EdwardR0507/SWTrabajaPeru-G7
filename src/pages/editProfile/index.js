/*Importamos las librerias principales*/
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
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
  IconButton,
  Select,
  Snackbar,
} from "@material-ui/core/";
import CloseIcon from "@material-ui/icons/Close";
import { useInput } from "../../hooks/useInput";
import useLocations from "../../hooks/useLocations";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import FormError from "../../components/Errors/FormError";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import useFilterSelect from "../../hooks/useFilterSelect";
import { fetchData } from "../../services/services";

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
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: user,
  });
  const location = useLocation();
  const state = location.state;
  const history = useHistory();

  const locations = useLocations();

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

  let token;

  useEffect(() => {
    console.log(state);
    //Cambiar post por get cuando se arregle
    if(!localStorage.hasOwnProperty("User_session")){
      history.push({
        pathname: "/signup"
      })
    }
    else{
      token = localStorage.getItem("User_session")
      token = token.slice(1, -1)
      fetchData(token, "GET", "user-auth", "GET_MY_USER")
      .then((res) => {
        console.log(res);
        setUser(res);
        reset({
          us_nombres: res.us_nombres,
          us_celular: res.us_celular,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [reset]);

  const onSubmit = async (userEdited, event) => {
    event.preventDefault();
    console.log(userEdited);
    token = localStorage.getItem("User_session")
    token = token.slice(1, -1)
    fetchData(token, "POST", "user-auth", "EDIT_USER", userEdited).then(
      (res) => {
        setOpen(true);
        console.log(res);
      }
    );
  };

  console.log("distrito: ", distrito);

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

  const conditionalRendering = () => {
    return user.us_nombres ? (
      <>
        <TextField
          variant="filled"
          fullWidth
          label="Nombres y Apellidos"
          name="us_nombres"
          defaultValue={user.us_nombres}
          type="text"
          {...register("us_nombres", {
            required: true,
            maxLength: 40,
          })}
        />
        <FormError
          condition={errors.us_nombres?.type === "required"}
          content="Ingrese nombres y apellidos"
        />
        <FormError
          condition={errors.us_nombres?.type === "maxLength"}
          content="Nombre no válido"
        />
      </>
    ) : (
      <div>Cargando....</div>
    );
  };

  const conditionalPhone = () => {
    return user.us_celular ? (
      <>
        <TextField
          fullWidth
          variant="filled"
          id="phoneNumber"
          label="Teléfono"
          name="us_celular"
          defaultValue={user.us_celular}
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
          content="Número de celular no válido"
        />
      </>
    ) : (
      <div>Cargando...</div>
    );
  };

  /*Declaramos lo que nos va a retornar la funcion*/
  return user ? (
    <>
      <NavBar user={user} token={state?.token} />
      <StyledContainer role="edit-profile">
        <form className={classes.form} noValidate>
          <Grid container spacing={6}>
            <Grid container item xs={12} spacing={1}></Grid>

            <Grid container item xs={12} spacing={3}>
              <StyledTypography>Editar Perfil</StyledTypography>
            </Grid>

            <Grid container item xs={6} spacing={3}>
              {conditionalRendering()}
            </Grid>

            <Grid container item xs={6} spacing={3}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>Departamento</InputLabel>
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
                    if (dept.name === user.us_departamento) {
                      return (
                        <option value={dept.name} key={dept.id} selected>
                          {dept.name}
                        </option>
                      );
                    }
                  })}
                  {locations.departamentos.map((dept) => {
                    if (dept.name !== user.us_departamento) {
                      return (
                        <option value={dept.name} key={dept.id}>
                          {dept.name}
                        </option>
                      );
                    }
                  })}
                </Select>
                <FormError
                  condition={errors.us_departamento?.type === "required"}
                  content="Ingrese departamento"
                />
              </FormControl>
            </Grid>

            <Grid container item xs={6} spacing={3}>
              {conditionalPhone()}
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
                    name: "us_provincia",
                    id: "filled-provincia-native-simple",
                  }}
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

            <Grid container item xs={6} spacing={3}>
              <div>{/*Espacio vacío*/}</div>
            </Grid>

            <Grid container item xs={6} spacing={3}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="imput6" htmlFor="filled-age-native-simple">
                  Distrito
                </InputLabel>
                <Select
                  /*value={state.age}
                onChange={handleChange}*/
                  defaultValue={user.user_distrito}
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
                <FormError
                  condition={errors.us_distrito?.type === "required"}
                  content="Ingrese distrito"
                />
              </FormControl>
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
                  onClick={handleSubmit(onSubmit)}
                ></PrimaryButton>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  message="Perfil editado correctamente"
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
              </Grid>
            </Grid>
          </Grid>
        </form>
      </StyledContainer>
    </>
  ) : (
    <div>Cargando...</div>
  );
}
