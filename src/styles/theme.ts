import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#707070", // Gris Primario
    },
    secondary: {
      main: "#4E98A3", // Azul Suave
    },
    grey: {
      300: "#A0A0A0", // Gris Secundario
      500: "#404040", // Gris Oscuro
      100: "#D0D0D0", // Gris Claro
    },
  },
  transitions: {
    create: () => "all 0.3s ease-in-out",
  },
};

export const theme = createTheme(themeOptions);
