import React from 'react';

import logos from '../../assets/images/logos.png';

import './styles.css';

export default function About() {
  const start = new Date('2017');
  const toDay = new Date();
  return (
    <div id="about" className="page">
      <div className="about-container">
        <div className="title">
          <h2>Sobre</h2>
        </div>
        <p>
          Sou Miguel Coutinho Panuto, sou um desenvolvedor full stack.
        </p>
        <p>
          Minha carreira como programador começou a {toDay.getFullYear() - start.getFullYear()} anos,
          começando com a linguagem C, dois anos depois aprendi HTML e CSS, logo após Java, C#, JavaScript, etc.
        </p>
        <p>
          Banco de dados tenho experiência com MySQL e MongoDB.
        </p>
        <p>
          Atualmente minha linguagem favorita é o JavaScript. Trabalho com o Node.js no back end e React.js no front end,
          tenho certa experiência com desenvolvimento mobile também, com o React Native.
        </p>
        <div className="image-container" id="logos">
          <img src={logos} alt="React e node simbolos" />
        </div>
      </div>
    </div>
  );
}
