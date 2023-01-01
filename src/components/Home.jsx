import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../assets/resume/resume.pdf";

const Home = () => {
  return (
    <div className="container homeWrapper" id="home">
      <div className="container-fluid">
        <div className="home-container">
          <h4 className="home-hello fw-normal">Hello, My name is</h4>
          {/* <h1 className="home-name">ANIKET KUMAR SINGH.</h1> */}
          <h1 className="home-name">
            <Typewriter
              className="home-name"
              onInit={(typewriter) => {
                typewriter.typeString("ANIKET KUMAR SINGH.").start();
              }}
            />
          </h1>

          <p className="home-about">
            I'm a third year undergrad @{" "}
            <span>Bangalore Institute of Technology</span>. I'm an experienced
            Frontend web developer. I'm a blockchain enthusiast. Also, I have a
            good problem solving skill.
          </p>
          <div className="my-5">
            <button className="btn resume">
              <a
                target="_blank"
                href={Resume}
                rel="noreferrer"
                className="resumePDF"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
