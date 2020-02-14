import React from "react";

import { SpinnerContainer, SpinnerCircle } from "./Spinner.styles";

function Spinner({ small, reverse }) {
  return (
    <SpinnerContainer>
      <SpinnerCircle small={small} reverse={reverse} />
    </SpinnerContainer>
  );
}

export default Spinner;
