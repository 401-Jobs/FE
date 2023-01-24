import React from "react";
import { CompnyTableInterview } from "./CompnyTableInterview";
import { CompanyShortList } from "./CompanyShortList";
import RedirectViewEmployer from "../ClientProfile/ProfileCompleteness";
// import "../ClientProfile/ProfileCompleteness.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const CompanyLandingPage = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <CompnyTableInterview />
        </div>
        <div>
          <CompanyShortList/>
        </div>
      </div>

      <Card className="text-center" style={{width:'65%',marginLeft:'7%',marginTop:'-1%'}}>
        <Card.Header >RecruitIQ</Card.Header>
        <Card.Body>
          <Card.Title>Last candidate profile you see</Card.Title>
          <Card.Text>
          This feature can provide you with valuable insights into who your website visitors are, where they come from, and what pages they are viewing.
          </Card.Text>
          <Button variant="primary" style={{textTransform:'unset' }}>Show</Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>

       <div style={{marginLeft:'75%',marginTop:'-51%',marginBottom:'15%'}}>
       <Card border="warning" style={{ width: '18rem' }}>
        <Card.Header>RecruitIQ</Card.Header>
        <Card.Body>
          <Card.Title>Get randomly candidated</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Body><Button variant="primary" style={{marginLeft:'30%',textTransform:'unset' }}>Show</Button></Card.Body>
      </Card>
      <br />

      <Card border="info" style={{ width: '18rem' }}>
        <Card.Header>RecruitIQ</Card.Header>
        <Card.Body>
          <Card.Title>Info Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Body><Button variant="primary" style={{marginLeft:'30%',textTransform:'unset'}}>Show</Button></Card.Body>
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
