import React from 'react';

import GlobalStyle from './global-styles';

import Header from './components/Header';

import Apresentation from './pages/Apresentation';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Apresentation/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}
