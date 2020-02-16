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
  members,
  eventsHandler,
  events,
  error,
  processing,
  paginationHandler,
  page,
  organization
}) {
  const usersElements = members.map((user, index) => (
    <UserItem
      user={user}
      key={user.id}
      saveEvent={eventsHandler}
      events={events}
    />
  ));

  return (
    <LayoutWrapper>
      <Header
        inputHandler={inputHandler}
        inputValue={inputValue}
        submitHandler={submitHandler}
        processing={processing}
      />
      <Content
        members={members}
        msg={error}
        processing={processing}
        paginationHandler={paginationHandler}
        page={page}
        organization={organization}
      >
        {usersElements}
      </Content>
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;
