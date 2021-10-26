import { React, useState, useEffect, useRef } from "react";
import {
  Grow,
  Paper,
  Popper,
  makeStyles,
  MenuList,
  ClickAwayListener,
  MenuItem,
} from "@material-ui/core/";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ClientCard from "../Cards/ClientCard";
import { fetchData } from "../../services/services";
import { useHistory } from "react-router";
import Spinner from "../Spinner/Spinner";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  list: {
    marginTop: theme.spacing(2),
  },
}));

const NotificationList = ({ token }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [solData, setSolData] = useState([]);
  const anchorRef = useRef(null);

  const history = useHistory();

  const handleToggle = () => {
    setOpen(!open);
    fetchData(token, "GET", "solicitud-auth", "GET_NOTIFICATIONS").then(
      (res) => {
        setSolData(res);
      }
    );
  };

  const handlePush = () => {
    history.push({ pathname: "/solicitedServices", state: { token: token } });
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return solData ? (
    <div className={classes.root}>
      <div>
        <NotificationsIcon
          fontSize="large"
          style={{ color: "#FFF" }}
          ref={anchorRef}
          aria-haspopup="true"
          onClick={handleToggle}
        />

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                    className={classes.list}
                  >
                    {solData.map((el) => {
                      return (
                        <MenuItem
                          key={el.sol_id}
                          className={classes.card}
                          onClick={handlePush}
                        >
                          <ClientCard
                            imagen={el.us_imagen}
                            nombres={el.us_nombres}
                            servicio={el.cat_nombre}
                          />
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};
export default NotificationList;
