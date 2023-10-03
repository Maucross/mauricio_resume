import React from "react";

const Testimonials = () => {

  return (
    <section id="certificates">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">
            <li>
              <blockquote>
                <p>Sonny is absolutely excellent, his depth of knowledge & his mentorship really meant a lot to us... I would definitely recommend</p>
                <cite>Boss 1</cite>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p>Learning with Sonny has been AWESOME, he makes learning React so easy and approachable, you'll finally feel like you know what's going on!</p>
                <cite>Boss 2</cite>
              </blockquote>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
