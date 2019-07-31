import * as React from "react";

// types
import Themes from "../Theme/Theme";

export const SWContext = React.createContext({});

export const ThemeContext = React.createContext({
  Theme: 0,
  Styles: Themes[0],
  updateTheme: (newTheme: number) => {}
});
