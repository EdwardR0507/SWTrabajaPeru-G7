import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const StyledNavigate = withStyles({
  root: {
    width: "20px",
    height: "20px",
    margin: "auto 10px",
  },
})(NavigateNextIcon);

const StyledContainer = withStyles({
  root: {
    backgroundColor: "#212121",
    width: "80%",
    height: "50px",
    padding: "15px",
    marginTop: "2em",
    marginLeft: "auto",
    marginRight: "auto",
  },
})(Container);

const StyledContainerContent = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    color: "#ffffff",
  },
})(Container);

const StyledTypography = withStyles({
  root: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    textTransform: "uppercase",
  },
})(Typography);

const HeadingBar = ({ before, after }) => {
  return (
    <>
      <StyledContainer>
        <StyledContainerContent>
          <StyledTypography>TRABAJADOR </StyledTypography>
          <StyledNavigate></StyledNavigate>
          <StyledTypography>MIS SERVICIOS </StyledTypography>
        </StyledContainerContent>
      </StyledContainer>
    </>
  );
};

export default HeadingBar;
