import React from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../themes/themes";
import Button from "@material-ui/core/Button";

const StyledPrimaryButton = withStyles({
  root: {
    background: theme.palette.primary.main,
    boxShadow:
      "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "28px",
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    textTransform: "uppercase",
    height: "48px",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
})(Button);

const PrimaryButton = ({ name }) => {
  return <StyledPrimaryButton fullWidth>{name}</StyledPrimaryButton>;
};

export default PrimaryButton;
