import React from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../themes/themes";
import Button from "@material-ui/core/Button";

const StyledAddButton = withStyles({
  root: {
    background: theme.palette.primary.main,
    width: "8em",
    height: "2.3em",
    borderRadius: "4px",
    color: theme.colorLetter.primary.main,
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
  return <StyledAddButton>{name}</StyledAddButton>;
};

export default AddButton;
