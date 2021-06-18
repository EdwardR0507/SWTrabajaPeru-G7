import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main:'#6200EE'
        },
        secondary: {
            main: '#000000 87%'
        }
    },
    typography: {
        fontFamily: 'Roboto',
    }
});

export default theme;