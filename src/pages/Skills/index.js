import React from 'react';

import { Page, Container, Title } from '../../global-styles';
import { Ul } from './styles';

export default function Skills() {
  return (
    <Page id="skills">
      <Container>
        <Title className="title">
          <h2>Skills</h2>
        </Title>
        <Ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>React Native</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>C#</li>
          <li>Java</li>
          <li>C</li>
        </Ul>
      </Container>
    </Page>
  );
}
