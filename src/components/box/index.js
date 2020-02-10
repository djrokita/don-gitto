import React from "react";

import { BoxContainer } from "./Box.styles";

function Box({ children }) {
  return <BoxContainer>{children}</BoxContainer>;
}

export default Box;
