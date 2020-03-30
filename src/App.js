import React from 'react';

import './App.css';

import Header from './components/Header';

import Apresentation from './pages/Apresentation';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Apresentation/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}
