import React from "react";
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">

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
          <ul className="copyright">
            <li>
              Made by{" "}
                MACROSS
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
          <Link to='home' spy={true} smooth={true} offset={10} duration={500}>
            <i className="icon-up-open"></i>
          </Link>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
