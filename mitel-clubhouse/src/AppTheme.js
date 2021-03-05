import { createMuiTheme } from '@material-ui/core/styles';

export const appTheme = createMuiTheme({
    palette: {
        primary: { //green
            main: "#3FD77E",
        },
        secondary: { //blue
            main: "#1E92DF"
        },
        background: {
            default: "rgba(30, 146, 223, 0.3)",
        }
    }
});