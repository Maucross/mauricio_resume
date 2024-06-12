import React, { useState }  from "react";
import Certificate from "./Certificate";
import {v4 as uuidv4} from 'uuid';

const Portfolio = () => {

  const [certificate, setCertificate] = useState(
    [
      {
        name: 'aws',
        title:'AWS Certified Cloud Practitioner',
        img:'https://github.com/Maucross/mauricio_resume/blob/main/public/images/certificates/aws_certified_cloud_practitioner.jpg?raw=true'
      },
      {
        name: 'britanico',
        title:'English Advance Certifications?',
        img: 'https://github.com/Maucross/mauricio_resume/blob/main/public/images/certificates/english_certificate.jpg?raw=true'
      },
      {
        name: 'isc2',
        title:'ISC2 Certified in Cibersecurity',
        img: 'https://github.com/Maucross/mauricio_resume/blob/main/public/images/certificates/ISC2_CC_certificate.jpg?raw=true'
      },
      {
        name: 'qualys',
        title:'Qualys VMDR Certification',
        img: 'https://github.com/Maucross/mauricio_resume/blob/main/public/images/certificates/qualys_VMDR_certificate.jpg?raw=true'
      },
      {
        name: 'scrum',
        title:'Scrum Fundamentals Certified',
        img: 'https://github.com/Maucross/mauricio_resume/blob/main/public/images/certificates/scrum_fundamentals_certified.jpg?raw=true'
      },
      {
        name:"introSQL",
        title:"SQL- Oracle Course Certificate",
        img:'https://github.com/Maucross/mauricio_resume/blob/main/public/images/certificates/intr_SQL_UNI.jpg?raw=true'
      },
      {
        name:"implementNIST",
        title:"Implement NIST Cybersecurity Framework",
        img:'https://github.com/Maucross/mauricio_resume/blob/main/public/images/certificates/Implement%20NIST%20Cybersecurity%20Framework.jpg?raw=true'
      },
      {
        name:"iso27001",
        title:"ISO 27001 Information Security Management",
        img:'https://github.com/Maucross/mauricio_resume/blob/main/public/images/certificates/ISO-27001-Information_Security_Management.jpg?raw=true'
      },
      {
        name:"iso27001-LA",
        title:"ISO 27001 Lead Auditor - 2022",
        img:'https://github.com/Maucross/mauricio_resume/blob/main/public/images/certificates/iso27001-lead-auditor-arizaca.jpg?raw=true'
      },
    ]
  );
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Certificates.</h1>
          {/* <p>Some of my most important certificates</p> */}
          <div className="certifications">
            {certificate.map((mycertificate) => {
              return(
                  <Certificate 
                  key={uuidv4()} 
                  name={mycertificate.name} 
                  title={mycertificate.title} 
                  img={mycertificate.img} 
                  />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
