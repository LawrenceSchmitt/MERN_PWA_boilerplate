import * as React from "react";

import WithImages from "./WithImages";

export interface LazyTestComponentProps {}

const Stars = require("./assets/large-starts.jpg");

const LazyTestComponent: React.SFC<LazyTestComponentProps> = () => {
  return (
    <div>
      <WithImages images={[Stars]}>
        <img src={Stars} alt="stars" width="100%" height="100%" />
      </WithImages>
    </div>
  );
};

export default LazyTestComponent;
