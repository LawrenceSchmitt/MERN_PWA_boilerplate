import * as React from "react";

export const SWContext = React.createContext({});

export const ThemeContext = React.createContext({
  Nav: {},
  updateTheme: (newTheme: number) => {}
});
