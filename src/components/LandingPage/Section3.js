import React from "react";
import sign from "./assets/sign.png";
import wait from "./assets/wait.png";
import application from "./assets/application.png";
import compare from "./assets/compare.png";
import search from "./assets/search.png";
import arrange from "./assets/arrange.png";
import "./LandingPage.css";
import './Section3.css'
import company1 from './assets/IMAGE.png'
import hiring from './assets/HIRING.png'
const Section3 = () => {
  return (
    <>
      {/* <section>
        <div style={{ display: "flex", gap: "400px" }}>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h2>Jobseeker</h2>

            <img src={sign} alt='x' width={200} />
            <h5> 1- Sign up &gt; Sign in</h5>

          </section>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h2>Company</h2>

            <img src={sign} alt='y' width={200}/>
            <h5>1-Sign up &gt; Sign in</h5>

          </section>
        </div>
      </section>
      <section>
        <div style={{ display: "flex", gap: "100px" }}>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >

            <img src={application} alt='x' width={200} />
            <h5>2- Fill your profile</h5>

          </section>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >

            <img src={compare} alt='y' width={200} />
            <h5>3-Compare profile with other</h5>

          </section>
          <div className="v2"></div>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >

            <img src={application} alt='y' width={200} />
            <h5>2-Fill your profile</h5>

          </section>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >

            <img src={search} alt='y' width={200} />
            <h5>3-Search for candidates</h5>

          </section>
        </div>
      </section>
      <section>
        <div style={{ display: "flex", gap: "400px" }}>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >

            <img src={wait} alt='x' width={200} />
            <h5>4-Waiting for interview</h5>

          </section>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >

            <img src={arrange} alt='y' width={200} />
            <h5>4-Arrange interview</h5>

          </section>
        </div>
      </section> */}




    

<div class=' py-5'>
        <div class='container py-1'>
          <div class='row align-items-center mb-5'>
            <div class='col-lg-6 order-2 order-lg-1 ma' style={{marginTop:'-8%'}}>
              <i class='fa fa-bar-chart fa-2x mb-3 text-primary icons'></i>
              <h2 class='font-weight-light'>Company</h2>
              <div style={{marginLeft:'5%',display:'flex',flexDirection:'column',gap:'10px',paddingTop:'2%'}}>
                <p>1-Sign up &gt; Sign in</p>
                <p>2-Fill your profile</p>
                <p>3-Compare profile with other</p>
                <p>4-Waiting for interview</p>
              </div>
            </div>
            <div class='col-lg-5 px-5 mx-auto order-1 order-lg-2'>
              <img
                src={company1}
                alt=''
                class='img-fluid mb-4 mb-lg-0'
              
              />
            </div>
          </div>





        
          <div class='row ' style={{gap:'70px',display:'flex',justifyContent:'space-between'}}>
            <div class='col-lg-5 px-5 mx-auto'>
              <img
                src={hiring}
                alt=''
                class='img-fluid mb-4 mb-lg-0'
                style={{marginLeft:'-40px'}}
              />
            </div>
            <div class='col-lg-6' style={{paddingLeft:'17%'}}>
              <i class='fa fa-leaf fa-2x mb-3 text-primary icon1'></i>
              <h2 class='font-weight-light'>Jobseeker</h2>
              <div style={{marginLeft:'5%',display:'flex',flexDirection:'column',gap:'10px',paddingTop:'2%'}}>
                <p>1-Sign up &gt; Sign in</p>
                <p>2-Fill your profile</p>
                <p>3-Search for candidates</p>
                <p>4-Waiting for interview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Section3;
