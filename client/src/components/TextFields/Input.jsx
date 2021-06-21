import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const StyledInput = withStyles({
    root: {
    },
  })(TextField);

const Input = (props) => {
    return <StyledInput variant="filled" fullWidth label={props.label} type={props.type}/>;
};

export default Input;
