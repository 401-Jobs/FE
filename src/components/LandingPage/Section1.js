import React from "react";
import jobseeker from "./assets/jobseeker.png";
import employer from "./assets/employer.png";
import "./Section1.css";

const Section1 = () => {
  return (
    <section className="first_section">
      <div className="section1">
        <div className="cont">
          <h1 style={{ color: "#f3f3f3" }}>Jobseeker</h1>
          <p style={{ maxWidth: "200px", color: "white" }}>
            If you are a jobseeker sign up here...
          </p>
          <button className="button accept-btn">Sign up</button>
        </div>
        <div>
          <img src={jobseeker} alt="img" width={300} />
        </div>
      </div>
      <div className="vl"></div>
      <div className="section1">
        <div className="cont">
          <h1 style={{ color: "#f3f3f3" }}>Company</h1>
          <p style={{ maxWidth: "200px", color: "white" }}>
            If you are an employer sign up here...
          </p>
          <button className="button accept-btn">Sign up</button>
        </div>
        <div>
          <img src={employer} alt="img" width={300} />
        </div>
      </div>
    </section>
  );
};

export default Section1;
