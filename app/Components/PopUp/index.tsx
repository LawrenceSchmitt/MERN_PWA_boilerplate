import * as React from "react";

import styled from "styled-components";

export interface PopUpProps {
  text: string;
  duration: number;
  background?: string;
  color?: string;
}

const PopUp: React.SFC<PopUpProps> = props => {
  const PopUpDiv = styled.div`
    width: 100%;
    position: absolute;
    text-align: center;
    padding: 2em 0;
    background: ${props.background ? props.background : "black"};
    color: ${props.color ? props.color : "white"};
  `;
  const [show, setShow] = React.useState(true);
  if (props.duration) {
    React.useEffect(() => {
      setTimeout(() => {
        setShow(false);
      }, props.duration * 1000);
    }, []);
  }
  return show ? <PopUpDiv className="popUp">{props.text}</PopUpDiv> : null;
};

export default PopUp;
