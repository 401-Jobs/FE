import React from 'react'
import sign from './assets/sign.png'
import wait from './assets/wait.png'
import application from './assets/application.png'
import compare from './assets/compare.png'
import search from './assets/search.png'
import arrange from './assets/arrange.png'
import './LandingPage.css'

const Section3 = () => {
  return (
    <>
      <section>
        <div style={{ display: 'flex', gap: '400px' }}>
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <h2>Jobseeker</h2>
            <img src={sign} alt='x' width={200} />
            <h5> 1- Sign up &gt; Sign in</h5>
          </section>
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <h2>Company</h2>
            <img src={sign} alt='y' width={200}/>
            <h5>1-Sign up &gt; Sign in</h5>
          </section>
        </div>
        
      </section>
      <section>
      <div style={{ display: 'flex' ,gap:"100px"}}>
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <img src={application} alt='x' width={200} />
            <h5>2- Fill your profile</h5>
          </section>
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <img src={compare} alt='y' width={200} />
            <h5>3-Compare profile with other</h5>
          </section>
          <div class='v2'></div>
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <img src={application} alt='y' width={200} />
            <h5>2-Fill your profile</h5>
          </section>
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <img src={search} alt='y' width={200} />
            <h5>3-Search for candidates</h5>
          </section>
        </div>
      </section>
      <section>
        <div style={{ display: 'flex', gap: '400px' }}>
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <img src={wait} alt='x' width={200} />
            <h5>4-Waiting for interview</h5>
          </section>
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <img src={arrange} alt='y' width={200} />
            <h5>4-Arrange interview</h5>
          </section>
        </div>
        
      </section>






      {/* /////////////////////////////////////// */}
    </>
  )
}

export default Section3
