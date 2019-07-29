import * as React from "react";
import Loading from "./Loading";

export interface WithSuspenseProps {}

const WithSuspense: React.SFC<WithSuspenseProps> = props => {
  return (
    <React.Suspense fallback={<Loading />}>{props.children}</React.Suspense>
  );
};

export default WithSuspense;
