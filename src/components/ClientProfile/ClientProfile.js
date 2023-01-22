import React, {useState} from 'react'
import SideBar from './SideBar'
import ProfileCompleteness from './ProfileCompleteness'
import InterviewTable from './InterviewTable'
import RecentlyViewed from './RecentlyViewed'
import RandomProfile from './RandomProfile'
const ClientProfile = () => {
  
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'15px'}}>
    <div style={{display:'flex',gap:'40px'}}>
        <SideBar/>
        <ProfileCompleteness />
        <div style={{display:'flex',flexDirection:'column'}}>
        <InterviewTable />
        <RecentlyViewed />
        </div>
    </div>
    <RandomProfile />
    </div>
  )
}

export default ClientProfile