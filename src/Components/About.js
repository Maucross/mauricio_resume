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

          <p>👋 Hi, I'm Mauricio Arizaca, 👀 I'm interested in working around with everything of Software Engineer stuff, Security, Programming, Projects, Databases, etc.💪🏾 I'm looking to collaborate with a nice team and enhance my Cybersecurity knowledge.🛡️ Currently I'm studying for Cybersecurity, Hacking & ISO certifications.🧑🏽‍💻</p>
          
          
          <div className="row">
            <div className="columns">
              <h2>My Badges</h2>
              <a href="https://www.credly.com/badges/29a552fe-8ac3-4d0a-9fd0-3be18b1c3b5d/public_url">
                <img className="badge" src="https://github.com/Maucross/mauricio_resume/blob/main/public/images/badges/aws-certified-cloud-practitioner.png?raw=true" alt="aws-badge"/>
              </a>
              <a href="https://www.credly.com/badges/47f8550b-29f2-405f-8ab5-d8dc2783b317/public_url">
                <img className="badge" src="https://github.com/Maucross/mauricio_resume/blob/main/public/images/badges/certified-in-cybersecurity-cc.png?raw=true" alt="ic2-badge"/>
              </a>
            </div>
          </div>  
          <br></br>
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
                <a href='marizaca_cv-english.pdf' download className="button">
                  <i className="fa fa-download"></i>Download my Resume!📄
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
