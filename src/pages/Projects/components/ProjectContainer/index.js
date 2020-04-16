import React from "react";

import { Container, ImageContainer } from "./styles";

const ProjectContainer = (props) => (
  <Container>
    <span>{props.title}</span>
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ImageContainer src={props.image} />
    </a>
  </Container>
);

export default ProjectContainer;
