import { hover } from "@testing-library/user-event/dist/hover";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { JoobSeekerContext } from "../../context/joobseeker";
import "./ProfileCompleteness.css";

const ProfileCompleteness = () => {
  const {
    userInfo,
    userContact,
    userEducation,
    userWork,
    userMedia,
    userDetails,
    summary,
    skills,
    linkedin,
    github,
    porto,
  } = useContext(JoobSeekerContext);

  console.log(userMedia);

  const CalculateProgress = () => {
    let obj = {
      isPf: false,
      iscontact: false,
      isedu: false,
      iswork: false,
      issummary: false,
      isskills: false,
      islinked: false,
      isgithub: false,
      isImage: false,
    };

    if (userInfo["firstName"]) obj.isPf = true;
    if (userContact["email"] && userContact["phoneNumber"])
      obj.iscontact = true;
    if (userEducation[0]["institute"]) obj.isedu = true;
    if (userWork[0]["title"]) obj.iswork = true;
    if (summary) obj.issummary = true;
    if (skills) obj.isskills = true;
    if (linkedin) obj.islinked = true;
    if (github) obj.isgithub = true;
    if (userMedia["image"]) obj.isImage = true;

    return obj;
  };

  let [Obj, setObj] = useState({});

  let [progress, setProgress] = useState(5);

  useEffect(() => {
    let objProgress = CalculateProgress();
    setObj(objProgress);
    let progress = 0;
    for (const i of Object.keys(objProgress)) {
      if (objProgress[i]) {
        progress += 1;
      }
    }
    console.log(Object.keys(objProgress).length);
    setProgress(parseInt((progress / Object.keys(objProgress).length) * 100));
  }, []);

  console.log(Obj);

  const navigate = useNavigate();

  const RedirectViewEmployer = () => {
    navigate("/preview", { replace: false, preventScrollReset: false });
  };

  return (
    <div className="profileCompletenessContainer card shadow">
      <div>
        <h5 style={{ borderBottom: "1px solid #281870", padding: "15px 10px" }}>
          <i
            style={{ paddingRight: "5px" }}
            className="fa-solid fa-sliders"
          ></i>
          Profile Completeness
        </h5>
      </div>
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
          style={{ width: `${progress}%`, background: "#EBDC3E" }}
          className="progress-bar"
        >
          {progress}%
        </div>
      </div>

      <div style={{ width: "400px" }} className="all_fields">
        <p style={{}}>
          {Obj.isPf ? (
            <i class="fa fa-check" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-times" aria-hidden="true"></i>
          )}{" "}
          Personal Information
        </p>
        <p>
          {" "}
          {Obj.iscontact ? (
            <i class="fa fa-check" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-times" aria-hidden="true"></i>
          )}{" "}
          Contact
        </p>
        <p style={{}}>
          {Obj.isedu ? (
            <i class="fa fa-check" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-times" aria-hidden="true"></i>
          )}{" "}
          Education
        </p>
        <p>
          {" "}
          {Obj.iswork ? (
            <i class="fa fa-check" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-times" aria-hidden="true"></i>
          )}{" "}
          Experience
        </p>
        <p>
          {" "}
          {Obj.isskills ? (
            <i class="fa fa-check" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-times" aria-hidden="true"></i>
          )}{" "}
          Skills
        </p>
        <p>
          {" "}
          {Obj.issummary ? (
            <i class="fa fa-check" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-times" aria-hidden="true"></i>
          )}{" "}
          Summary
        </p>
        <p>
          {" "}
          {Obj.isgithub ? (
            <i class="fa fa-check" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-times" aria-hidden="true"></i>
          )}{" "}
          Websites
        </p>
        <p>
          {" "}
          {Obj.isImage ? (
            <i class="fa fa-check" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-times" aria-hidden="true"></i>
          )}{" "}
          Media
        </p>
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
          <i className="fa-solid fa-eye"></i>
          <h5 style={{ marginBottom: "0" }}>View as Employer</h5>
        </div>
        <button
          disabled={progress <= 90}
          onClick={RedirectViewEmployer}
          className="view_btn"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ProfileCompleteness;
