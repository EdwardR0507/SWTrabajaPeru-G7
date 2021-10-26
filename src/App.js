import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import AppRouter from "./routers/AppRouter";
import theme from "./themes/themes";
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
      <AppRouter />
    </MuiThemeProvider>
  );
}

export default App;
