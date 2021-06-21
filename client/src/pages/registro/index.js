import React  from "react";
import { useInput } from "../../hooks/useInput";
import axios from 'axios';
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import NavBar from "../../layouts/NavBar";
import Input from "../../components/TextFields/Input";

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

  const { value: name, bind: bindName, reset: resetName } = useInput('a')
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('')
  const { value: phoneNumber, bind: bindPhoneNumber, reset: resetPhoneNumber } = useInput('')
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('')

  const handleSubmit = async (evt) => {
      evt.preventDefault();
      await axios.post('localhost:4000/user',{
        command: 'REGISTER_USER',
        transaction: {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          password: password
        }
      })
      .then(res => {return res});
      
      //resetName();
      //resetEmail();
      //resetPhoneNumber();
  }

  return (
    <>
      <NavBar></NavBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <StyledTypography>Registro</StyledTypography>
          <form className={classes.form}
                 noValidate>
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
                  onClick={handleSubmit}></PrimaryButton>
              </Grid>

              <Grid item xs={6} sm={6} align="center" fontWeight="bold">
                ¿YA TIENES UNA CUENTA?
              </Grid>
              <Grid item xs={6} sm={6}>
                <Link href="#" variant="body2">
                  INICIA SESIÓN
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}

export default SignUp;