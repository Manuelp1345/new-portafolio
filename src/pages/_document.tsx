import AppProvider from "@/components/AppProvider";
import { ThemeProvider } from "@emotion/react";
import { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../styles/theme";

export default function Document() {
  return (
    <Html lang="en">
      <title>Manuel Puente</title>
      <Head />
      <ThemeProvider theme={theme}>
        <AppProvider>
          <body>
            <Main />
            <NextScript />
          </body>
        </AppProvider>
      </ThemeProvider>
    </Html>
  );
}
