import ReactDOM from "react-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import { appTheme, GlobalStyle } from "./lib/theme";
import { ApplicationRouter } from "./infrastructure/router";
import Header from "./components/header";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <Header />
      <ApplicationRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
