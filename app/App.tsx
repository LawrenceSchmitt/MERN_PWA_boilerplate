import * as React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Home from "./Pages/Home";
import Test from "./Pages/Test";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
