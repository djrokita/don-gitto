import React from "react";

import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import { LayoutWrapper } from "./Layout.styles";

function Layout({ children, inputHandler, inputValue, submitHandler }) {
  return (
    <LayoutWrapper>
      <Header
        inputHandler={inputHandler}
        inputValue={inputValue}
        submitHandler={submitHandler}
      />
      <Content>{children}</Content>
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;
