import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom";
import ImageName from './ImageName'
import './ClientPreviews.css'
import Info from './Info'
import Skills from './Skills'
import Media from './Media'
import Summary from './Summary'
import WorkExp from './WorkExp'
import Edu from './Edu'
import { JoobSeekerContext } from '../../context/joobseeker';
import { AuthContext } from '../../context/auth';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ArrangeInterview from './ArrangeInterview';
// import './style.css'

const ClientPreviews = () => {
  let [randomUserDetails, setRandomUserDetails] = useState([]);
  let [randomUserInfo, setRandomUserInfo] = useState([]);
  let [randomUserMedia, setRandomUserMedia] = useState([]);
  let [randomUserEducation, setRandomUserEducation] = useState([]);
  let [randomUserWork, setRandomUserWork] = useState([]);




  const {
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
  useEffect(() => {
    getData();
    getRandomData();
  }, []);
  console.log(randomUserWork);

  const { pathname } = useLocation();
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
        <hr/>
        <div className='right_middle_section'>
            <WorkExp userWork={userWork} />
        </div>
        <hr/>
        <div className='right_down_section'>
            <Edu userEducation={userEducation} />
        </div>
        </div>
    </div>
    {/* end first cv */}
    <div className='main_container'>
        
        <div className='right_section'>
        <div className='right_up_section'>
            <Summary summary={randomUserDetails["summary"]} />
        </div>
        <hr/>
        <div className='right_middle_section'>
            <WorkExp userWork={randomUserWork} />
        </div>
        <hr/>
            <div className='right_down_section'>
                <Edu userEducation={randomUserEducation} />
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
        {/* end first cv */}
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
      <div style={{ display: "flex", marginBottom: "20px", gap: "20px" }}>
        <Button variant="primary">Add to Short List</Button>
        <ArrangeInterview />
      </div>
    </div>
  );
};

export default ClientPreviews;
