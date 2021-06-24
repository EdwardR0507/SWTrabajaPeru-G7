import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Image from "material-ui-image";
import SearchField from "../components/TextFields/SearchField";
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import theme from "../themes/themes";

const StyledNavBar = withStyles({
  root: {
    position: "relative",
    background: theme.palette.primary.main,
    position: 'sticky',
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

const StyledIconButton = withStyles({
  root: {
    color: '#FFFFFF'
  }
})(IconButton);

const RightBar = (props) => {
  const isLogged = props.isLogged;
  if (!isLogged) {
    return (
      <>
        <Link
          component={RouterLink}
          to="/signup">
          <StyledTypography
            variant="h5">
            Registrarse
          </StyledTypography>
        </Link>
        <Link
          component={RouterLink}
          to="/signin">
          <StyledTypography
            variant="h5">
            Iniciar Sesión
          </StyledTypography>
        </Link>
      </>
    )
  }
  else {
    return (
      <>
        <StyledIconButton>
          <NotificationsIcon
            fontSize="large" />
        </StyledIconButton>
        <Avatar></Avatar>
        <Link>
          <StyledTypography
            variant="h5">
            DANIEL CIFUENTES
          </StyledTypography>
        </Link>
      </>
    )
  }
}

const NavBar = () => {
  return (
    <StyledNavBar>
      <Toolbar>
        <Logo />
        {/*Espacio vacío para el logo*/}
        <Link
          component={RouterLink}
          to="/">
          <StyledTypography
            variant="h5">
            Inicio
          </StyledTypography>
        </Link>
        <SearchField placeholder="Buscar Cliente o Servicio" />
        <RightBar isLogged={false}/>
      </Toolbar>
    </StyledNavBar>
  );
};

export default NavBar;
