import { createContext, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./auth";
import { useEffect } from "react";

export const JoobSeekerContext = createContext();
export function JoobSeekerWrapper({ children }) {
  const [global, setGlobal] = useState({
    userInfo: {},
    userContact: {},
    userEducation: [{}],
    userWork: [{}],
    userMedia: {},
    userDetails: {},
    /********************* */
    jobseekerinterviews: {},
    jobseekerviews: {},
    jobseekerall: {},
    updatejobseekerPF: {},
    jobseekerContact: { userContact: {} },
    createjobseekerEducation: {},
    updatejobseekerEducation: {},
    createjobseekerWorkXP: {},
    updatejobseekerWorkXP: {},
    updatejobseekerMedia: {},
    updatejobseekerDetails: {},
    updatejobseekerInterview: {},
    jobseekerData,
    jobseekerInterviews,
    jobseekerViews,
    jobseekerAll,
    updateJobseekerPF,
    updateJobseekerContact,
    createJobseekerEducation,
    updateJobseekerEducation,
    createJobseekerWorkXP,
    updateJobseekerWorkXP,
    updateJobseekerMedia,
    updateJobseekerSummry,
    updateJobseekerLinks,
    updateJobseekerSkills,
    updateJobseekerInterview,
  });

  async function jobseekerData(token) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      let res = await axios.get("https://reqiq.herokuapp.com/jobseeker-data/", {
        headers: headers,
      });
      console.log(res.data);

      setGlobal({
        ...global,
        jobseekerdata: res.data,
        userInfo: res.data["userInfo"],
        userContact: res.data["userContact"],
        userEducation: res.data["userEducation"],
        userWork: res.data["userWork"],
        userMedia: res.data["userMedia"],
        summary:res.data["userDetails"]["summary"],
        skills:res.data["userDetails"]["skills"],
        websites:res.data["userDetails"]["websites"]

      });
    } catch {
      console.log("hello");
    }
  }
  async function jobseekerInterviews(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.get(
      "https://reqiq.herokuapp.com/jobseeker-interviews/",
      config
    );
    setGlobal({
      ...global,
      jobseekerinterviews: res.data,
    });
    console.log(res.data);
  }
  async function jobseekerViews(token) {
    
    const config = {
      Headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.get(
      "https://reqiq.herokuapp.com/jobseeker-views/",
      config
    );
    setGlobal({
      ...global,
      jobseekerviews: res.data,
    });
    console.log(res.data);
  }
  async function jobseekerAll(token) {
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.get(
      "https://reqiq.herokuapp.com/jobseeker-all/",
      config
    );
    setGlobal({
      ...global,
      jobseekerall: res.data,
    });
    console.log(res.data);
  }
  async function updateJobseekerPF(pf,token) {
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/jobseeker-update-pf/",
      pf,
      config
    );
    setGlobal({
      ...global,
      userInfo: res.data["userInfo"],
    });
    console.log(res.data);
  }

  async function updateJobseekerContact(pf, token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/jobseeker-update-contact/",
      pf,
      config
    );
    setGlobal({
      ...global,
      userContact : res.data["userContact"],
    });
    console.log(res.data);
  }
  async function createJobseekerEducation(pf,token) {
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.post(
      "https://reqiq.herokuapp.com/jobseeker-create-education/",
      pf,
      config
    );
    setGlobal({
      ...global,
      createjobseekerEducation: res.data,
    });
    console.log(res.data);
  }
  async function updateJobseekerEducation(pf,token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/jobseeker-update-education/",
      pf,
      config
    );
    setGlobal({
      ...global,
      userEducation: [res.data["userEducation"]],
    });
    console.log(res.data);
  }
  async function createJobseekerWorkXP(pf,token) {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.post(
      "https://reqiq.herokuapp.com/jobseeker-create-work/",
      pf,
      config
    );
    setGlobal({
      ...global,
      createjobseekerWorkXP: res.data,
    });
    console.log(res.data);
  }
  async function updateJobseekerWorkXP(pf,token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/jobseeker-update-work/",
      pf,
      config
    );
    setGlobal({
      ...global,
      updatejobseekerWorkXP: res.data,
    });
    console.log(res.data);
  }
  async function updateJobseekerMedia(pf,token) {
 
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/jobseeker-update-media/",
      pf,
      config
    );
    setGlobal({
      ...global,
      updatejobseekerMedia: res.data,
    });
    console.log(res.data);
  }
  async function updateJobseekerSummry(pf,token) {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/jobseeker-update-summary/",
      pf,
      config
    );
    setGlobal({
      ...global,
      summary: res.data["summary"],
    });
    console.log(res.data);
  }
  async function updateJobseekerLinks(pf,token) {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/jobseeker-update-links/",
      pf,
      config
    );
    setGlobal({
      ...global,
      websites: res.data["websites"],
    });
    console.log(res.data);
  }
  async function updateJobseekerSkills(pf,token) {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/jobseeker-update-links/",
      pf,
      config
    );

    setGlobal({
      ...global,
      skills: res.data["skills"],
    });
    console.log(res.data);
  }
  async function updateJobseekerInterview(pf,token) {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/jobseeker-update-interview/",
      pf,
      config
    );
    setGlobal({
      ...global,
      updatejobseekerInterview: res.data,
    });
    console.log(res.data);
  }
  return (
    <JoobSeekerContext.Provider value={global}>
      {children}
    </JoobSeekerContext.Provider>
  );
}