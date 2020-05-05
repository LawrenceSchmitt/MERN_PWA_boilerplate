import * as React from 'react';

// subComponents
import LazyComponent from '../Components/HelperComponents/LazyComponent';

export interface HelloWorldProps {}

const HelloWorld: React.SFC<HelloWorldProps> = () => (
  <div id="UI" style={{ width: '100%', height: '100%' }}>
    <LazyComponent>
      <div>
        <h1>Hello World</h1>
      </div>
    </LazyComponent>
  </div>
);

export default HelloWorld;
