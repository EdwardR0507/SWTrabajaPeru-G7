import React from 'react';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const StyledFormError = withStyles({
    root: {
        color: "#FF4D4D",
    }
})(Typography)

const FormError = (props) => {
    return(
        <StyledFormError>
            {props.condition && props.content}
        </StyledFormError>
    )
}

export default FormError