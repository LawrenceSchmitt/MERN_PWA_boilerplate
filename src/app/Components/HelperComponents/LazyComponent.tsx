import * as React from "react";
import Loading from "../Loading";

export interface LazyComponentProps {}

const LazyComponent: React.SFC<LazyComponentProps> = props => {
  return (
    <React.Suspense fallback={<Loading />}>{props.children}</React.Suspense>
  );
};

export default LazyComponent;
