import React from 'react'
import Cards from './Cards'
import './About.css'

const About = () => {
  return (
    <div>
      <div class='first'>
        <div class='container py-5'>
          <div class='row h-100 align-items-center py-5'>
            <div class='col-lg-6 Reqruite'>
              <h1 class='display-4 '>RecruitlQ</h1>
              <p class='lead text-muted mb-0'>
              Revolutionizing Recruitment: Unleash Your Potential with RecruitIQ
              </p>
            </div>
            <div class='col-lg-6 d-none d-lg-block'>
              <img
                src='https://bootstrapious.com/i/snippets/sn-about/illus.png'
                alt=''
                class='img-fluid'
              />
            </div>
          </div>
        </div>
      </div>

      <div class='bg-white py-5'>
        <div class='container py-5'>
          <div class='row align-items-center mb-5'>
            <div class='col-lg-6 order-2 order-lg-1'>
              <i class='fa fa-bar-chart fa-2x mb-3 text-primary'></i>
              <h2 class='font-weight-light'>Company</h2>
              <p class='font-italic text-muted mb-4'>
              Our vision at RecruitIQ is to revolutionize the recruitment industry by providing innovative solutions that empower companies to easily find and hire the best talent for their organization.
              </p>
              <a  href='#' class='btn btn-light px-5 rounded-pill shadow-sm learnmore'>
                Learn More
              </a>
            </div>
            <div class='col-lg-5 px-5 mx-auto order-1 order-lg-2'>
              <img
                src='https://bootstrapious.com/i/snippets/sn-about/img-1.jpg'
                alt=''
                class='img-fluid mb-4 mb-lg-0'
              />
            </div>
          </div>
          <div class='row align-items-center'>
            <div class='col-lg-5 px-5 mx-auto'>
              <img
                src='https://bootstrapious.com/i/snippets/sn-about/img-2.jpg'
                alt=''
                class='img-fluid mb-4 mb-lg-0'
              />
            </div>
            <div class='col-lg-6'>
              <i class='fa fa-leaf fa-2x mb-3 text-primary'></i>
              <h2 class='font-weight-light'>Jobseeker</h2>
              <p class='font-italic text-muted mb-4'>
              The role of job seekers in RecruitIQ is to create and maintain an up-to-date profile, and to apply for job opportunities that align with their skills, experience and career goals. Additionally, job seekers can use RecruitIQ's tools and resources to improve their job search strategies and increase their chances of being selected for an interview.
              </p>
              <a href='#' class='btn btn-light px-5 rounded-pill shadow-sm learnmore'>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class='first py-5'>
        <div class='container py-5'>
          <div class='row mb-4'>
            <div class='team'>
              <h2 class='display-4 font-weight-light'>Our Team</h2>
            </div>
          </div>

          <Cards />
        </div>
      </div>
    </div>
  )
}

export default About
