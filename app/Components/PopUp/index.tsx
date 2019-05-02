import * as React from "react";

import styled from "styled-components";

import { useTransition, animated } from "react-spring";

export interface PopUpProps {
  text: string;
  duration: number;
  background?: string;
  color?: string;
}

//@ts-ignore
const PopUp: React.SFC<PopUpProps> = props => {
  // state
  const [show, setShow] = React.useState(true);
  // animation
  const transitions = useTransition(show, null, {
    from: {
      transform: "rotateX(-180deg)"
    },
    enter: { transform: "rotateX(0deg)" },
    leave: { transform: "rotateX(-180deg)" }
  });
  // style

  const PopUpDiv = styled.div`
    width: 100%;
    position: absolute;
    text-align: center;
    background-color: transparent;
    color: ${props.color ? props.color : "white"};
  `;
  const PopUpCloseDiv = styled.div`
    width: 7.5%;
    -webkit-clip-path: polygon(
      0 0,
      100% 0,
      100% 50%,
      60% 100%,
      40% 100%,
      0 50%
    );
    clip-path: polygon(0 0, 100% 0, 100% 50%, 60% 100%, 40% 100%, 0 50%);
    transform: translateY(-20%);
    background: ${props.background ? props.background : "#01D3FF"};
    cursor: pointer;
    margin: 0 auto;
    font-size: 1.5em;
  `;

  const PopUpContentDiv = styled.div`
    width: 100%;
    background: ${props.background ? props.background : "#01D3FF"};
    margin: 0 auto;
    padding: 2em 1.5em;
  `;

  if (props.duration) {
    React.useEffect(() => {
      setTimeout(() => {
        setShow(false);
      }, props.duration * 1000);
    }, []);
  }
  const handleClose = (e: any) => {
    e.preventDefault();
    setShow(false);
  };
  return transitions.map(
    (transition: any) =>
      transition.item && (
        <animated.div key={transition.key} style={transition.props}>
          <PopUpDiv className="popUp">
            <PopUpContentDiv>{props.text}</PopUpContentDiv>
            <PopUpCloseDiv onClick={handleClose}>&times;</PopUpCloseDiv>
          </PopUpDiv>
        </animated.div>
      )
  );
};

export default PopUp;
