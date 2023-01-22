import { createContext, useState } from "react";
import axios from "axios";


export const JoobSeekerContext=createContext();
export  function JoobSeekerWrapper({children}){
    const [global,setGlobal]=useState({
        jobseekerdata:null,
        jobseekerinterviews:null,
        jobseekerviews:null,
        jobseekerall:null,
        jobseekerData,
        jobseekerInterviews,
        jobseekerViews,
        jobseekerAll
    })  
    async function jobseekerData(){
        let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDEyMDIyLCJpYXQiOjE2NzQzMjU2MjIsImp0aSI6ImU5NTc1ZTViODZkNzRkOTBiNDkyYjdiMGNmMDg2OTU3IiwidXNlcl9pZCI6NH0.VEOjUgzlqGFcc5HyfiufFYf5FOS8194xQ6L1HelgZIw"
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` ,
          };
          try{
        let res= await axios.get("https://reqiq.herokuapp.com/jobseeker-data/",{headers:headers })
        setGlobal({
            ...global,
            jobseekerdata:res.data

        })
        console.log(res.data)
    }
    catch{
        console.log("hello")
    }

    }
    async function jobseekerInterviews(){
    
        const config = {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDEyMDIyLCJpYXQiOjE2NzQzMjU2MjIsImp0aSI6ImU5NTc1ZTViODZkNzRkOTBiNDkyYjdiMGNmMDg2OTU3IiwidXNlcl9pZCI6NH0.VEOjUgzlqGFcc5HyfiufFYf5FOS8194xQ6L1HelgZIw`,
            },  
          };
        let res= await axios.get("https://reqiq.herokuapp.com/jobseeker-interviews/",config )
        setGlobal({
            ...global,
            jobseekerinterviews:res.data

        })
        console.log(res.data)

    }
    async function jobseekerViews(){
        let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDEyMDIyLCJpYXQiOjE2NzQzMjU2MjIsImp0aSI6ImU5NTc1ZTViODZkNzRkOTBiNDkyYjdiMGNmMDg2OTU3IiwidXNlcl9pZCI6NH0.VEOjUgzlqGFcc5HyfiufFYf5FOS8194xQ6L1HelgZIw"
        const config = {
            Headers: {
              Authorization: `Bearer ${token}`,
            },  
          };
        let res= await axios.get("https://reqiq.herokuapp.com/jobseeker-views/",config )
        setGlobal({
            ...global,
            jobseekerviews:res.data

        })
        console.log(res.data)

    }
    async function jobseekerAll(){
        let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDEyMDIyLCJpYXQiOjE2NzQzMjU2MjIsImp0aSI6ImU5NTc1ZTViODZkNzRkOTBiNDkyYjdiMGNmMDg2OTU3IiwidXNlcl9pZCI6NH0.VEOjUgzlqGFcc5HyfiufFYf5FOS8194xQ6L1HelgZIw"
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },  
          };
        let res= await axios.get("https://reqiq.herokuapp.com/jobseeker-all/",config )
        setGlobal({
            ...global,
            jobseekerall:res.data

        })
        console.log(res.data)

    }
    return (
        <JoobSeekerContext.Provider value={global}>
            {children}

        </JoobSeekerContext.Provider>
    )


}