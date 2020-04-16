import React from "react";

import { Page, Container, Title } from "../../global-styles";
import { ProjectsContainer } from "./styles";
import ProjectContainer from "./components/ProjectContainer";
import LandPage from "../../assets/images/LandingPage.png";

export default function Projects() {
  return (
    <Page id="projects">
      <Container>
        <Title className="title">
          <h2>Projects</h2>
        </Title>
        <ProjectsContainer>
          <ProjectContainer
            title="Landing Page #1"
            image={LandPage}
            link="https://miguel-panuto.github.io/landing-page/"
          />
        </ProjectsContainer>
      </Container>
    </Page>
  );
}
