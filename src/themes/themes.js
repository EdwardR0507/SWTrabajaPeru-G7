import { createMuiTheme } from "@material-ui/core";

const themes = createMuiTheme({
  palette: {
    primary: {
      main: "#6200EE",
    },
    secondary: {
      main: "#000000",
    },
  },

  boxShadowButton: {
    primary: {
      main: "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
    },
  },

  typography: {
    fontFamily: "Roboto",
  },

  headingBar: {
    primary: {
      main: "#212121",
    },
  },

  colorLetter: {
    primary: {
      main: "#FFFFFF",
    },
  },

  cardLetter: {
    primary: {
      main: "#000000 60 %",
    },
  },

  serviceButton: {
    primary: {
      main: "#00000012",
    },
    secondary: {
      main: "#414040",
    },
  },
});

export default themes;
