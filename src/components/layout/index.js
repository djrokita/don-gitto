import React from "react";

import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import { LayoutWrapper } from "./Layout.styles";
import UserItem from "../userItem";

function Layout({
  children,
  inputHandler,
  inputValue,
  submitHandler,
  members
}) {
  const usersElements = members.map(user => (
    <UserItem user={user} key={user.id} />
  ));

  return (
    <LayoutWrapper>
      <Header
        inputHandler={inputHandler}
        inputValue={inputValue}
        submitHandler={submitHandler}
      />
      <Content members={members}>{usersElements}</Content>
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;
