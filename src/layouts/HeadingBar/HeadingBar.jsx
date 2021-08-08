import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import theme from "../../themes/themes";
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
    backgroundColor: theme.headingBar.primary.main,
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
    color: theme.colorLetter.primary.main,
  },
})(Container);

const StyledTypography = withStyles({
  root: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.8em",
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
          <StyledTypography>{before}</StyledTypography>
          <StyledNavigate></StyledNavigate>
          <StyledTypography>{after}</StyledTypography>
        </StyledContainerContent>
      </StyledContainer>
    </>
  );
};

export default HeadingBar;
