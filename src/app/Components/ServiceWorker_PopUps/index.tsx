import * as React from "react";

import styled from "styled-components";

// context
import { SWContext } from "../../contexts/contexts";

import LazyComponent from "../LazyComponent";

const OnSWupdate = React.lazy(() => import("./OnUpdate"));
const OnSWsuccess = React.lazy(() => import("./OnSuccess"));
const OnNoInternet = React.lazy(() => import("./OnNoInternet"));

const types = {
  updated: <OnSWupdate />,
  success: <OnSWsuccess />,
  offline: <OnNoInternet />
};

export interface SWpopUpsProps {}

const SWpopUps: React.SFC<SWpopUpsProps> = () => {
  const context = React.useContext(SWContext);
  const handleSWPopUps = () => {
    for (let type in context) {
      if (context[type]) {
        return types[type];
      }
    }
    return null;
  };
  const SWPopUpWrapper = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
  `;
  return (
    <SWPopUpWrapper>
      <LazyComponent>{handleSWPopUps()}</LazyComponent>
    </SWPopUpWrapper>
  );
};

export default SWpopUps;
