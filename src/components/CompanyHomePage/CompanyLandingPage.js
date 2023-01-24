import React from "react";
import { CompnyTableInterview } from "./CompnyTableInterview";
import { CompanyShortList } from "./CompanyShortList";
import RedirectViewEmployer from "../ClientProfile/ProfileCompleteness";
// import "../ClientProfile/ProfileCompleteness.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { JoobSeekerContext } from "../../context/joobseeker";
import { useEffect } from "react";
import { AuthContext } from "../../context/auth";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const CompanyLandingPage = () => {
  const { logout, token } = useContext(AuthContext);
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState({});

  const navigate = useNavigate();

  const { userMedia, jobseekerData, userInfo, GetCompany, companyInfo } =
    useContext(JoobSeekerContext);

  const GetCompanyData = async () => {
    await GetCompany(token);
  };

  const getViews = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    let res = await axios.get("https://reqiq.herokuapp.com/get-views/", {
      headers: headers,
    });
    console.log(res);
    setfirst(res.data["Views"]);
  };

  const getLastViewd = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    let res = await axios.get("https://reqiq.herokuapp.com/last-viewd/", {
      headers: headers,
    });
    console.log(res);
    setsecond({
      usersInfo: res.data["usersInfo"],
      usersMedia: res.data["usersMedia"],
    });
  };

  useEffect(() => {
    getViews();
    getLastViewd();
  }, []);
  useEffect(() => {
    GetCompanyData();
  }, [token]);
  console.log(first);
  console.log(second);
  // console.log(
  //   process.env.REACT_APP_BACKEND_URL + second["usersMedia"]["image"]
  // );
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <CompnyTableInterview />
        </div>
        <div>
          <CompanyShortList />
        </div>
      </div>

      <Card
        className="text-center"
        style={{ width: "65%", marginLeft: "7%", marginTop: "-1%" }}
      >
        <Card.Header>Featured</Card.Header>

        <Card.Body>
          <Card.Title>Last candidate profile you see</Card.Title>
          <Card.Text>
            This feature can provide you with valuable insights into who your
            website visitors are, where they come from, and what pages they are
            viewing.
          </Card.Text>
          <Button variant="primary" style={{ textTransform: "unset" }}>
            Show
          </Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>

      <div
        style={{ marginLeft: "75%", marginTop: "-51%", marginBottom: "15%" }}
      >
        <Card
          border="warning"
          style={{
            width: "18rem",
          }}
        >
          <Card.Body>
            <Card.Title>Company Views</Card.Title>
            <Card.Text style={{ paddingTop: "2vw", paddingLeft: "2vw" }}>
              <i class="fa fa-eye fa-3x" aria-hidden="true"></i>
              <span style={{ marginLeft: "2vw", fontSize: "1.5rem" }}>
                {first}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={
              second["usersMedia"] &&
              process.env.REACT_APP_BACKEND_URL + second["usersMedia"]["image"]
            }
          />
          <Card.Body>
            <Card.Title>
              {second["usersInfo"] &&
                second["usersInfo"]["firstName"] +
                  " " +
                  second["usersInfo"]["lastName"]}
            </Card.Title>

            <Button
              onClick={() => {
                navigate(`/preview/${second["usersInfo"]["owner"]}`);
              }}
              variant="primary"
            >
              {" "}
              Details{" "}
            </Button>
          </Card.Body>
        </Card>

        <br />
      </div>

      {/* 
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
      </div> */}

      {/* //////////////////// Some Styling////////// */}

      {/* <img src="https://img.freepik.com/premium-photo/cartoon-character-businessman-shows-sign-okay-3d-illustration_578102-3369.jpg?size=338&ext=jpg&ga=GA1.2.98983144.1673426577&semt=ais" alt="image"/>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a020f0" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,69.3C384,43,480,21,576,21.3C672,21,768,43,864,74.7C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
    </>
  );
};
