import React from "react";
import ClientPreview from "../components/ClientPreview/ClientPreview.js";
import './test.css'
export const CompareCandidatesPage = () => {
  return (
    <div style={{display:'flex'}}>
    <div className="Box" >
    <div  ><ClientPreview/></div>
    <div ><ClientPreview/></div>
    </div>
    </div>
  )
 
};
