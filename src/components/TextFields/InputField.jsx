import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const StyledInputField = withStyles({
  root: {
    borderRadius: "4px 4px 0px 0px",
    width: "550px",
  },
})(TextField);

const InputField = (props) => {
  return <StyledInputField variant="filled" label={props.label} />;
};

export default InputField;
