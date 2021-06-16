import './App.css';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import theme from './themes/themes';

const GlobalStyles = withStyles({
  "@global": {
    "html, body": {
      margin: 0,
      padding: 0
    },
    ".App": {
      fontFamily: theme.typography.fontFamily,
    }
  }
})(() => null);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}

export default App;
