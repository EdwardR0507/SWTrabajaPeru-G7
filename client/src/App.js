import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import theme from "./themes/themes";
import Home from "./pages/Home";
import SignIn from "./pages/login";
import SignUp from "./pages/register";
import EditProfile from "./pages/editProfile";
import ManageServices from "./pages/services";
import ServiceDetails from "./pages/serviceDetails";

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
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/editProfile" component={EditProfile} />
          <Route path="/manageservices" component={ManageServices} />
          <Route path="/servicedetails" component={ServiceDetails} />
          <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
