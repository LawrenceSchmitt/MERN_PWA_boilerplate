import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// context
import { ThemeContext } from "../contexts/contexts";

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

const ChangeThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

const Nav: React.SFC<NavProps> = () => {
  const Theme = React.useContext(ThemeContext);

  const changeTheme = e => {
    e.preventDefault();
    const newTheme = Theme.Theme === 0 ? 1 : 0;
    Theme.updateTheme(newTheme);
  };
  console.log(Theme);
  return (
    <Wrapper
      style={{
        backgroundColor: Theme.Styles.Nav.backgroundColor
      }}
    >
      <Menu>
        <Link style={{ color: Theme.Styles.Nav.color }}>
          <NavLink to="/">Home</NavLink>
        </Link>
        <Link style={{ color: Theme.Styles.Nav.color }}>
          <NavLink exact activeStyle={{ fontSize: "1.1em" }} to="/popups">
            PopUps
          </NavLink>
        </Link>
        <ChangeThemeButton
          style={{ color: Theme.Styles.Nav.color }}
          onClick={changeTheme}
        >
          Change Theme
        </ChangeThemeButton>
      </Menu>
    </Wrapper>
  );
};

export default Nav;
