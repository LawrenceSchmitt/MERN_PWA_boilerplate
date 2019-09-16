import * as React from "react";

import WithImages from "./HelperComponents/WithImages";

export interface TestComponentProps {}

const Stars = require("./assets/large-starts.jpg");

const TestComponent: React.SFC<TestComponentProps> = () => {
  return (
    <div>
      <WithImages images={[Stars]}>
        <img src={Stars} alt="stars" width="100%" height="100%" />
      </WithImages>
    </div>
  );
};

export default TestComponent;
