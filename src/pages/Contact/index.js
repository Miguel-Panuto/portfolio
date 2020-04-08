import React, { useState } from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import './styles.css';

export default function Contact() {
  const [iconSize, setIconSize] = useState(document.body.clientWidth <= 500 ? 30:50);
  window.onresize = () => {
      setIconSize(document.body.clientWidth <= 500 ? 30:50);
  }
  return (
    <div id="contact" className="page">
      <div className="contact-container">
        <div className="title">
          <h2>Contact</h2>
        </div>
        <div className="social-container">
          <a href="https://www.linkedin.com/in/miguel-panuto-b7108b182/">
            <div className="social-item">
              <FiLinkedin size={iconSize} />
              <span>Miguel Panuto</span>
            </div>
          </a>
          <a href="https://github.com/Miguel-Panuto">
            <div className="social-item">
              <FiGithub size={iconSize} />
              <span>Miguel-Panuto</span>
            </div>
          </a>
          <div className="social-item">
            <FiMail size={iconSize} />
            <input type="email" id="email" value="miguel.panuto@gmail.com" disabled/>
          </div>
        </div>
      </div>
    </div>
  );
}
