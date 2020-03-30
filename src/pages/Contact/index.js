import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import './styles.css';

export default function Contact() {
  return (
    <div id="contact" className="page">
      <div className="contact-container">
        <div className="title">
          <h2>Contato</h2>
        </div>
        <div className="social-container">
          <a href="https://www.linkedin.com/in/miguel-panuto-b7108b182/">
            <div className="social-item">
              <FiLinkedin size={50} />
              <span>Miguel Panuto</span>
            </div>
          </a>
          <a href="https://github.com/Miguel-Panuto">
            <div className="social-item">
              <FiGithub size={50} />
              <span>Miguel-Panuto</span>
            </div>
          </a>
          <div className="social-item">
            <FiMail size={50} />
            <input type="email" id="email" value="miguel.panuto@gmail.com" disabled/>
          </div>
        </div>
      </div>
    </div>
  );
}
