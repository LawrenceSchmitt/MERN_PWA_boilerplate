import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// assets
const ReactLogo = require('./assets/react.svg');

// subComponents
import LazyComponent from '../../Components/HelperComponents/LazyComponent';

// Views
const HelloWorld = React.lazy(() => import('../../Views/HelloWorld'));

export interface HomeProps {}

const Logo = styled.img`
  width: 10vw;
  height: 10vh;
  margin: 0 auto;
`;

const Home: React.SFC<HomeProps> = () => (
  <div id="UI" style={{ width: '100%', height: '100%' }}>
    <LazyComponent>
      <HelloWorld />
    </LazyComponent>
  </div>
);

export default Home;
