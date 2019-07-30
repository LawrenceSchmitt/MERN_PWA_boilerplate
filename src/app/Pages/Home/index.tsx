import * as React from "react";
import { Link } from "react-router-dom";

import LazyComponent from "../../Components/HelperComponents/LazyComponent";

const LazytestComponent = React.lazy(() =>
  import("../../Components/LazyTestComponent")
);

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  const [show, setShow] = React.useState(false);
  const toggleLazy = e => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <div id="Home">
      <Link to="/popups">popups</Link> This is a page to check and edit the
      service-worker-popups
      <br />
      <button onClick={toggleLazy}>show LazyComponent</button>
      {show && (
        <LazyComponent>
          <LazytestComponent />
        </LazyComponent>
      )}
    </div>
  );
};

export default Home;
