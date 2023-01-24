import React, { useState } from "react";
import SideBar from "./SideBar";
import ProfileCompleteness from "./ProfileCompleteness";
import InterviewTable from "./InterviewTable";
import RecentlyViewed from "./RecentlyViewed";
import RandomProfile from "./RandomProfile";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useNavigate } from "react-router";
import { JoobSeekerContext } from "../../context/joobseeker";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
const ClientProfile = () => {
  const { login, token } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!token) {
    navigate("/");
  }

  const [isLoading, setisLoading] = useState(false);
  const {
    jobseekerData,
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

  const GetAllData = async () => {
    await jobseekerData(token);
  };

  useEffect(() => {
    setisLoading(true);
    GetAllData();
    setisLoading(false);
  }, [
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
  ]);

  if (isLoading)
    return (
      <div
        style={{
          textAlign: "center",
          alignContent: "center",
          minHeight: "80vh",
          paddingTop: "10%",
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden ">Loading...</span>
        </Spinner>
      </div>
    );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <div style={{ display: "flex", gap: "40px" }}>
        <SideBar />
        <ProfileCompleteness />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <InterviewTable />
          <RecentlyViewed />
        </div>
      </div>
      <RandomProfile />
    </div>
  );
};

export default ClientProfile;
