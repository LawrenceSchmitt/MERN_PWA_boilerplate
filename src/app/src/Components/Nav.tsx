import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export interface NavProps {}

const Wrapper = styled.div`
  height: 10vh;
  width: 100%;
`;

const Menu = styled.nav`
  height: 100%;
  width: 20%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Link = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
`;

const Nav: React.SFC<NavProps> = () => {
  return (
    <Wrapper style={{ backgroundColor: "#CDCDCD" }}>
      <Menu>
        <Link>
          <NavLink to="/">Home</NavLink>
        </Link>
        <Link>
          <NavLink exact activeStyle={{ fontSize: "1.1em" }} to="/popups">
            PopUps
          </NavLink>
        </Link>
      </Menu>
    </Wrapper>
  );
};

export default Nav;
