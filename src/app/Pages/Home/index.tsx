import * as React from "react";
import * as Loadable from "react-loadable";
import { Link } from "react-router-dom";

import LazyComponent from "../../Components/LazyComponent";

// subComponents
import Loading from "../../Components/Loading";

const LazyTestComponent = Loadable({
  loader: () => import("../../Components/LazyTestComponent"),
  loading: Loading
});

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
      standard popups
      <br />
      <button onClick={toggleLazy}>show LazyComponent</button>
      {show ? <LazyTestComponent /> : null}
    </div>
  );
};

export default Home;
