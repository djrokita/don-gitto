import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
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
              <PaginationButton onClick={paginationHandler}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </PaginationButton>
              <PaginationButton onClick={() => paginationHandler("next")}>
                <FontAwesomeIcon icon={faChevronRight} />
              </PaginationButton>
            </PaginationContainer>
          </MembersSection>
        </ResultsContainer>
      );
    }
  };

  return (
    <ContentContainer>
      <Box>{displayContent()}</Box>
    </ContentContainer>
  );
}

export default Content;
