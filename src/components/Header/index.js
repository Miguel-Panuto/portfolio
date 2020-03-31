import React, { useState } from 'react';

import { Link, animateScroll } from 'react-scroll';

import logo from '../../assets/Logo.svg';

import './styles.css';



export default function Header() {
  const [isMobile, setIsMobile] = useState(document.body.clientWidth <= 500);
  const [iconSize, setIconSize] = useState(document.body.clientWidth <= 500 ? 50:100);
  const defaultButtons = () => {
    const previousSelected = document.getElementsByClassName('element selected')[0];
    if (previousSelected)
      previousSelected.className = 'element'
  }
  const borderBottomHandler = (route) => {
    defaultButtons();
    document.getElementById(route + '-nav').className = 'element selected';
  }

  window.onscroll = () => {
    if (isMobile) {
      return
    }
    const screenPos = window.scrollY / document.body.clientHeight * 100;
    if (screenPos >= 15 && screenPos < 35) {
      borderBottomHandler('about');
    } else if (screenPos >= 35 && screenPos < 55) {
      borderBottomHandler('skills');
    } else if (screenPos >= 55) {
      borderBottomHandler('contact');
    } else {
      defaultButtons();
    }
  }

  const RenderHeader = () => {
    if (!isMobile) {
      return (
        <>
          <ListItem route="about" name="Sobre" />
          <ListItem route="skills" name="Habilidades" />
          <ListItem route="contact" name="Contato" />
        </>
      )
    }
    return <></>;
  }

  window.onresize = () => {
    if (document.body.clientWidth <= 500) {
      setIsMobile(true);
      setIconSize(50);
    } else {
      setIsMobile(false);
      setIconSize(100);
    }
  }
  const ListItem = props => {
    const className = "element";
    return (
      <li>
        <Link to={props.route} smooth={true} duration={1000}>
          <div
            className={className}
            id={props.route + '-nav'}
            onClick={() => borderBottomHandler(props.route)}>
            {props.name}
          </div>
        </Link>
      </li>
    )
  }

  return (
    <header>
      <div className="logo" onClick={() => { animateScroll.scrollToTop(); defaultButtons(); }}>
        <img src={logo} alt="Logo" width={iconSize} />
      </div>
      <nav>
        <ul>
          <RenderHeader />
        </ul>
      </nav>
    </header>
  );
}