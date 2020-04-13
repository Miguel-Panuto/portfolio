import React from 'react';

import { Page, Container, Title } from '../../global-styles';
import { ImageContainer } from './styles';
import logos from '../../assets/images/logos.png';


export default function About() {
  const start = new Date('2017');
  const toDay = new Date();
  return (
    <Page id="about">
      <Container className="about-container">
        <Title>
          <h2>About</h2>
        </Title>
        <p>
          My name is Miguel Panuto, I'm a Web Developer.
        </p>
        <p>
          I have more than {toDay.getFullYear() - start.getFullYear()} years in the programming world. 
          I started with C language, learning the basics concepts, with my evolution I started to 
          specialize, it was then that I decided to go with web development.
        </p>
        <p>
        My knowledge with JavaScript evolved, with him I learned Node.js, React.js and React Native. 
        But, that isn’t my limit, also I know database, my main is MySQL.
        </p>
        <p>
          I currently work with react.js and node.js
        </p>
        <ImageContainer id="logos">
          <img src={logos} alt="React and node symbols" />
        </ImageContainer>
      </Container>
    </Page>
  );
}
