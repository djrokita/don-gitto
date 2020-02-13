import React from "react";

import {
  UserItemContainer,
  UserSection,
  EventSection,
  UserAvatar,
  UserName,
  UserType,
  EventsButton,
  EventData
} from "./UserItem.styles";
import { fetchEvents } from "../../api/actions";
import { dateFormat, eventTypeFormat } from "../../utils";

function UserItem({ user, saveEvent, events }) {
  const eventsHandler = user => {
    if (!events[user]) {
      fetchEvents(user).then(([event]) => {
        if (event) {
          saveEvent(user, event);
        } else {
          saveEvent(user, "no data");
        }
      });
    }
  };

  const eventContent = event =>
    event !== "no data" ? (
      <>
        <UserName>{dateFormat(event.created_at)}</UserName>
        <UserType>{eventTypeFormat(event.type)}</UserType>
      </>
    ) : (
      event
    );

  const eventItem = user => {
    const event = events[user];
    if (events[user]) {
      return <EventData>{eventContent(event)}</EventData>;
    }

    return (
      <EventsButton
        type="button"
        value="More..."
        onClick={() => eventsHandler(user)}
      />
    );
  };

  return (
    <UserItemContainer>
      <UserSection>
        <UserAvatar src={user.avatar_url} alt="user avatar" />
        <UserName>{user.login}</UserName>
        <UserType>{user.type}</UserType>
      </UserSection>
      <EventSection>{eventItem(user.login)}</EventSection>
    </UserItemContainer>
  );
}

export default UserItem;
