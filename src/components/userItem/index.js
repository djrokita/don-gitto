import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

import {
  UserItemContainer,
  UserSection,
  EventSection,
  UserAvatarContainer,
  UserAvatar,
  UserContainer,
  UserName,
  UserType,
  EventsButton,
  EventData
} from "./UserItem.styles";
import { fetchEvents } from "../../api/actions";
import { dateFormat, eventTypeFormat } from "../../utils";

function UserItem({ user, saveEvent, events }) {
  const fetchEventsHandler = async user => {
    try {
      const eventsResponse = await fetchEvents(user);
      if (eventsResponse.length) {
        return saveEvent(user, eventsResponse[0]);
      }
      saveEvent(user, "no events");
    } catch ({ response: { statusText } }) {
      saveEvent(user, "no data available");
    }
  };

  const eventsHandler = user => {
    if (!events[user]) {
      fetchEventsHandler(user);
    }
  };

  const eventContent = event => {
    if (event === "no events" || event === "no data available") {
      return event;
    }
    return (
      <>
        <UserName>{dateFormat(event.created_at)}</UserName>
        <UserType>{eventTypeFormat(event.type)}</UserType>
      </>
    );
  };

  const eventItem = user => {
    const event = events[user];
    if (events[user]) {
      return <EventData>{eventContent(event)}</EventData>;
    }

    return (
      <EventsButton type="button" onClick={() => eventsHandler(user)}>
        <FontAwesomeIcon icon={faInfo} />
      </EventsButton>
    );
  };

  return (
    <UserItemContainer>
      <UserSection>
        <UserAvatarContainer>
          <UserAvatar src={user.avatar_url} alt="user avatar" />
        </UserAvatarContainer>
        <UserContainer>
          <UserName href={user.html_url} target="_blank">
            {user.login}
          </UserName>
          <UserType>{user.type}</UserType>
        </UserContainer>
      </UserSection>
      <EventSection>{eventItem(user.login)}</EventSection>
    </UserItemContainer>
  );
}

export default UserItem;
