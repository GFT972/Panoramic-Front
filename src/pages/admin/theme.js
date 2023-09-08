import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#282b30", // Couleur principale
    },
    secondary: {
      main: "#282b30", // Couleur secondaire
    },
    text: {
      primary: "#ffffff", // Couleur de police principale
      secondary: "#000000", // Couleur de police secondaire
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

export default theme;