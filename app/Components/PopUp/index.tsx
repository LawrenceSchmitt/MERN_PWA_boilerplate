import * as React from "react";

import styled from "styled-components";

export interface PopUpProps {
  text: string;
  duration: number;
  background?: string;
  color?: string;
}

const PopUp: React.SFC<PopUpProps> = props => {
  const PopUpContentDiv = styled.div`
    grid-column: 2;
    margin: 0 auto;
  `;

  const PopUpDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    position: absolute;
    text-align: center;
    padding: 2em 0;
    background: ${props.background ? props.background : "black"};
    color: ${props.color ? props.color : "white"};
  `;
  const PopUpCloseDiv = styled.div`
    cursor: pointer;
    float: right;
    justify-self: center;
    align-self: center;
  `;
  const [show, setShow] = React.useState(true);
  if (props.duration) {
    React.useEffect(() => {
      setTimeout(() => {
        setShow(false);
      }, props.duration * 1000);
    }, []);
  }
  return show ? (
    <PopUpDiv className="popUp">
      <PopUpContentDiv>{props.text}</PopUpContentDiv>
      <PopUpCloseDiv>&times;</PopUpCloseDiv>
    </PopUpDiv>
  ) : null;
};

export default PopUp;
