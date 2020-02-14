import React from "react";

import {
  ContentContainer,
  ResultsContainer,
  OrganizationAside,
  MembersSection
} from "./Content.styles";
import Box from "../box";
import Message from "../message";
import Spinner from "../spinner";

function Content({ children, msg, processing }) {
  const displayContent = () => {
    if (processing) {
      return <Spinner />;
    }

    if (msg) {
      return <Message msg={msg} />;
    }

    return (
      <ResultsContainer>
        <OrganizationAside />
        <MembersSection>{children}</MembersSection>
      </ResultsContainer>
    );
  };

  return (
    <ContentContainer>
      <Box>{displayContent()}</Box>
    </ContentContainer>
  );
}

export default Content;
