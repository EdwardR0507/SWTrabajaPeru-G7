import { React, useState, useEffect, useRef } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Grow, Paper, Popper, makeStyles, MenuList } from "@material-ui/core/";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ClientCard from "../Cards/ClientCard";
import { fetchData } from "../../services/services";
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

  const handleToggle = () => {
    setOpen(!open);
    fetchData(token, "GET", "solicitud-auth", "GET_NOTIFICATIONS").then(
      (res) => {
        console.log("res:");
        console.log(res);
        setSolData(res);
      }
    );
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

  return (
    <div className={classes.root}>
      <div>
        <NotificationsIcon
          fontSize="large"
          style={{ color: "#FFF" }}
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        />

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
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
                        <ClientCard
                          imagen={el.us_imagen}
                          nombres={el.us_nombres}
                          servicio={el.cat_nombre}
                          token={token}
                        />
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
  );
};
export default NotificationList;
