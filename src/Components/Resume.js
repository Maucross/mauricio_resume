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
            Vulnerability Analyst - Expedia Group
              <span>&bull;</span> <em className="date">Feb 2022 - <b>Present</b></em>
            </p>
            <p>
              <ul>
                <li>&bull; Analysis and testing of web vulnerabilities, dockers, cloud 
              instances. Once those issues were mitigated I deliver the 
              information to the rest of the team and close tickets.</li>
                <li>&bull; Review of patching assets and cloud instances, using 
              cybersecurity tools to manage these information.</li>
                <li>&bull; Use of database to generate reports, where we gather to send 
              to the owners each by weekly communications.</li>
                <li>&bull; Development and sending of automated reports to owners 
              with vulnerable assets.</li>
                <li>&bull; Communication, negotiation, and resolution of questions with 
              clients from different countries.</li>
              </ul>
            </p>
            <img className="bachellor" alt="my_bachellor" src="https://github.com/Maucross/mauricio_resume/blob/main/public/images/aynitech_team.jpeg?raw=true" />
          </div>

          <div>
            <h3>Sanna</h3>
            <p className="info">
            IT Assistant
              <span>&bull;</span> <em className="date">Aug 2020 - Feb 2022</em>
            </p>
            <p>
              <ul>
                <li>&bull; Guidance to users on the operation of technological systems.</li>
                <li>&bull; Installation and update of hardware, software and security patches.</li>
                <li>&bull; User maintenance, Active Directory privileges for medical and management users.</li>
                <li>&bull; Helpdesk service to users within the clinic for resolution of IT problems</li>
              </ul>
            </p>
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
                <span style={ {width:'100%'} } className="bar-expand"><p className="spanDetails">Effective communication - problem solving - critical thinking.</p></span>
                <em>Soft Skills</em>
                
              </li>
              <li>
              <span style={ {width:'85%'}} className="bar-expand"><p className="spanDetails">Dashboards, Macros, advanced formulas.</p></span>
                <em>Excel</em>
              </li>
              <li>
                <span style={ {width:'75%'} } className="bar-expand"><p className="spanDetails">Python for web, automation processes and reports.</p></span>
                <em>Python</em>
              </li>
              <li>
                <span style={ {width:'99%'} } className="bar-expand"><p className="spanDetails">Using ReactJS, frameworks, html & css.</p></span>
                <em>Web Programming</em>
              </li>
              <li>
                <span style={ {width: '95%'} } className="bar-expand"><p className="spanDetails">Using scanning tools, knowledge of OWASP TOP 10 and testing vulns.</p></span>
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
