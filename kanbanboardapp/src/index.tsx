import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Reset />
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </>
);
