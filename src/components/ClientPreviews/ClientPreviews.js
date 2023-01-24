import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ImageName from "./ImageName";
import "./ClientPreviews.css";
import Info from "./Info";
import Skills from "./Skills";
import Media from "./Media";
import Summary from "./Summary";
import WorkExp from "./WorkExp";
import Edu from "./Edu";
import { JoobSeekerContext } from "../../context/joobseeker";
import { AuthContext } from "../../context/auth";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ArrangeInterview from "./ArrangeInterview";

// import './style.css'

const ClientPreviews = () => {
  let { id } = useParams();
  let [randomUserDetails, setRandomUserDetails] = useState([]);
  let [randomUserInfo, setRandomUserInfo] = useState([]);
  let [randomUserMedia, setRandomUserMedia] = useState([]);
  let [randomUserEducation, setRandomUserEducation] = useState([]);
  let [randomUserWork, setRandomUserWork] = useState([]);
  let [data, setData] = useState({});

  let {
    userInfo,
    userEducation,
    userWork,
    userMedia,
    summary,
    skills,
    linkedin,
    github,
    porto,
    jobseekerData,
    setCanddidate,
    GetCompany,
  } = useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);
  let getRandomData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.get(
      "https://reqiq.herokuapp.com/jobseeker-all/",
      config
    );

    let res2 = await axios.get(
      "https://reqiq.herokuapp.com/jobseeker-data/",
      config
    );
    let realowner = res2.data["userDetails"]["owner"];
    console.log(realowner);
    let length = res.data["userDetails"].length;
    let random = Math.floor(Math.random() * length);
    let owner = res.data["userInfo"][random]["owner"];

    while (owner == realowner) {
      random = Math.floor(Math.random() * length);
      owner = res.data["userInfo"][random]["owner"];
    }

    setRandomUserDetails(res.data["userDetails"][random]);
    setRandomUserInfo(res.data["userInfo"][random]);
    setRandomUserMedia(res.data["userMedia"][random]);
    setRandomUserEducation(
      res.data["userEducation"].filter((ele) => {
        return owner == ele["owner"];
      })
    );
    setRandomUserWork(
      res.data["userWork"].filter((ele) => {
        return owner == ele["owner"];
      })
    );
  };
  let getData = async () => {
    await jobseekerData(token);
  };

  const getCandiddate = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    let res = await axios.get(
      `https://reqiq.herokuapp.com/get-canddidate/?id=${id}`,
      {
        headers: headers,
      }
    );

    setData(res.data);

    console.log(res);
  };

  const GetCompanyData = async () => {
    await GetCompany(token);
  };

  useEffect(() => {
    if (id) {
      // GET DATA FROM COMPANY SIDE
      GetCompanyData();
      getCandiddate();
      console.log(id);
    } else {
      getData();
      getRandomData();
    }
  }, []);

  const { pathname } = useLocation();

  const navigate = useNavigate();
  const AddShortListHandler = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      let res = await axios.post(
        "https://reqiq.herokuapp.com/create-shortlist/",
        { id: parseInt(id) },
        {
          headers: headers,
        }
      );
      navigate("/candidate");
    } catch (error) {}
  };

  if (pathname == "/CompareCandidates") {
    return (
      <div className="Box">
        <div className="main_container">
          <div className="left_section">
            <ImageName userMedia={userMedia} />
            <Info userInfo={userInfo} />
            <hr />
            <Skills skills={skills} />
            <hr />
            <Media linkedin={linkedin} github={github} porto={porto} />
          </div>
          <div className="right_section">
            <div className="right_up_section">
              <Summary summary={summary} />
            </div>
            <hr />
            <div className="right_middle_section">
              <WorkExp userWork={userWork} />
            </div>
            <hr />
            <div className="right_down_section">
              <Edu userEducation={userEducation} />
            </div>
          </div>
        </div>

        <div className="main_container">
          <div className="right_section" style={{ minHeight: "100%" }}>
            <div className="right_up_section">
              <Summary summary={randomUserDetails["summary"]} />
            </div>
            <hr />
            <div className="right_middle_section">
              <WorkExp userWork={randomUserWork} />
            </div>
            <hr />
            <div className="right_down_section">
              <Edu userEducation={randomUserEducation} />
            </div>
          </div>

          <div className="left_section">
            <ImageName userMedia={randomUserMedia} />
            <Info userInfo={randomUserInfo} />
            <hr />
            <Skills skills={randomUserDetails["skills"]} />
            <hr />
            <Media
              linkedin={randomUserDetails["linkedin"]}
              github={randomUserDetails["github"]}
              porto={randomUserDetails["porto"]}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div className="main_container">
        <div className="left_section" style={{ minHeight: "100%" }}>
          <ImageName
            userMedia={id && data["userMedia"] ? data["userMedia"] : userMedia}
          />
          <Info
            userInfo={id && data["userMedia"] ? data["userInfo"] : userInfo}
          />
          <hr />
          <Skills
            skills={
              id && data["userMedia"] ? data["userDetails"]["skills"] : skills
            }
          />
          <hr />
          <Media
            linkedin={
              id && data["userMedia"]
                ? data["userDetails"]["linkedin"]
                : linkedin
            }
            github={
              id && data["userMedia"] ? data["userDetails"]["github"] : github
            }
            porto={
              id && data["userMedia"] ? data["userDetails"]["porto"] : porto
            }
          />
        </div>
        <div className="right_section">
          <div className="right_up_section" style={{ minHeight: "100%" }}>
            <Summary
              summary={
                id && data["userMedia"]
                  ? data["userDetails"]["summary"]
                  : summary
              }
            />
          </div>
          <hr />
          <div className="right_middle_section">
            <WorkExp
              userWork={id && data["userMedia"] ? data["userWork"] : userWork}
            />
          </div>
          <hr />
          <div className="right_down_section">
            <Edu
              userEducation={
                id && data["userMedia"] ? data["userEducation"] : userEducation
              }
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: "20px", gap: "20px" }}>
        {id && (
          <Button onClick={AddShortListHandler} variant="primary">
            Add to Short List
          </Button>
        )}
        {id && <ArrangeInterview id={id} />}
      </div>
    </div>
  );
};

export default ClientPreviews;
