import * as React from "react";

import PopUp from "./ServiceWorker_PopUp";

const OnNoInternet = () => {
  return (
    <PopUp
      text="You are not connected to the internet, App is running in offline mode."
      duration={15}
    />
  );
};

export default OnNoInternet;
