import React from "react";

import AppContextProvider from "./contexts/AppContextProvider";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContextProvider />
    </ThemeProvider>
  );
}

export default App;
