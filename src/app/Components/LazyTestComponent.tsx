import * as React from "react";

export interface LazyTestComponentProps {}

const Stars = require("./assets/large-starts.jpg");

const LazyTestComponent: React.SFC<LazyTestComponentProps> = () => {
  return (
    <div>
      <img src={Stars} alt="stars" width="100%" height="100%" />
    </div>
  );
};

export default LazyTestComponent;
