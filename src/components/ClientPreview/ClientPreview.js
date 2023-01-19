import React from 'react'
import AboutMeCard from './AboutMeCard'
import ContactInfo from './ContactInfo'
import Websites from './Websites'
import Summary from './Summary'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Skills from './Skills'
import Video from './Video'
import './ClientPreview.css'


const ClientPreview = () => {
  return (
    <div className='bigContainer'>
      <div className='secondContainer'>
        <div className='firstCol'>
            <AboutMeCard />
            <ContactInfo />
            <Websites />
        </div>
        <div className='secondCol'>
            <Summary />
            <WorkExperience />
            <Education />
            <Skills />
        </div>
      </div>
      <div className='videoContainer'>
      <Video />
        </div>
      </div>
  )
}

export default ClientPreview
