import React, { useState } from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { Page, Container, Title } from '../../global-styles';
import { ContainerContact, SocialItem } from './styles';

export default function Contact() {
  const [iconSize, setIconSize] = useState(document.body.clientWidth <= 500 ? 30:50);
  window.onresize = () => {
      setIconSize(document.body.clientWidth <= 500 ? 30:50);
  }
  return (
    <Page id="contact">
      <Container>
        <Title>
          <h2>Contact</h2>
        </Title>
        <ContainerContact>
          <a href="https://www.linkedin.com/in/miguel-panuto-b7108b182/">
            <SocialItem>
              <FiLinkedin size={iconSize} />
              <span>Miguel Panuto</span>
            </SocialItem>
          </a>
          <a href="https://github.com/Miguel-Panuto">
            <SocialItem>
              <FiGithub size={iconSize} />
              <span>Miguel-Panuto</span>
            </SocialItem>
          </a>
          <SocialItem>
            <FiMail size={iconSize} />
            <input type="email" id="email" value="miguel.panuto@gmail.com" disabled/>
          </SocialItem>
        </ContainerContact>
      </Container>
    </Page>
  );
}
