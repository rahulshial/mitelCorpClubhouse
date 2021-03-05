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
    },
    typography: {
        h1: { // individual room title, 
            fontSize: "36px",
            fontFamily: "Quicksand",
            fontWeight: "700",
        },
        h2: { // hallway room title
            fontSize: "30px",
            fontFamily: "Quicksand",
            fontWeight: "700"
        },
        body1: { // names
            fontSize: "16px",
            fontFamily: "Quicksand",
            fontWeight: "500"
        },
        button: {
            fontSize: "24px",
            fontFamily: "Quicksand",
            fontWeight: "600"
        }
    }
});