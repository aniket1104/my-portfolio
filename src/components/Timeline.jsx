import React from "react";

const Timeline = () => {
  return (
    <div className="container timelineWrapper" id="timeline">
      <div className="container-fluid">
        <div className="contact-heading d-flex py-4">
          <p className="number">04</p>
          <div className="shortLine"></div>
          <p className="title">My Journey</p>
          <div className="timeline-longLine"></div>
        </div>
        <div class="experience timeline-container" id="experience">
          <div class="container">
            <div class="timeline">
              {/* <div
                class="timeline-item right wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <div class="timeline-text">
                  <div class="timeline-date">2022</div>
                  <h2>Fidelity Investments</h2>
                  <h4>Intern</h4>
                  <p>Intern @Fidelity Investments</p>
                </div>
              </div> */}
              {/* <div
                class="timeline-item left wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <div class="timeline-text">
                  <div class="timeline-date">2022</div>
                  <h2>ETH India</h2>
                  <h4>Finalist</h4>
                  <p>Built supply chain management system .</p>
                </div>
              </div> */}
              {/* <div
                class="timeline-item right wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <div class="timeline-text">
                  <div class="timeline-date">2022</div>
                  <h2>UIA India Africa Hackathon</h2>
                  <h4>Finalist</h4>
                  <p>finalist in UIA India Africa Hackathon</p>
                </div>
              </div> */}
              <div
                class="timeline-item left wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <div class="timeline-text">
                  <div class="timeline-date">2022</div>
                  <h2>Smart India Hackathon</h2>
                  <h4>Winner(2021)</h4>
                  <p>under the PSID: VS932.</p>
                </div>
              </div>
              <div
                class="timeline-item right wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <div class="timeline-text">
                  <div class="timeline-date">2022</div>
                  <h2>Flipkart-grid 4.0</h2>
                  <h4>Finalist</h4>
                  <p>
                    A decaying NFT that proves ownership using smart contract.
                    Provide the purchasing history, warranty period, and other
                    item information.
                  </p>
                </div>
              </div>
              <div
                class="timeline-item left wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <div class="timeline-text">
                  <div class="timeline-date">2020</div>
                  <h2>Bangalore Institute of Technology</h2>
                  <h4>Bangalore, Karnataka</h4>
                  <p>
                    Started Engineering in Information Science & Engineering.
                  </p>
                </div>
              </div>
              <div
                class="timeline-item right wow slideInRight"
                data-wow-delay="0.1s"
              >
                <div class="timeline-text">
                  <div class="timeline-date">2019</div>
                  <h2>Emmanuel Mission Senior Secondary School</h2>
                  <h4>Kota, Rajasthan</h4>
                  <p>Completed Senior Secondary School.</p>
                </div>
              </div>
              <div
                class="timeline-item left wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <div class="timeline-text">
                  <div class="timeline-date">2017</div>
                  <h2>Jiya Lal Mittal D.A.V. Public School </h2>
                  <h4>Gurdaspur, Punjab</h4>
                  <p>Completed High School.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
