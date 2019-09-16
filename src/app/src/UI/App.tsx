import * as React from "react";

import { Switch, Route } from "react-router-dom";

import LazyComponent from "./Components/HelperComponents/LazyComponent";

// contexts
import SWContextProvider from "../contexts/SWContext";
import ThemeContextProvider from "../contexts/ThemeContext";

// subComponents
import Nav from "./Components/Nav";

// Pages
const UI = React.lazy(() => import("./Pages/UI"));
const StandardPopUps = React.lazy(() => import("./Pages/Admin"));

// components
const SWpopUps = React.lazy(() => import("./Components/ServiceWorker_PopUps"));
export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <React.Fragment>
      <SWContextProvider>
        <LazyComponent>
          <SWpopUps />
        </LazyComponent>
      </SWContextProvider>
      <ThemeContextProvider>
        <Nav />
        <LazyComponent>
          <Switch>
            <Route exact path="/" component={UI} />
            <Route exact path="/popups" component={StandardPopUps} />
          </Switch>
        </LazyComponent>
      </ThemeContextProvider>
    </React.Fragment>
  );
};

export default App;
