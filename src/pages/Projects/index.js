import React from "react";

import { Page, Container, Title } from "../../global-styles";
import { ProjectsContainer } from "./styles";
import ProjectContainer from "./components/ProjectContainer";
import LandPage from "../../assets/images/LandingPage.png";
import LandPage2 from "../../assets/images/LandingPage2.png";
import GameLandingPage from "../../assets/images/GameLandingPage.png";

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
          <ProjectContainer
            title="Landing Page #2"
            image={LandPage2}
            link="https://miguel-panuto.github.io/landing-page-example-2/"
          />
          <ProjectContainer
            title="Game Page"
            image={GameLandingPage}
            link="https://miguel-panuto.github.io/game-landing-page-example/"
          />
        </ProjectsContainer>
      </Container>
    </Page>
  );
}
