import React, { useState }  from "react";
import Certificate from "./Certificate";
import {v4 as uuidv4} from 'uuid';

const Portfolio = () => {

  const [certificate, setCertificate] = useState(
    [
      {
        name: 'aws',
        title:'AWS Certified Cloud Practitioner',
        img:'https://sjc04pap002files.storage.live.com/y4mu0dY7SHDl2kRKpFr9aIQoDR-O-cDIzsTf3nE4Ur__yOIF1ijPSwbOVRctxR3XFpPnJO05tIweuAIDoRYJPHwPQKzu2T6dnibr8XpWYmT4rzPtm1at-Nlnq-ZpcbJiZJptBWox5GAi41LvHUk0aGj8c7YwuAj8vMXMaJ-XCpywze7x_bs5DqR47hjtr1nvYTyuXFil6xUXx4nuz1XwhjvpHjMBuTeJFeKikdt4Rk_9c4?encodeFailures=1&width=1076&height=839'
      },
      {
        name: 'britanico',
        title:'English Advance Certifications?',
        img: 'https://sjc04pap002files.storage.live.com/y4m90iRPGhRVK3XARZRRWcEzciogWM_g02Ciw56plOTacW3ib1yEOVIcz2jPC9g6GjDv_5i6JjuqzFNwpjkb_lrNCnh4uZRr2Y6R7vY_SVAPxofaZKL5EuEBlypdBHzE6ap4nAaWrKRXZcH362rxsykKGr2ZJ1l87cdOYGRHszdFp15_kmQ7nAz24txTm5nMIFHGniHKv4ifp5-tIAxy78U9ZtiB5QpYN2fYY5j-U0LnTE?encodeFailures=1&width=629&height=839'
      },
      {
        name: 'isc2',
        title:'ISC2 Certified in Cibersecurity',
        img: 'https://sjc04pap002files.storage.live.com/y4mUQyN1pew0QYEap20Psm1cbgGQWrF8BONxfgPGeH5GoAj6fgTbi5nG_rtVU8Mj59PssJJV5oT9-8QkIEAtj4v9ZVAiDV6vniiSNUp7Ul1GwwuTM67lUEjmkjeONPVzhzsY3pNIHOdDtASswhOMSLXaKVRs_yK0lVAltH7qXStx6ffxIfdD3f8qr56VDbQK1DiDouJ5-BxZHBq_oMt0mvvqJ-D-pPRiPcKqS9Ih-vr-10?encodeFailures=1&width=740&height=573'
      },
      {
        name: 'qualys',
        title:'Qualys VMDR Certification',
        img: 'https://sjc04pap002files.storage.live.com/y4m1D2Bqj7KGqpuFW8h6JPg8c_fcI0uVBc4AJTwPWGNqJSPLikctjYqyx4JFImRIfSLWu1J8RLA0Mp3MQGssad0bmYzBaxaLWaGclIUXdTKvqydPpekMLLbx4VHRTV73HNcmuFnI8VAF8MNXtOx4eYzGXnrqu7VfyaChJ8j8Nk_LAZQwHSm3I2BumQthhGsuwOH3sRT8cN0PLN99nctPPHNcSktw-Waws8NHAvQ70RDZTc?encodeFailures=1&width=1026&height=839'
      },
      {
        name: 'scrum',
        title:'Scrum Fundamentals Certified',
        img: 'https://sjc04pap002files.storage.live.com/y4mRo1JC70cgBhT_qYig07p5dD6VOHZaLhg1m0NW-VKyYqTZjxY5_Yz3x0VxDD74A8RcVj2AhkDN-3vmpzctbo3LzO8DsKPIfInmcB_a6_r3HqsHXGyog1xWcikNSNGhHVCz3VSgB0mI9qR-BFPcNuVDKmluGCL15xaOFkL8jEuNnCHZAme5RPp1Kz3U57SmJ98jnHMyG7g4Nnw4yXrZs4N9ifpXHiLNO1-sr6wSUC7zE4?encodeFailures=1&width=728&height=562'
      },
      {
        name:"introSQL",
        title:"SQL- Oracle Course Certificate",
        img:'https://sjc04pap002files.storage.live.com/y4mhCFVT0p3V_PkM_gX5svrWMtenCMA7iR5i188ZXYYUENve5DDWLK1l9kgOdeFHVKk9CQmnnBGscig8xjdMrglhgJdMgk9Bu_M6DcOutIX7aWrxKsz2-joZm7kH-UfIxfcZ6tpM_JSpFa8svuTVZPDbOH0wRP_aguiCaiY9TyDeu-Hl9-0Vz4lvxWN5ADbRnxTnZV2pmZIH5yuXZvgzafSb2dLGxY0beYW98WHodxTSTw?encodeFailures=1&width=1011&height=839'
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
