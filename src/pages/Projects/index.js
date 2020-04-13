import React from 'react';

import { Page, Container, Title } from '../../global-styles';
import { ProjectsContainer, ProjectContainer, ImageContainer } from './styles';
import LandPage from '../../assets/images/LandingPage.png'

export default function Projects() {
  return (
    <Page id="projects">
      <Container>
        <Title className="title">
          <h2>Projects</h2>
        </Title>
        <ProjectsContainer>
          <ProjectContainer>
            <span>Landing Page</span>
            <a 
              href="https://miguel-panuto.github.io/landing-page/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ImageContainer src={LandPage}/>
            </a>
          </ProjectContainer>
        </ProjectsContainer>
      </Container>
    </Page>
  );
}
