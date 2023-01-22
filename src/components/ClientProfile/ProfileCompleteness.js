import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useNavigate } from "react-router";
import "./ProfileCompleteness.css";

const ProfileCompleteness = () => {
  let progress = 40;

  const navigate = useNavigate();

  const RedirectViewEmployer = () => {
    navigate("/preview-client", { replace: false, preventScrollReset: false });
  };

  return (
    <div className="profileCompletenessContainer card shadow">
      <div>
        <h5 style={{ borderBottom: "1px solid #281870", padding: "15px 10px" }}>
          <i style={{ paddingRight: "5px" }} class="fa-solid fa-sliders"></i>
          Profile Completeness
        </h5>
      </div>
      <div
        className="progress rounded-pill"
        style={{
          width: "400px",
          margin: "0 auto",
          height: "25px",
          fontSize: "17px",
        }}
      >
        <div
          role="progressbar"
          aria-valuenow="55"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress}%` }}
          className="progress-bar"
        >
          {progress}%
        </div>
      </div>
      <div style={{ width: "400px" }} className="all_fields">
        <p style={{ textDecorationLine: "line-through" }}>
          Personal Information
        </p>
        <p>Contact</p>
        <p style={{ textDecorationLine: "line-through" }}>Education</p>
        <p>Experience</p>
        <p>Skills</p>
        <p>Summary</p>
        <p>Websites</p>
        <p>Media</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "400px",
          padding: "20px 15px",
          border: "1px solid #281870",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <i class="fa-solid fa-eye"></i>
          <h5 style={{ marginBottom: "0" }}>View as Employer</h5>
        </div>
        <button onClick={RedirectViewEmployer} className="view_btn">
          View
        </button>
      </div>
    </div>
  );
};

export default ProfileCompleteness;
