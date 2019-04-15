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
  console.log("no internte");
};

register({
  onUpdate: onSWupdate,
  onSuccess: onSWsuccess,
  onNoInternet: onNoInternet,
});

// if ("serviceWorker" in navigator) {
//   // Use the window load event to keep the page load performant
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/service-worker.js");
//   });
// }

// // register serviceworker
// serviceworker.register({});
