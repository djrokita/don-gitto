import React from "react";

import { MessageContainer } from "./Message.styles";

function Message({ msg }) {
  return <MessageContainer>{msg}</MessageContainer>;
}

export default Message;
