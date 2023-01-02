import React from "react";
import ProfileImg from "../assets/img/profileImg.jpg";

const About = () => {
  return (
    <div className="container aboutWrapper" id="about">
      <div className="container-fluid">
        <div className="about-heading d-flex py-4">
          <p className="number">02</p>
          <div className="shortLine"></div>
          <p className="title">ABOUT ME</p>
          <div className="about-longLine"></div>
        </div>
        <div className="d-lg-flex d-block about-container">
          <div className="about-details">
            <p className="py-1">
              Hello! My name is <span>Aniket</span> and I am a web developer
              with skills in front-end and back-end development. I have
              experience in building and maintaining web applications. Prior to
              the commencement of my undergraduate career in 2020, I developed
              an interest in web development, which has since been my area of
              specialization.
            </p>
            <p className="py-1">
              I only recently learned about Web3 and Blockchain and thought it
              was amazing. I am now delving deeply into it. I also have a good
              problem solving skill. I am committed to creating high-quality,
              user-friendly websites and am always looking to learn and improve
              my skills.
            </p>
            <p className="py-1">
              Here are a few technologies I’ve been working with lately:
            </p>
            <div className="d-flex about-list py-1">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Material UI</li>
              </ul>
              <ul className="mx-5">
                <li>React.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="about-photo d-flex justify-content-center">
            <div className="photo">
              <div className="photo-container">
                <img
                  src={ProfileImg}
                  alt="me"
                  height="300px"
                  width="240px"
                  className="profileImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
