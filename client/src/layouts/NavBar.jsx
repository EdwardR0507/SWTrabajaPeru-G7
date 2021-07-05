import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Image from "material-ui-image";
import SearchField from "../components/TextFields/SearchField";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import theme from "../themes/themes";
import SideBar from "../layouts/Sidebar/SideBar";

const StyledNavBar = withStyles({
  root: {
    background: theme.palette.primary.main,
    position: "sticky",
    height: "14.5%",
    lineHeight: "24px",
    letterSpacing: "0.18px",
    textTransform: "uppercase",
  },
})(AppBar);

const StyledTypography = withStyles({
  root: {
    color: theme.colorLetter.primary.main,
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

const StyledIconButton = withStyles({
  root: {
    color: theme.colorLetter.primary.main,
  },
})(IconButton);

const NavBar = (props) => {
  return (
    <StyledNavBar>
      <Toolbar>
        {props.user ?
          <>
            <SideBar />
            <Logo />
            {/*Espacio vacío para el logo*/}
          </>
          :
          <>
            <Logo />
            {/*Espacio vacío para el logo*/}
            <Link component={RouterLink} to="/">
              <StyledTypography variant="h5">Inicio</StyledTypography>
            </Link>
          </>
        }
        <SearchField placeholder="Buscar Cliente o Servicio" />
        {props.user ?
          <>
            <StyledIconButton>
              <NotificationsIcon fontSize="large" />
            </StyledIconButton>
            <Avatar></Avatar>
            <Link>
              <StyledTypography variant="h5">{props.user.us_nombres}</StyledTypography>
            </Link>
          </>
          :
          <>
            <Link component={RouterLink} to="/signup">
              <StyledTypography variant="h5">Registrarse</StyledTypography>
            </Link>
            <Link component={RouterLink} to="/signin">
              <StyledTypography variant="h5">Iniciar Sesión</StyledTypography>
            </Link>
          </>
        }
      </Toolbar>
    </StyledNavBar>
  );
};

export default NavBar;
