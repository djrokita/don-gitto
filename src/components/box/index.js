import React from "react";

import { BoxContainer } from "./Box.styles";

function Box({ children, column }) {
  return <BoxContainer column={column}>{children}</BoxContainer>;
}

export default Box;
