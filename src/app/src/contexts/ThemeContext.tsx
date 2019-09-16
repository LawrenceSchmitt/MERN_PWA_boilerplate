import * as React from "react";

import Themes from "../UI/Theme/Theme";

export const ThemeContext = React.createContext({
  Theme: 0,
  Styles: Themes[0],
  updateTheme: (newTheme: number) => {}
});
export interface ThemeContextProviderProps {}

const ThemeContextProvider: React.SFC<ThemeContextProviderProps> = props => {
  const [Theme, setTheme] = React.useState(0);

  const updateTheme = (newTheme: number) => {
    if (Themes[newTheme]) {
      setTheme(newTheme);
    }
  };
  return (
    <ThemeContext.Provider
      value={{ Styles: Themes[Theme], updateTheme: updateTheme, Theme: Theme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
