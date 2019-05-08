import * as React from "react";

import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";

import LoadedComponent from "./Components/LoadedComponent";

// contexts
import SWContextProvider from "./contexts/Providers/SWContextProvider";

// Pages
import Home from "./Pages/Home";
import Test from "./Pages/Test";

// components
const SWpopUps = LoadedComponent(() =>
  import("./Components/ServiceWorker_PopUps")
);
export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  const toReturn = () => {
    return process.env.NODE_ENV === "production" ? (
      <BrowserRouter>
        <SWContextProvider>
          <SWpopUps />
        </SWContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </BrowserRouter>
    ) : (
      <HashRouter>
        <SWContextProvider>
          <SWpopUps />
        </SWContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </HashRouter>
    );
  };
  return toReturn();
};

export default App;
