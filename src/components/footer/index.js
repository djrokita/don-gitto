import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  FooterContainer,
  FooterSection,
  FooterLink,
  FooterItem,
  FooterIconWrapper,
  FooterLogo
} from "./Footer.styles";
import Box from "../box";
import logo from "../../logo.svg";

function Footer() {
  return (
    <FooterContainer>
      <Box>
        <FooterSection>
          <FooterLink href="https://github.com/djrokita" target="_blank">
            krzych.pierzchala
          </FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterItem>Łódź, 2020</FooterItem>
          <FooterItem>
            Made with
            <FooterIconWrapper>
              <FontAwesomeIcon icon={faHeart} />
            </FooterIconWrapper>
            in
            <FooterLogo src={logo} />
          </FooterItem>
        </FooterSection>
      </Box>
    </FooterContainer>
  );
}

export default Footer;
