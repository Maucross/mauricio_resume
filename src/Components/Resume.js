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
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div>
            <h3>Aynitech</h3>
            <p className="info">
            Vulnerability Analyst
              <span>&bull;</span> <em className="date">Feb 2022 - Present</em>
            </p>
            <p>Analyze any kind of vulnerabilies in one of our big vendors like Expedia Group following the OWASP best practices.</p>
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
          <p>My Programming Language Proficiency and Team Work</p>

          <div className="bars">
            <ul className="skills">
              <li>
                <span style={ {width:'100%'} } className="bar-expand"></span>
                <em>ReactJs</em>
              </li>
              <li>
              <span style={ {width:'85%'}} className="bar-expand"></span>
                <em>Excel</em>
              </li>
              <li>
                <span style={ {width:'70%'} } className="bar-expand"></span>
                <em>Git</em>
              </li>
              <li>
                <span style={ {width:'99%'} } className="bar-expand"></span>
                <em>JavaScript</em>
              </li>
              <li>
                <span style={ {width: '95%'} } className="bar-expand"></span>
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
