import "./App.css";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import theme from "./themes/themes";
import ManageServices from "./pages/services/index";
import SignUp from "./pages/registro/index";
const GlobalStyles = withStyles({
  "@global": {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: theme.typography.fontFamily,
    },
  },
})(() => null);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
    </MuiThemeProvider>
  );
}

export default App;
