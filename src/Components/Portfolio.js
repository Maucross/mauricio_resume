import React, { useState }  from "react";
import Certificate from "./Certificate";
import {v4 as uuidv4} from 'uuid';

const Portfolio = () => {

  const [certificate, setCertificate] = useState(
    [
      {
        name: 'aws',
        title:'AWS Certified Cloud Practitioner',
        img:'https://sjc04pap002files.storage.live.com/y4myttxdPL9CO2lEI1PPurfUh9IO8z5w8hUighZtiJyoGdg0AJWeAT0lvr79vDyhVWL9uOjYjHA10Vz8aFrT9uRcSwyMHzG6I8JwO7_RVi8k8U2qpYLIdahRqX1TqH3lJp8ifRz0fOqCw98XQXiejzF8q1pljQaEizBqrt4NWyS7T_lN_fk7Tz6n1uzC6Xler4szlrTawPJ0_W9UshNYWKuMoG-HoIjrbGLB5fmIrcRalE?encodeFailures=1&width=1076&height=839'
      },
      {
        name: 'britanico',
        title:'English Advance Certifications?',
        img: 'https://sjc04pap002files.storage.live.com/y4mECjlE526OWw3tR7UaR0S5aqowAZqgDIGg7E4UUK7MuX08VkIn2SELtTGco8mRZhLPtx8SXX0ZcTGrjHI4noTPPDedcUd3Vg8Ti_iLgd2r_y6D9AKok4thh6tBzbsugGSIkn2a7gF41spE9QI0fqniHpyplqo-KX0RIY85eMy46ZEdY3OlQ9V5taLTEG_f3id4XOFes5E6M3nHWdRj-6w5TAzfHGhhPL2BN3HwqCstjs?encodeFailures=1&width=629&height=839'
      },
      {
        name: 'isc2',
        title:'ISC2 Certified in Cibersecurity',
        img: 'https://sjc04pap002files.storage.live.com/y4mAAZRjzgyqAfUjtDSD6G3TVOxafoWsl_6r6zbq6gEU5cOGSjpv5IKH7QFqrIOuyN1IjqW44zGgvWqKSjNY2G5X-cMkO7ZLPOsYIJjTYDHQOeJ5wdWMdeDTc7LVWa2XSbYXx5cY-oHZxh5pcyTzBa4tXHao0_TRXnjpUveF8yoLeyIFlvNzQkjwqWpB-Y3bfMZwA4DABvm5VeT_fZrpCDr2Xi_6Hnb6whatHe0MNKqlkc?encodeFailures=1&width=740&height=573'
      },
      {
        name: 'qualys',
        title:'Qualys VMDR Certification',
        img: 'https://sjc04pap002files.storage.live.com/y4mFiuYk_Ic6T7npqa2pcMZ01pv_JWxXoHUeY_UpynpTcBmHSnMqjKjVyVOv2ltoU4izH88zBftj0aBKsIMl0GkcbnH208vscOl2k0HpMp70V1Fd1_vb8e9oofGz_oD8jE3zlXvCdCW2oK2tfSCdw-Z-UOzf5ni4ETQU9bhjP6dRUvoC5_qnbueRPwI6xq9JQbYjR1h4D2IovuPME_VcREtz3zjiqKm3vaPS-BKjVxqfL0?encodeFailures=1&width=1026&height=839'
      },
      {
        name: 'scrum',
        title:'Scrum Fundamentals Certified',
        img: 'https://sjc04pap002files.storage.live.com/y4mN78OImT4mBq0rG-YcumfCs_KAcUz63CQRaQaHu4U5nUxsJFwUISq_p15j9JBWFYP-ffyhMOk0BQboR9ydTZrP2ixxOqKJ7Ih2xarA-lVtaTPyuqC-W3Uil8yeGf_o0HJFDWvHjetM-4MhwU-dMFxrdeKfYJ2colshv7H65GNgLUxahZ4i5bxIz1GLYtmG42PPIWi_U7rvL0FRrFKod5XaU0gzVUM1zTVe9hiJqPbxuQ?encodeFailures=1&width=728&height=562'
      },
      {
        name:"introSQL",
        title:"SQL- Oracle Course Certificate",
        img:'https://sjc04pap002files.storage.live.com/y4mJcemAqaG-SrbU1liOet0i2HM5Tt_wZ8d6gn9WFHciZDzrPmVo3UmRCjf372FuKhRM9v3wipkNywGtdBSBld9IQutdfRvJmfxhF50VuZUP49xuvZFLM9vQG2ArnSwZhFTn0ZbKr4pcPbHntXY0hYI_-OTCsJ90cW61kPr6fx_PpiOFfV4HI2pTApnMTzwqUEFZwgaDv9o-t_c5r14i0etHIVT9LRpijRuUaIPO6p5eJY?encodeFailures=1&width=1011&height=839'
      },
      {
        name:"implementNIST",
        title:"Implement NIST Cybersecurity Framework",
        img:'https://sjc04pap002files.storage.live.com/y4m5f2J2yKBJwWomU0xQSqBKK26fySCSfzd5iECB70MhaqYzlp25i1nhO0UaEgdDkWOkBDafrNQYj7O7tSDJM0CwydQaKlSldtAz4JwI4Mbylr-YL5Xx477mIG_YD3UWO5ejclG3KoBfkniNajdJGaD6XW3okedVMye-8VcsiAknoldChr2AIeI8CXP77X5Bklo8q4AX5sdF5L1CpO9SHXntv7oWlXdLqULVlngwXkR3cE?encodeFailures=1&width=1186&height=839'
      },
      {
        name:"iso27001",
        title:"ISO 27001 Information Security Management",
        img:'https://sjc04pap002files.storage.live.com/y4mZKaZHYyMWROP4fUhJyQuRRAlloSjAAA5yIES9a-c1Oob0B1yO4tl5-gFh02h-Wj5eSY7fygvr1pK0f9Pip46U1r0cTPWzW93EHlkUglcpccFU-MLVY9BDS_nij0SnEEtPR-JnWRxi5o5MZNffuKILwDCG3NzDnJNd05kG6-jyVnS2j5VG2-chg-ZVujFocbnPkjelR_-b68iYjkzGXLcl99exwEpv0EAIvqThrWJJYQ?encodeFailures=1&width=1180&height=833'
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
