import React from "react";

import LayoutContainer from "./containers/LayoutContainer";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutContainer />
    </ThemeProvider>
  );
}

export default App;
