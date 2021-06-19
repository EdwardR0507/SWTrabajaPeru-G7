import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Image from "material-ui-image";
import SearchField from "../components/TextFields/SearchField";
import theme from "../themes/themes";

const StyledNavBar = withStyles({
  root: {
    position: "relative",
    background: theme.palette.primary.main,
    height: "14.5%",
    lineHeight: "24px",
    letterSpacing: "0.18px",
    textTransform: "uppercase",
  },
})(AppBar);

const StyledTypography = withStyles({
  root: {
    color: "#FFFFFF",
    textDecoration: "none",
    margin: "0 20px",
  },
})(Typography);

const Logo = withStyles({
  root: {
    width: "96px",
    margin: "0 20px",
  },
})(Typography);
/*Cambiar por Image cuando esté listo el logo */

const NavBar = () => {
  return (
    <StyledNavBar>
      <Toolbar>
        <Logo />
        {/*Espacio vacío para el logo*/}
        <Link href="#">
          <StyledTypography variant="h5">Inicio</StyledTypography>
        </Link>
        <SearchField placeholder="Buscar Cliente o Servicio" />
        <Link href="#">
          <StyledTypography variant="h5">Registrarse</StyledTypography>
        </Link>
        <Link href="#">
          <StyledTypography variant="h5">Iniciar Sesión</StyledTypography>
        </Link>
      </Toolbar>
    </StyledNavBar>
  );
};

export default NavBar;
