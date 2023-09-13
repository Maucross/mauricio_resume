import React from "react";

const About = () => {
 

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src="https://github.com/Maucross/mauricio_resume/blob/main/public/images/profilepic.jpeg?raw=true"
            alt="Mauricio's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>👋 Hi, I'm Mauricio aka Maucross, 👀 I'm interest in working around with everything of Software Engineer stuff, Security, Programming, Projects, Databases, etc.,🌱 I’m currently learning React, Design Web and PWAs, 💞️ I'm looking to collaborate with a nice team and enhance my Cybersecurity knowledge.🛡️</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Mauricio Arizaca Soto</span>
                <br />
                <span>
                  Av El Sauce 395 - Surquillo
                  <br />
                  Lima, Perú, zip : 5038
                </span>
                <br />
                <span>+51 940165950</span>
                <br />
                <span>mau_arso98@hotmail.com - mauricioarizaca@gmail.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                {/* Primero tengo que cambiar miCV a uno mas moderno y luego convertirlo en PDF y asi subirlo a mi carpeta public */}
                <a href='marizaca_cv.docx' download className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
