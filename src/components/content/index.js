import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCity,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import {
  ContentContainer,
  ResultsContainer,
  OrganizationAside,
  OrganizationAvatar,
  OrganizationItemsContainer,
  OrganizationName,
  OrganizationDesc,
  OrganizationItem,
  OrganizationLink,
  MembersSection,
  PaginationContainer,
  PaginationButton,
  PaginationNumber
} from "./Content.styles";
import Box from "../box";
import Message from "../message";
import Spinner from "../spinner";
import { AppContext } from "../../contexts/AppContextProvider";

function Content({ children }) {
  const {
    error,
    processing,
    page,
    paginationHandler,
    organization
  } = useContext(AppContext);

  const displayContent = () => {
    if (processing) {
      return <Spinner />;
    }

    if (error) {
      return <Message msg={error} />;
    }

    if (children.length) {
      const {
        avatar_url,
        login,
        name,
        description,
        location,
        html_url,
        email
      } = organization;
      return (
        <ResultsContainer>
          <OrganizationAside>
            <OrganizationAvatar src={avatar_url} alt={`${login} avatar`} />
            <OrganizationName>{name}</OrganizationName>
            <OrganizationDesc>{description}</OrganizationDesc>
            {location && (
              <OrganizationItemsContainer>
                <FontAwesomeIcon icon={faCity} />
                <OrganizationItem>{location}</OrganizationItem>
              </OrganizationItemsContainer>
            )}
            <OrganizationLink href={html_url} target="_blank">
              {html_url}
            </OrganizationLink>
            {email && (
              <OrganizationItemsContainer>
                <FontAwesomeIcon icon={faEnvelope} />
                <OrganizationItem>{email}</OrganizationItem>
              </OrganizationItemsContainer>
            )}
          </OrganizationAside>
          <MembersSection>
            {children}
            <PaginationContainer>
              <PaginationButton
                onClick={paginationHandler}
                disabled={page <= 1}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </PaginationButton>
              <PaginationButton
                onClick={() => paginationHandler("next")}
                disabled={children.length < 15}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </PaginationButton>
              <PaginationNumber>Page {page}</PaginationNumber>
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
