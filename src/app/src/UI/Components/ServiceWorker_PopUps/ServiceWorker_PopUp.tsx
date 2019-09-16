import * as React from "react";
import styled from "styled-components";

import { useTransition, animated } from "react-spring";
import { ColorProperty } from "csstype";

import Theme from "../../Theme/SWTheme";

export interface ServiceWorker_PopUpProps {
  text: string;
  duration: number;
  backgroundColor?: ColorProperty;
  color?: ColorProperty;
}

interface WrapperProps {
  color: ColorProperty;
}

const Wrapper = styled.div`
  background-color: "transparent";
  color: ${(p: WrapperProps) => p.color || Theme.color};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  z-index: 999;
`;

interface ContentProps {
  backgroundColor: ColorProperty;
}

const Content = styled.div`
  padding: ${Theme.contentPadding};
  background-color: ${(p: ContentProps) =>
    p.backgroundColor || Theme.backgroundColor};
`;

interface CloseDivProps {
  backgroundColor: ColorProperty;
}

const CloseDiv = styled.div`
  width: 7.5%;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 60% 100%, 40% 100%, 0 50%);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 60% 100%, 40% 100%, 0 50%);
  transform: translateY(-20%);
  cursor: pointer;
  margin: 0 auto;
  font-size: 1.5em;
  background-color: ${(p: CloseDivProps) =>
    p.backgroundColor || Theme.backgroundColor};
`;

const ServiceWorker_PopUp: React.SFC<ServiceWorker_PopUpProps> = props => {
  const [show, setShow] = React.useState(true);

  const transitions = useTransition(show, null, {
    from: {
      transform: "rotateX(-90deg)"
    },
    enter: { transform: "rotateX(0deg)" },
    leave: { transform: "rotateX(-90deg)" }
  });
  if (props.duration) {
    setTimeout(() => {
      setShow(false);
    }, props.duration * 1000);
  }
  const handleClose = e => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <Wrapper color={props.color}>
      {transitions.map(transition => {
        return (
          transition.item && (
            <animated.div
              key={transition.key}
              style={{
                ...transition.props,
                transformOrigin: "top",
                width: "100%"
              }}
            >
              <Content backgroundColor={props.backgroundColor}>
                {props.text}
              </Content>
              <CloseDiv
                onClick={handleClose}
                backgroundColor={props.backgroundColor}
              >
                &times;
              </CloseDiv>
            </animated.div>
          )
        );
      })}
    </Wrapper>
  );
};

export default ServiceWorker_PopUp;
