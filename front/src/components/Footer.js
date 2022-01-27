import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 20px 0;
  font-size: 15px;
  color: white;
  text-align: center;
  line-height: 1.5;
  font-size: 10px;
`;

const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
  a {
    color: white;
  }
  a:hover {
    opacity: 0.5;
  }
`;

const Corp = styled.div`
  font-size: 15px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterList>
        <li>
          <a
            href="https://github.com/codestates/BEB_01_final1.git"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="40px" />
          </a>
        </li>
      </FooterList>
      <br />
      <Corp> ©2022 E-Town : U-Pick </Corp>
      <div></div>
    </FooterContainer>
  );
};

export default Footer;
