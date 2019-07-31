import * as React from "react";

// context
import { ThemeContext } from "../contexts";

// Theme
import Themes from "../../Theme/Theme";

export interface ThemeContextProviderProps {}

const ThemeContextProvider: React.SFC<ThemeContextProviderProps> = props => {
  const [Theme, setTheme] = React.useState(0);

  const updateTheme = (newTheme: number) => {
    if (Themes[newTheme]) {
      setTheme(Themes[newTheme]);
    }
  };
  const current = Themes[Theme];
  return (
    <ThemeContext.Provider
      value={{ Nav: current.Nav, updateTheme: updateTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
