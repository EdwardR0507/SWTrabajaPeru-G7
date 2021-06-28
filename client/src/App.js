import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import theme from "./themes/themes";
import Home from "./pages/Home";
import SignIn from "./pages/login";
import SignUp from "./pages/registro";
import EditProfile from "./pages/editProfile";
import ManageServices from "./pages/services";
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
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
