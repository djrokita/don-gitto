import React from "react";

import {
  ContentContainer,
  ResultsContainer,
  OrganizationAside,
  MembersSection
} from "./Content.styles";
import Box from "../box";
import Message from "../message";

function Content({ children, msg }) {
  const displayContent = () =>
    msg ? (
      <Message msg={msg} />
    ) : (
      <ResultsContainer>
        <OrganizationAside />
        <MembersSection>{children}</MembersSection>
      </ResultsContainer>
    );

  return (
    <ContentContainer>
      <Box>{displayContent()}</Box>
    </ContentContainer>
  );
}

export default Content;
