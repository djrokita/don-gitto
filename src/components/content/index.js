import React from "react";

import { ContentContainer } from "./Content.styles";
import Box from "../box";
import UserItem from "../userItem";

function Content({ children }) {
  return (
    <ContentContainer>
      <Box column color="red">
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </Box>
    </ContentContainer>
  );
}

export default Content;
