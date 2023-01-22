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
    updateJobseekerDetails,
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
        userDetails: res.data["userDetails"],
      });
    } catch {
      console.log("hello");
    }
  }
  async function jobseekerInterviews() {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDgzNjQzLCJpYXQiOjE2NzQzOTcyNDMsImp0aSI6Ijg3YjFiMDlkNTRkODRmZTc5ODM3Njg2NDdjMDZiM2U5IiwidXNlcl9pZCI6NH0.x8NNyLoZNVkS1-L3k8kAtoYt17qDe6g-PznG80JExgE`,
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
  async function jobseekerViews() {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDgzNjQzLCJpYXQiOjE2NzQzOTcyNDMsImp0aSI6Ijg3YjFiMDlkNTRkODRmZTc5ODM3Njg2NDdjMDZiM2U5IiwidXNlcl9pZCI6NH0.x8NNyLoZNVkS1-L3k8kAtoYt17qDe6g-PznG80JExgE";
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
  async function jobseekerAll() {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDgzNjQzLCJpYXQiOjE2NzQzOTcyNDMsImp0aSI6Ijg3YjFiMDlkNTRkODRmZTc5ODM3Njg2NDdjMDZiM2U5IiwidXNlcl9pZCI6NH0.x8NNyLoZNVkS1-L3k8kAtoYt17qDe6g-PznG80JExgE";
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
  async function updateJobseekerPF(pf) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDgzNjQzLCJpYXQiOjE2NzQzOTcyNDMsImp0aSI6Ijg3YjFiMDlkNTRkODRmZTc5ODM3Njg2NDdjMDZiM2U5IiwidXNlcl9pZCI6NH0.x8NNyLoZNVkS1-L3k8kAtoYt17qDe6g-PznG80JExgE";
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
      updatejobseekerPF: res.data,
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
      jobseekerContact: res.data,
    });
    console.log(res.data);
  }
  async function createJobseekerEducation(pf) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDgzNjQzLCJpYXQiOjE2NzQzOTcyNDMsImp0aSI6Ijg3YjFiMDlkNTRkODRmZTc5ODM3Njg2NDdjMDZiM2U5IiwidXNlcl9pZCI6NH0.x8NNyLoZNVkS1-L3k8kAtoYt17qDe6g-PznG80JExgE";
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
  async function updateJobseekerEducation(pf) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDgzNjQzLCJpYXQiOjE2NzQzOTcyNDMsImp0aSI6Ijg3YjFiMDlkNTRkODRmZTc5ODM3Njg2NDdjMDZiM2U5IiwidXNlcl9pZCI6NH0.x8NNyLoZNVkS1-L3k8kAtoYt17qDe6g-PznG80JExgE";
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
      updatejobseekerEducation: res.data,
    });
    console.log(res.data);
  }
  async function createJobseekerWorkXP(pf) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDgzNjQzLCJpYXQiOjE2NzQzOTcyNDMsImp0aSI6Ijg3YjFiMDlkNTRkODRmZTc5ODM3Njg2NDdjMDZiM2U5IiwidXNlcl9pZCI6NH0.x8NNyLoZNVkS1-L3k8kAtoYt17qDe6g-PznG80JExgE";
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
  async function updateJobseekerWorkXP(pf) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDgzNjQzLCJpYXQiOjE2NzQzOTcyNDMsImp0aSI6Ijg3YjFiMDlkNTRkODRmZTc5ODM3Njg2NDdjMDZiM2U5IiwidXNlcl9pZCI6NH0.x8NNyLoZNVkS1-L3k8kAtoYt17qDe6g-PznG80JExgE";
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
  async function updateJobseekerMedia(pf) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDgzNjQzLCJpYXQiOjE2NzQzOTcyNDMsImp0aSI6Ijg3YjFiMDlkNTRkODRmZTc5ODM3Njg2NDdjMDZiM2U5IiwidXNlcl9pZCI6NH0.x8NNyLoZNVkS1-L3k8kAtoYt17qDe6g-PznG80JExgE";
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
  async function updateJobseekerDetails(pf) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDgzNjQzLCJpYXQiOjE2NzQzOTcyNDMsImp0aSI6Ijg3YjFiMDlkNTRkODRmZTc5ODM3Njg2NDdjMDZiM2U5IiwidXNlcl9pZCI6NH0.x8NNyLoZNVkS1-L3k8kAtoYt17qDe6g-PznG80JExgE";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/jobseeker-update-details/",
      pf,
      config
    );
    setGlobal({
      ...global,
      updatejobseekerDetails: res.data,
    });
    console.log(res.data);
  }
  async function updateJobseekerInterview(pf) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDgzNjQzLCJpYXQiOjE2NzQzOTcyNDMsImp0aSI6Ijg3YjFiMDlkNTRkODRmZTc5ODM3Njg2NDdjMDZiM2U5IiwidXNlcl9pZCI6NH0.x8NNyLoZNVkS1-L3k8kAtoYt17qDe6g-PznG80JExgE";
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
