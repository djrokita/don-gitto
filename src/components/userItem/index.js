import React from "react";

import {
  UserItemContainer,
  UserSection,
  EventSection,
  UserAvatar,
  UserName,
  UserType,
  EventsButton
} from "./UserItem.styles";
import { fetchEvents } from "../../api/actions";

function UserItem({ user }) {
  const eventsHandler = user => {
    console.log("fetch_events");
    fetchEvents(user);
  };

  return (
    <UserItemContainer>
      <UserSection>
        <UserAvatar src={user.avatar_url} alt="user avatar" />
        <UserName>{user.login}</UserName>
        <UserType>{user.type}</UserType>
      </UserSection>
      <EventSection>
        <EventsButton
          type="button"
          value="More..."
          onClick={() => eventsHandler(user.login)}
        />
      </EventSection>
    </UserItemContainer>
  );
}

export default UserItem;
