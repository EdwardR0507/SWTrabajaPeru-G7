import React from "react";
import { useHistory, useLocation } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [worker, setWorker] = React.useState(false);
  const [client, setClient] = React.useState(false);
  const location = useLocation();
  const history = useHistory();
  const state = location.state;

  const handleClick = () => {
    setWorker(!worker);
  };

  const handleOpen = () => {
    setClient(!client);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem
        button
        onClick={() => {
          history.push({
            pathname: "/",
            state: { token: state?.token },
          });
        }}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItem>
      <ListItem button onClick={handleOpen}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Cliente" />
      </ListItem>
      <Collapse in={client} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => {
              history.push({
                pathname: "/hiredServices",
                state: { token: state.token },
              });
            }}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Mis Servicios Contratados" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Trabajador" />
      </ListItem>
      <Collapse in={worker} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => {
              history.push({
                pathname: "/manageservices",
                state: { token: state.token },
              });
            }}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Mis Servicios" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            onClick={() => {
              history.push({
                pathname: "/solicitedServices",
                state: { token: state.token },
              });
            }}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="MIS SOLICITUDES" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
