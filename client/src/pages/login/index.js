import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import NavBar from "../../layouts/NavBar";
import Input from "../../components/TextFields/Input";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
/**/
const StyledTypography = withStyles({
  root: {
    fontSize: "34px",
    lineHeigth: "36px",
    fontStyle: "normal",
    fontWeigth: "400",
  },
})(Typography);

export default function SignIn() {
  const classes = useStyles();
  /*state={
    form:{
      username:'',
      password:''
    }
  }
  handleChange=e => {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form)
  }
  */
  return (
    <>
      <NavBar></NavBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <StyledTypography>Iniciar Sesión</StyledTypography>
          <form className={classes.form} noValidate maxWidth="xs">
            <Grid container align="center" spacing={3}>
              <Grid item xs={12}>
                <Input
                  required
                  id="username"
                  name="username"
                  label="Nombre de usuario"
                  type="text"
                  autoComplete="username"
                  /*onChange={this.handleChange}*/
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  required
                  id="password"
                  name="password"
                  label="Contraseña"
                  type="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <PrimaryButton
                  type="submit"
                  name="INICIAR SESIÓN"
                  className={classes.submit}
                ></PrimaryButton>
              </Grid>
              <Grid item xs={6} fontWeight="bold">
                ¿NO TIENES CUENTA?
              </Grid>
              <Grid item xs={6}>
                <Link href="" variant="body2">
                  {"¡REGISTRATE!"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
