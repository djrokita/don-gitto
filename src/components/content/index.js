import React from "react";

import {
  ContentContainer,
  ResultsContainer,
  OrganizationAside,
  MembersSection,
  PaginationContainer,
  PaginationButton
} from "./Content.styles";
import Box from "../box";
import Message from "../message";
import Spinner from "../spinner";

function Content({ children, msg, processing, page, paginationHandler }) {
  const displayContent = () => {
    if (processing) {
      return <Spinner />;
    }

    if (msg) {
      return <Message msg={msg} />;
    }

    if (children.length) {
      return (
        <ResultsContainer>
          <OrganizationAside />
          <MembersSection>
            {children}
            <PaginationContainer>
              <PaginationButton />
              <PaginationButton />
            </PaginationContainer>
          </MembersSection>
        </ResultsContainer>
      );
    }
  };

  return (
    <ContentContainer>
      <Box>
        <PaginationContainer>
          <PaginationButton onClick={paginationHandler} />
          <PaginationButton onClick={() => paginationHandler("next")} />
        </PaginationContainer>
        {displayContent()}
      </Box>
    </ContentContainer>
  );
}

export default Content;
