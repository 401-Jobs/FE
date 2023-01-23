import React from 'react'
import { useLocation } from "react-router-dom";
import ImageName from './ImageName'
import './ClientPreviews.css'
import Info from './Info'
import Skills from './Skills'
import Media from './Media'
import Summary from './Summary'
import WorkExp from './WorkExp'
import Edu from './Edu'
// import './style.css'
const ClientPreviews = () => {
    const { pathname } = useLocation();
    if (pathname=='/CompareCandidates') {
        return (
            <div className='Box'>
                <div className='main_container'>
        <div className='left_section'>
                <ImageName />
                <Info />
                <hr/>
                <Skills />
                <hr/>
                <Media/>
        </div>
        <div className='right_section'>
        <div className='right_up_section'>
            <Summary />
        </div>
        <hr/>
        <div className='right_middle_section'>
            <WorkExp />
        </div>
        <hr/>
        <div className='right_down_section'>
            <Edu />
        </div>
        </div>
    </div>
    {/* end first cv */}
    <div className='main_container'>
        
        <div className='right_section'>
        <div className='right_up_section'>
            <Summary />
        </div>
        <hr/>
        <div className='right_middle_section'>
            <WorkExp />
        </div>
        <hr/>
        <div className='right_down_section'>
            <Edu />
        </div>
        </div>
        <div className='left_section'>
                <ImageName />
                <Info />
                <hr/>
                <Skills />
                <hr/>
                <Media/>
        </div>
    </div>
            </div>
        )
    }
  return (
    
    <div className='main_container'>
        <div className='left_section'>
                <ImageName />
                <Info />
                <hr/>
                <Skills />
                <hr/>
                <Media/>
        </div>
        <div className='right_section'>
        <div className='right_up_section'>
            <Summary />
        </div>
        <hr/>
        <div className='right_middle_section'>
            <WorkExp />
        </div>
        <hr/>
        <div className='right_down_section'>
            <Edu />
        </div>
        </div>
    </div>
    

  )
}

export default ClientPreviews