import React from "react";

import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import { LayoutWrapper } from "./Layout.styles";
import UserItem from "../userItem";

function Layout({ members, eventsHandler, events }) {
  const usersElements = members.map(user => (
    <UserItem
      user={user}
      key={user.id}
      saveEvent={eventsHandler}
      events={events}
    />
  ));

  return (
    <LayoutWrapper>
      <Header />
      <Content>{usersElements}</Content>
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;
