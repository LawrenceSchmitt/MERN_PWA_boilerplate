import * as React from "react";
import * as Loadable from "react-loadable";

import Loading from "./Loading";

const LazyComponent = component => {
  return Loadable({
    loader: () => import(component),
    loading: Loading
  });
};

export default LazyComponent;
