import React from "react";

const Socials = () => {
  return (
    <div className=" socialsWrapper position-fixed">
      <div className="plainUpperDiv"></div>
      <div className="socials d-flex justify-content-start flex-column">
        <a
          href="https://github.com/aniket1104"
          target="_blank"
          rel="noopener noreferrer"
          className="socialsLink"
        >
          <i
            className="fa-brands fa-github my-3 text-end"
            style={{ color: "#D9D7D7" }}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/aniket1104/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialsLink"
        >
          <i
            className="fa-brands fa-linkedin-in my-3 text-end"
            style={{ color: "#D9D7D7" }}
          ></i>
        </a>
        <a
          href="https://www.instagram.com/aniket.2001_/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialsLink"
        >
          <i
            className="fa-brands fa-instagram my-3 text-end"
            style={{ color: "#D9D7D7" }}
          ></i>
        </a>
        <a
          href="https://twitter.com/aniketwtf"
          target="_blank"
          rel="noopener noreferrer"
          className="socialsLink"
        >
          <i
            className="fa-brands fa-twitter my-3 text-end"
            style={{ color: "#D9D7D7" }}
          ></i>
        </a>
      </div>
      <div className="plainLowerDiv"></div>
    </div>
  );
};

export default Socials;
