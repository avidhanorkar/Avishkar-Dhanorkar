import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "../Components/Hero";
import Stack from "../Components/Stack";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import GetInTouch from "../Components/GetInTouch";
import Footer from "../Components/Footer";

const Portfolio = () => {
  
  return (
    <>
    <Router>
      <div className="px-[122px]">
        <Hero />
        <AboutMe id="about" />
        <Stack />
        <Projects id="projects"/>
        <GetInTouch id="contact-me"/>
      </div>
      <Footer />
      </Router>
    </>
  );
};

export default Portfolio;
