import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// assets
const ReactLogo = require("./assets/react.svg");

// subComponents
import LazyComponent from "../../Components/HelperComponents/LazyComponent";

const TestComponent = React.lazy(() =>
  import("../../Components/TestComponent")
);

export interface HomeProps {}

const Logo = styled.img`
  width: 10vw;
  height: 10vh;
  margin: 0 auto;
`;

const Home: React.SFC<HomeProps> = () => {
  const [show, setShow] = React.useState(false);
  const toggleLazy = e => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <div id="Home">
      <Logo src={ReactLogo} alt="React Logo" />
      <Link to="/popups">popups</Link> This is a page to check and edit the
      service-worker-popups
      <br />
      <button onClick={toggleLazy}>show LazyComponent</button>
      {show && (
        <LazyComponent>
          <TestComponent />
        </LazyComponent>
      )}
    </div>
  );
};

export default Home;
