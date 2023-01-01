import React from "react";

const Project = () => {
  return (
    <div className="container projectWrapper" id="project">
      <div className="container-fluid">
        <div className="about-heading d-flex py-4">
          <p className="number">03</p>
          <div className="shortLine"></div>
          <p className="title">PROJECTS THAT I HAVE BUILT </p>
          <div className="project-longLine"></div>
        </div>
        <div className="project-container d-flex my-3">
          <div className=" project-outerLine mx-2 p-4">
            <h4 className="text-center ">
              Scholarship Portal for Student and Funding Agencies
            </h4>
            <p className="py-4">
              A scholarship portal to for Smart India Hackathon, to promote One
              Nation - One funding platform for funding agencies and applicants.
              Major focus was to create a gateway for various funding agencies
              to submit their problem statement and funding limit. Every HEIs
              and individual register and access all the schemes and apply in
              the relevant ones.
            </p>
            <div className="d-flex justify-content-end mx-2">
              <a
                href="https://github.com/SkaleDevs/Seeker-Web-App-v1.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github githubIcon my-2 "></i>
              </a>
            </div>
          </div>
          <div className=" project-outerLine mx-2 p-4">
            <h4 className="text-center ">
              eCommerce warranty system using NFTs
            </h4>
            <p className="py-4">
              An e-commerce website for the Flipkart GRID Hackathon, a decaying
              NFT that proves ownership using smart contract. Non Fungible Token
              is used for converting physical warranty into digital. Provide the
              purchasing history, warranty period, and other item information.
              Tech Stack used is React, Mateial UI, Metamask, Node, Express,
              Sendgrid, IPFS Storage (Pinata Gateway), MongoDB.
            </p>
            <div className="d-flex justify-content-end mx-2 my-5">
              <a
                href="https://github.com/aniket1104/Flipkart-grid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github githubIcon my-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-container d-flex my-3">
          <div className=" project-outerLine mx-2 p-4">
            <h4 className="text-center ">Code-ite (Online Compiler)</h4>
            <p className="py-4">
              An online coding platform which can compile code in 4 languages
              i.e. C, C++, Java, JavaScript. A whiteboard made using canvas
              included for brainstroming and code explaination. Many users can
              collaborate on the same code and work together. Made using React,
              Socket.io, Express and SQL.
            </p>
            <div className="d-flex justify-content-end mx-2 my-5">
              <a
                href="https://codeite.haxworld.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa-solid fa-link my-2 mx-2"
                  style={{ color: "#D9D7D7" }}
                ></i>
              </a>
              <a
                href="https://github.com/aniket1104/code-ite"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github githubIcon my-2"></i>
              </a>
            </div>
          </div>
          <div className=" project-outerLine mx-2 p-4">
            <h4 className="text-center ">College Placement Cell Website</h4>
            <p className="py-4">
              A college website for the students and the placement coordinators
              of the college to access and update their profile where
              coordinators can notify and allot the students about their
              placement and internships. Students get a personalized message on
              their dashboard if they are selected fot the opportunity.
              Connected Discord bots with the website to send notifications.
            </p>
            <div className="d-flex justify-content-end mx-2 my-3">
              <a
                href="https://github.com/aniket1104/bit-placement-cell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github githubIcon my-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
