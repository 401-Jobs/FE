import React from "react";
import Section1 from "./Section1";
import Card from "./Sliding";
import Section3 from "./Section3";
import partner from "./assets/partners.png";
import "./LandingPage.css";

import "../Header/Header.css";

const Landing = () => {
  return (
    <div>
      <Section1 />

      <section>
        <h1 className="header1">Our Partner</h1>
        <div className="second_section">
          <Card />
          <img src={partner} alt="partner" />
        </div>
      </section>

      <section>
        <h1 className="header2">How To Start</h1>
        <div className="third_section">
          <Section3 />
        </div>
      </section>
    </div>
  );
};

export default Landing;
