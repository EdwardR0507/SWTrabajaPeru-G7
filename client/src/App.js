import "./App.css";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import theme from "./themes/themes";
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
      {/*Poner aquí la vista con la que están trabajando para probar,
        cuando esté lista y van a hacer commit, 
        dejan este espacio vacío para poner las rutas*/
        <ManageServices/>
        }
    </MuiThemeProvider>
  );
}

export default App;
