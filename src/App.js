import React from "react";
import Navbar from "./components/Navbar";
import "../src/assets/css/dump.css";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Email from "./components/Email";
import Timeline from "./components/Timeline";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Aniket Kumar Singh";
  }, []);

  return (
    <div>
      <Socials />
      <div>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Timeline />
        {/* <Work /> */}
        <Contact />
      </div>
      <Email />
    </div>
  );
}

export default App;
