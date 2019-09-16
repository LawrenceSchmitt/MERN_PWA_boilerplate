import * as React from "react";
import styled from "styled-components";

export interface StandardPopUpsProps {}

// popups
const OnUpdate = React.lazy(() =>
  import("../../Components/ServiceWorker_PopUps/OnUpdate")
);
import OnSuccess from "../../Components/ServiceWorker_PopUps/OnSuccess";
import OnNoInternet from "../../Components/ServiceWorker_PopUps/OnNoInternet";

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Page = styled.div`
  height: 100%;
  width: 100%;
`;

const PopUpButton = styled.button`
  margin: 2em;
`;

const StandardPopUps: React.SFC<StandardPopUpsProps> = () => {
  const [current, setCurrent] = React.useState("");
  const handlepopUps = type => {
    switch (type) {
      case "Update":
        return (
          <React.Suspense fallback={<div>LOADING</div>}>
            <OnUpdate />
          </React.Suspense>
        );
      case "Success":
        return <OnSuccess />;
      case "NoInternet":
        return <OnNoInternet />;
      default:
        return null;
    }
  };
  const onClick = e => {
    e.preventDefault();
    setCurrent(e.target.id);
  };
  return (
    <Page>
      {handlepopUps(current)}
      <ButtonWrapper>
        <div>
          {["Success", "Update", "NoInternet"].map((type, i) => {
            return (
              <PopUpButton id={type} key={i} onClick={onClick}>
                {type}
              </PopUpButton>
            );
          })}
          <p style={{ textAlign: "center", width: "25vw" }}>
            you can edit the popUp component within the "Components" directory
            in the PopUp folder. The content and duration for the individual
            popUps can be edited within the "ServiceWorker_PopUps" directory in
            the "Components" folder
          </p>
        </div>
      </ButtonWrapper>
    </Page>
  );
};

export default StandardPopUps;
