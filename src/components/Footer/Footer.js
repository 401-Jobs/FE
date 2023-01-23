import React from "react";
import { useLocation } from "react-router-dom";
import logo from "./logo.png";

import "./footer.css";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/resetPassword") return null;
  if (pathname === "/clientLogin") return null;
  if (pathname === "/companyLogin") return null;

  // console.log(pathname);
  if (pathname === "/forgot") return null;
  if (pathname === "/email-varification") return null;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">At <i>RecruitIQ</i>, we understand the importance of finding the right talent for your organization. That's why we have created a cutting-edge recruitment platform that makes it easy for companies to identify, attract, and hire the best candidates for their open positions. Our platform is powered by advanced technologies, which enable us to match job seekers with the most relevant opportunities. Additionally, we provide a wide range of tools and resources to support both companies and job seekers throughout the hiring process. Join us in revolutionizing the way we recruit, and discover the power of <i>RecruitIQ.</i></p>

          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <img src={logo} width="200" height="200" alt="logo" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2017 All Rights Reserved by Ninja Team.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
