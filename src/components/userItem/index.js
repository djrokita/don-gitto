import React from "react";

import {
  UserItemContainer,
  UserSection,
  EventSection,
  UserAvatar,
  UserName,
  UserType
} from "./UserItem.styles";

function UserItem() {
  return (
    <UserItemContainer>
      <UserSection>
        <UserAvatar />
        <UserName>user name</UserName>
        <UserType>user</UserType>
      </UserSection>
      <EventSection>eventbutton</EventSection>
    </UserItemContainer>
  );
}

export default UserItem;
