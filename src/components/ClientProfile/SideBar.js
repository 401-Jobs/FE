import React from "react";
import Contact from "./Fields/Contact";
import Education from "./Fields/Education";
import Experience from "./Fields/Experience";
import PersonalInfo from "./Fields/PersonalInfo";
import Skills from "./Fields/Skills";
import Summary from "./Fields/Summary";
import Websites from "./Fields/Websites";
import Media from "./Fields/Media";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar_container">
      <div className="top_section">
        <h1 className="logo">Profile</h1>
        <i className="fa-solid fa-list bars"></i>
      </div>
      <div className="big_wrapper">
        <div className="wrapper">
          <i className="fa-solid fa-person"></i>
          <PersonalInfo />
        </div>
        <div className="wrapper">
          <i className="fa-solid fa-address-book"></i>
          <Contact />
        </div>
        <div className="wrapper">
          <i className="fa-solid fa-building-columns"></i>
          <Education />
        </div>
        <div className="wrapper">
          <i className="fa-solid fa-briefcase"></i>
          <Experience />
        </div>
        <div className="wrapper">
          <i className="fa-solid fa-arrow-up"></i>
          <Skills />
        </div>
        <div className="wrapper">
          <i className="fa-solid fa-font"></i>
          <Summary />
        </div>
        <div className="wrapper">
          <i className="fa-brands fa-edge"></i>
          <Websites />
        </div>
        <div className="wrapper">
          <i className="fa-solid fa-photo-film"></i>
          <Media />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
