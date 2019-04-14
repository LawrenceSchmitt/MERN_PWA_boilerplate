import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalStyles } from "./Theme/GlobalStyles";
import App from "./App";

const element = document.getElementById("app");

const app = (
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>
);

ReactDOM.render(app, element);
