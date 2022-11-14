import React,{useState, useEffect} from "react";

import Typewriter from 'typewriter-effect';
import {Link} from 'react-scroll'


const Header = () => {
  const [show, setShow] = useState(false);
 
  const transitionNavBar = () => {
    if (window.scrollY >= 700) {
      setShow(true);
    } else { 
      setShow(false);
    }
  };
  window.addEventListener("scroll",transitionNavBar);


  return (
    <header id="home">
      <nav className={show ? 'navi__black' : 'navi'} id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              <Link to='home' spy={true} smooth={true} offset={10} duration={500}>
              Home
              </Link>
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
            <Link to='about' spy={true} smooth={true} offset={10} duration={500}>
              About
            </Link>
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
            <Link to='resume' spy={true} smooth={true} offset={10} duration={500}>
              Resume
            </Link>
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
            <Link to='work' spy={true} smooth={true} offset={-90} duration={500}>
              Works
            </Link>
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
            <Link to='testimonials' spy={true} smooth={true} offset={10} duration={500}>
              Testimonials
            </Link>
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
            <Link to='contact' spy={true} smooth={true} offset={10} duration={500}>
              Contact
            </Link>
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            {/* <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter> */}
            <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(`Hello I'm Mauricio Arizaca Soto`)
                    .pauseFor(2500)
                    .start();
                }}
              />
          </h1>
          <h3>
            Based in Perú. <span>System Engineer - Vulnerability Analyst - Programmer</span>. I eat, sleep and breathe Technology.
          </h3>
          <hr />
          <ul className="social">
            <li key='youtube'>
              <a href='https://www.youtube.com/channel/UC7yFoGcFurFeq8cDs9aEnDA'>
                <i className='fa fa-youtube'></i>
              </a>
            </li>
            <li key='facebook'>
              <a href='https://www.facebook.com/marizaca/'>
                <i className='fa fa-facebook'></i>
              </a>
            </li>
            <li key='linkedin'>
              <a href='https://www.linkedin.com/in/mauricio-sebastian-leoncio-arizaca-soto-47b5a2172/'>
                <i className='fa fa-linkedin'></i>
              </a>
            </li>
            <li key='instagram'>
              <a href='https://www.instagram.com/mauricio_arizaca/'>
                <i className='fa fa-instagram'></i>
              </a>
            </li>
            <li key='github'>
              <a href='https://github.com/Maucross'>
                <i className='fa fa-github'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          
          <Link to='about' spy={true} smooth={true} offset={10} duration={500}>
          <i className="icon-down-circle">
          </i>
          </Link>
          
        </a>
      </p>
    </header>
  );
};

export default Header;
