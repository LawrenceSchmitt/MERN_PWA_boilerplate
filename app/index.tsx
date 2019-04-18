import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalStyles } from "./Theme/GlobalStyles";
import App from "./App";
import { SWRegistrationI, register } from "./serviceWorker";

const element = document.getElementById("app");

const app = (
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>
);

ReactDOM.render(app, element);

const onSWupdate = (registration: SWRegistrationI) => {
  console.log("updated");
  console.log(registration);
};

const onSWsuccess = (registration: SWRegistrationI) => {
  console.log("success");
  console.log(registration);
};

const onNoInternet = () => {
  console.log("no internet");
};

register({
  onUpdate: onSWupdate,
  onSuccess: onSWsuccess,
  onNoInternet: onNoInternet,
});
