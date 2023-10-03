import React from "react";


const Resume = () => {

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>

        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>San Martin de Porres - University</h3>
              <p className="info">
              Bachelor's Degree, Computer & System Engineer <span>&bull;</span>
                <em className="date">March 2022</em>
              </p>
              <p>Graduated with First Class Honours</p>
              <img className="bachellor" alt="my_bachellor" src="https://github.com/Maucross/mauricio_resume/blob/main/public/images/my_bachellor.png?raw=true" />         
             
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work Experience</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div>
            <h3>Aynitech</h3>
            <p className="info">
            Vulnerability Analyst
              <span>&bull;</span> <em className="date">Feb 2022 - Present</em>
            </p>
            <p>
            - Analyse and testing of web vulnerabilities, dockers, cloud instances.
            - Review of patching assets and cloud instances.
            - Use of database to generate reports.
            - Development and sending of automated reports to owners with
            vulnerable assets.
            - Communication, negotiation, and resolution of questions with clients 
            </p>
            <img className="bachellor" alt="my_bachellor" src="https://github.com/Maucross/mauricio_resume/blob/main/public/images/aynitech_team.jpeg?raw=true" />
          </div>

          <div>
            <h3>Sanna</h3>
            <p className="info">
            IT Assistant
              <span>&bull;</span> <em className="date">Aug 2020 - Feb 2022</em>
            </p>
            <p>Guide users on the operation of technological systems, installation and update of hardware, software and security patches.User maintenance, Active Directory privileges for medical and management users. Helpdesk service to users within the clinic for resolution of problems.</p>
            <img className="bachellor" alt="my_bachellor" src="https://github.com/Maucross/mauricio_resume/blob/main/public/images/sanna_team.jpeg?raw=true" />
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {/* <p>My Programming Language Proficiency and Team Work</p> */}

          <div className="bars">
            <ul className="skills">
              <li>
                <span style={ {width:'100%'} } className="bar-expand"><p className="spanDetails">I hacked machines on HacktheBox, TryHackMe at advanced level.</p></span>
                <em>Hacking</em>
                
              </li>
              <li>
              <span style={ {width:'85%'}} className="bar-expand"><p className="spanDetails">Dashboards, Macros, advanced formulas.</p></span>
                <em>Excel</em>
              </li>
              <li>
                <span style={ {width:'70%'} } className="bar-expand"><p className="spanDetails">CI / CD best practices.</p></span>
                <em>GitHub</em>
              </li>
              <li>
                <span style={ {width:'99%'} } className="bar-expand"><p className="spanDetails">Using ReactJS, frameworksm, html & css.</p></span>
                <em>Web Programming</em>
              </li>
              <li>
                <span style={ {width: '95%'} } className="bar-expand"><p className="spanDetails">Cybersecurity concepts, OWASP top 10 vulnerabilities and Cloud.</p></span>
                <em>Vulnerability Analyst</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
