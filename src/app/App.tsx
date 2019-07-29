import * as React from "react";

import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";

import LazyComponent from "./Components/LazyComponent";

// contexts
import SWContextProvider from "./contexts/Providers/SWContextProvider";

// Pages
const Home = React.lazy(() => import("./Pages/Home"));
const StandardPopUps = React.lazy(() => import("./Pages/StandardPopUps"));

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
      <LazyComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/popups" component={StandardPopUps} />
        </Switch>
      </LazyComponent>
    </React.Fragment>
  );
};

export default App;
