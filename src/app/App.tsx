import * as React from "react";

import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";

import LoadedComponent from "./Components/LoadedComponent";

// contexts
import SWContextProvider from "./contexts/Providers/SWContextProvider";

// Pages
const Home = React.lazy(() => import("./Pages/Home"));
const StandardPopUps = React.lazy(() => import("./Pages/StandardPopUps"));

// components
const SWpopUps = LoadedComponent(() =>
  import("./Components/ServiceWorker_PopUps")
);
export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <React.Fragment>
      <SWContextProvider>
        <SWpopUps />
      </SWContextProvider>
      <React.Suspense fallback={<div>LOADING</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/popups" component={StandardPopUps} />
        </Switch>
      </React.Suspense>
    </React.Fragment>
  );
};

export default App;
