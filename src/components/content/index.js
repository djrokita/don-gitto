import React from "react";

import { ContentContainer } from "./Content.styles";
import Box from "../box";

function Content({ children }) {
  return (
    <ContentContainer>
      <Box column color="red">
        {children}
      </Box>
    </ContentContainer>
  );
}

export default Content;
