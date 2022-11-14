import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3m300pp', 'template_kqg0kr6',e.target, 'XmbPhp7_D1AQo06cs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">📫 How to reach me, you can send me an email : </p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          {/* <form onSubmit={submitForm}> */}
          <form onSubmit={sendEmail}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  
                  size="35"
                  id="contactName"
                  name="name"
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  
                  size="35"
                  id="contactEmail"
                  name="email"
                  
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  
                  size="35"
                  id="contactSubject"
                  name="subject"
                  
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="5"
                 
                  id="contactMessage"
                  name="message"
                ></textarea>
              </div>

              <div>
                {/* <button onClick={submitForm} type="submit" className="submit"> */}
                <input type="submit" className='submit' value= 'Submit'/>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error </div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              Mauricio Arizaca Soto
              <br />
              mau_arso98@hotmail.com - mauricioarizaca@gmail.com
              <br />
              <br />
              Av El Sauce 395 - Surquillo<br />
              Perú, Lima zip: 5038
              <br />
              <span>+51 940-165-950</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
