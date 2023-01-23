import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import ScrollToTop from "./components/ScrollToUp/ScrollToUp";
import ForgotPasswordPage from "./screens/ForgotPasswordPage";
import EmailVerificationPage from "./screens/EmailVerificationPage";
import ContactusPage from "./screens/ContactusPage";
import AboutUsPage from "./screens/AboutUsPage";
import { ResetPassword } from "./screens/ResetPassword";
import ClientPreview from "./components/ClientPreview/ClientPreview";
import UploadForm from "./components/UpdateForm/UpdateForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { LoginPage } from "./screens/LoginPage.js";
import ClientProfilePage from "./screens/ClientProfilePage";
import Candidates from "./components/Candidates/Candidates";
import CompanyDetails from "./components/company/Infromations/CompanyDetails";
import DashboardCompany from "./components/company/Dashboard/DashboardCompany";
import { CompareCandidatesPage } from "./screens/CompareCandidatesPage";

import { SignUpPage } from "./screens/SignUpPage";

import React, { useContext, useEffect } from "react";

function App() {
  return (
    <div>
      <ScrollToTop />

      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<LandingPage />} />

          <Route exact path="/CompanySignUp" element={<SignUpPage />} />

          <Route exact path="/ClientSignUp" element={<SignUpPage />} />

          <Route
            exact
            path="/email-varification"
            element={<EmailVerificationPage />}
          />

          <Route path="/clientLogin" element={<LoginPage />} />

          <Route path="/companyLogin" element={<LoginPage />} />

          <Route exact path="/forgot" element={<ForgotPasswordPage />} />

          <Route exact path="/resetPassword" element={<ResetPassword />} />

          {/* /*************************JOB SEEKER ****************************************/}

          <Route path="/client-profile" element={<ClientProfilePage />} />

          <Route exact path="/preview-client" element={<ClientPreview />} />

          <Route
            exact
            path="/CompareCandidates"
            element={<CompareCandidatesPage />}
          />

          {/************************* END JOB SEEKER ****************************************/}

          <Route path="/contact" element={<ContactusPage />} />

          <Route path="/about" element={<AboutUsPage />} />

          {/* 
          <Route exact path="/update-form" element={<UploadForm />} />
        */}

          {/* /************************* END JOB SEEKER ****************************************/}

          <Route exact path="/companyDetails" element={<CompanyDetails />} />

          <Route
            exact
            path="/dashboardCompany"
            element={<DashboardCompany />}
          />

          <Route exact path="/candidates" element={<Candidates />} />

          {/* /************************* END JOB SEEKER ****************************************/}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
