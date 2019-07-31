import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { GlobalStyles } from "./src/Theme/GlobalStyles";
import App from "./src/App";
import { register } from "./serviceWorker";

const element = document.getElementById("app");

const app =
  process.env.NODE_ENV === "production" ? (
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  ) : (
    <HashRouter>
      <GlobalStyles />
      <App />
    </HashRouter>
  );

ReactDOM.render(app, element);

const onSWupdate = () => {
  const event = new CustomEvent("serviceWorker", {
    detail: "updated"
  });
  window.dispatchEvent(event);
  console.info("service-worker updated");
};
const onSWsuccess = async () => {
  localStorage.setItem("serviceWorker", "success");
  const event = new CustomEvent("serviceWorker", {
    detail: "success"
  });
  await window.dispatchEvent(event);
  console.info("service-worker success");
};

register({
  onUpdate: onSWupdate,
  onSuccess: onSWsuccess
});
