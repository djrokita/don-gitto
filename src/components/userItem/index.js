import React, { useState } from "react";

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

function UserItem({ user }) {
  const [event, setEvent] = useState();
  const [open, setOpen] = useState();

  const eventsHandler = user => {
    fetchEvents(user).then(([event]) => {
      if (event) {
        setEvent(event);
      } else {
        setEvent("no data");
      }
      setOpen(true);
    });
  };

  const eventContent = () =>
    event !== "no data" ? (
      <>
        <UserName>{dateFormat(event.created_at)}</UserName>
        <UserType>{eventTypeFormat(event.type)}</UserType>
      </>
    ) : (
      event
    );

  const eventItem = () =>
    open ? (
      <EventData>{eventContent()}</EventData>
    ) : (
      <EventsButton
        type="button"
        value="More..."
        onClick={() => eventsHandler(user.login)}
      />
    );

  return (
    <UserItemContainer>
      <UserSection>
        <UserAvatar src={user.avatar_url} alt="user avatar" />
        <UserName>{user.login}</UserName>
        <UserType>{user.type}</UserType>
      </UserSection>
      <EventSection>{eventItem()}</EventSection>
    </UserItemContainer>
  );
}

export default UserItem;
