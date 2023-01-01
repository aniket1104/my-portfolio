import React, { useState } from "react";
import items from "../assets/data/dataWork";

const Work = () => {
  // const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState({
    id: "recAGJfiU4CeaV0HL",
    order: 3,
    title: "Full Stack Web Developer",
    dates: "December 2015 - Present",
    duties: [
      "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
      "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
      "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
    ],
    company: "TOMMY",
  });

  console.log(items);

  return (
    <div className="container workWrapper" id="work">
      <div className="container-fluid">
        <div className="work-heading d-flex py-4">
          <p className="number">03</p>
          <div className="shortLine"></div>
          <p className="title">WORK</p>
          <div className="work-longLine"></div>
        </div>
        <div className="d-md-flex d-block work-container">
          <div className="btn-container d-flex flex-md-column flex-row pb-3">
            {items.map((item, index) => {
              return (
                <button
                  className="companyBtn btn"
                  key={item.id}
                  onClick={() => setValue(item)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <article className="desciption-container px-md-5">
            <h3 className="workHeading">
              {value.title || "Frontend Engineer"} @{" "}
              <span className="companyHeading">
                {value.company || "AIRBNB"}
              </span>
            </h3>
            <p className="date">{value.dates || "December 2015 - Present"}</p>
            <ul className="jobDetails">
              {value.duties.map((single) => {
                return <li>{single}</li>;
              })}
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Work;
