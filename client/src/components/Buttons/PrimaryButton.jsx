import React from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../themes/themes";
import Button from "@material-ui/core/Button";

const StyledPrimaryButton = withStyles({
  root: {
    background: theme.palette.primary.main,
    boxShadow: theme.boxShadowButton.primary.main,
    borderRadius: "28px",
    color: theme.colorLetter.primary.main,
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

const PrimaryButton = ({ name, onClick }) => {
  return (
    <StyledPrimaryButton fullWidth onClick={onClick}>
      {name}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
