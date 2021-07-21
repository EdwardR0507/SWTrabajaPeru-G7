import React, { useState } from "react";
import { useHistory } from "react-router";
import logo from "../assets/Trabaja peru.png"
import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchField from "../components/TextFields/SearchField";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import theme from "../themes/themes";
import SideBar from "../layouts/Sidebar/SideBar";

const StyledNavBar = withStyles({
  root: {
    background: theme.palette.primary.main,
    display: 'flex',
    position: "sticky",
    justifyContent: 'space-around',
    height: "14.5%",
    lineHeight: "24px",
    letterSpacing: "0.18px",
    textTransform: "uppercase",
  },
})(AppBar);

const StyledToolbar = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})(Toolbar)

const StyledMenu = withStyles({

})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledTypography = withStyles({
  root: {
    display: 'inline',
    color: theme.colorLetter.primary.main,
    textDecoration: "none",
    marginRight: "40px",
    marginLeft: "25px"
  },
})(Typography);

const StyledIconButton = withStyles({
  root: {
    color: theme.colorLetter.primary.main,
    marginRight: '50px'
  },
})(IconButton);

const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  return (
    <StyledNavBar>
      <StyledToolbar>
        {props.user ?
          <>
            <>
              <SideBar />
              <img src={logo} alt="logo" width="56px" height="50px" />
            </>
            <SearchField placeholder="Buscar Cliente o Servicio" />
            <>
              <StyledIconButton>
                <NotificationsIcon fontSize="large" />
              </StyledIconButton>
              <IconButton onClick={handleClick}>
                <Avatar />
              </IconButton>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={()=>{
                  history.push({
                    pathname: '/editProfile',
                    search: `?id=${props.user.us_id}`,
                    state: { user: props.user }
                  })
                }}>
                  <ListItemIcon>
                    <EditIcon />
                  </ListItemIcon>
                    <ListItemText primary="Editar Perfil" />
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cerrar Sesión" />
                </MenuItem>
              </StyledMenu>
              <Link>
                <StyledTypography variant="h5">{props.user.us_nombres}</StyledTypography>
              </Link>
            </>
          </>
          :
          <>
            <img src={logo} alt="logo" width="60px" height="50px" />
            <div>
              <Link component={RouterLink} to="/signup">
                <StyledTypography variant="h5">Registrarse</StyledTypography>
              </Link>
              <Link component={RouterLink} to="/signin">
                <StyledTypography variant="h5">Iniciar Sesión</StyledTypography>
              </Link>
            </div>
          </>
        }
      </StyledToolbar>
    </StyledNavBar>
  );
};

export default NavBar;
