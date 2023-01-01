import React from "react";

const Contact = () => {
  return (
    <div className="container contactWrapper" id="contact">
      <div className="container-fluid">
        <div className="contact-heading d-flex py-4">
          <p className="number">05</p>
          <div className="shortLine"></div>
          <p className="title">CONTACT ME</p>
          <div className="contact-longLine"></div>
        </div>
        <div className="contact-container">
          <h1 className="contactHeading text-center fw-bold py-4">
            Get in Touch with Me
          </h1>
          <p className="contactContent py-2 text-center">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <div className="btnWrapper d-flex justify-content-center my-5">
            <button className="btn sayHi">
              <a href="mailto:aniketkumar2001@gmail.com" className="sayHiLink">
                Say Hi
              </a>
            </button>
          </div>
        </div>
        <div className="project-details pt-4">
          <p className="text-center pt-5">Designed and Built by Aniket</p>
          <div className="d-flex justify-content-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github githubIcon my-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
