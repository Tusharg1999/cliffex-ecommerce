import ReactDOM from "react-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { appTheme, GlobalStyle } from "./lib/theme";
import { ApplicationRouter } from "./infrastructure/router";
import { store } from "./infrastructure/redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <ApplicationRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
