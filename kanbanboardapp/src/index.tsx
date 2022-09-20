import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { Reset } from "styled-reset";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Reset />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
