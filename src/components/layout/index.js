import React from "react";

import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import { LayoutContainer } from "./Layout.styles";

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
