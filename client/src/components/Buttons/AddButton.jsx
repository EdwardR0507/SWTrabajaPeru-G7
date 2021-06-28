import React from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../themes/themes";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const StyledAddButton = withStyles({
  root: {
    background: theme.palette.primary.main,
    width: "9em",
    height: "2.8em",
    borderRadius: "4px",
    color: theme.colorLetter.primary.main,
    display: "flex",
    justifyContent: "space-around",
    fontWeight: "500",
    fontSize: "0.9em",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    textTransform: "uppercase",
    marginLeft: "20%",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
})(Button);

const AddButton = ({ name }) => {
  return (
    <StyledAddButton>
      <AddIcon />
      {name}
    </StyledAddButton>
  );
};

export default AddButton;
