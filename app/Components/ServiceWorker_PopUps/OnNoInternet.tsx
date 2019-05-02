import * as React from "react";

import PopUp from "../PopUp";

const OnNoInternet = () => {
  return (
    <PopUp
      text="You are not connected to the internet, App is running in offline mode"
      duration={10}
    />
  );
};

export default OnNoInternet;
