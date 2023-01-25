import React from 'react'
import '../ClientProfile/InterviewsDetails.js'
import InterviewsDetails from '../ClientProfile/InterviewsDetails'
import { AuthContext } from '../../context/auth'
import { useContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const CompnyTableInterview = () => {
  const [interviews, setInterviews] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [userMedia, setUserMedia] = useState([])
  const { token } = useContext(AuthContext)
  // console.log(token)
  const getInterviews = async () => {
    
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
    let res = await axios.get(
      'https://reqiq.herokuapp.com/get-company-interviews/',
      {
        headers: headers,
      }
    )
    // console.log(res.data)
    setInterviews(res.data['Interviews'])
    setUserInfo(res.data['usersInfo'])
    setUserMedia(res.data['usersMedia'])
  }
  const navigate=useNavigate()
  const RedirectViewEmployer=()=>{
    navigate('/candidate')
  }
  useEffect(() => {
    getInterviews()
  }, [])
  // console.log(interviews);
  // console.log(userInfo);
  if (interviews) {
    return (
      <>
        <div className='interviewTable' style={{ marginLeft: '9%' }}>
          <div class='container' style={{ margin: '30px 0' }}>
            <div class='row d-flex justify-content-center align-items-center h-100'>
              <div class='col-md-12 col-xl-10'>
                <div class='card shadow'>
                  <div class='card-header p-3'>
                    <h5 class='mb-0 d-flex'>
                      <i
                        class='fa-regular fa-calendar'
                        style={{ paddingRight: '5px' }}
                      ></i>
                      Upcoming interviews
                    </h5>
                  </div>
                  <div
                    class='card-body'
                    style={{
                      position: 'relative',
                      height: '400px',
                      overflowY: 'auto',
                    }}
                  >
                    <table class='table mb-0'>
                      <thead>
                        <tr>
                          <th
                            style={{
                              top: '0',
                              zIndex: '2',
                              position: 'stickly',
                            }}
                            scope='col'
                          >
                            Jobseeker
                          </th>
                          <th
                            style={{
                              top: '0',
                              zIndex: '2',
                              position: 'stickly',
                            }}
                            scope='col'
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {interviews.length > 0 &&
                          interviews.map((item, idx) => {
                            let status = null
                            if (item['isApproved_jobseeker'] === true)
                              status = 'Accept'
                            else if (item['isApproved_jobseeker'] === false)
                              status = 'Reject'
                              else if (item['isApproved_jobseeker'] === null) status = 'Pending'
                            let obj1 = userInfo[idx]
                            // console.log(obj2)
                            return (
                              <tr class='fw-normal'>
                                <th>
                                  <img
                                    src={`${process.env.REACT_APP_BACKEND_URL}${userMedia[idx]['image']}`}
                                    class='shadow-1-strong rounded-circle'
                                    alt='avatar 1'
                                    style={{ width: '55px', height: 'auto' }}
                                  />
                                  <span class='ms-2'>{obj1['firstName']}</span>
                                </th>
                               
                                <th>{status}</th>
                              </tr>
                            )
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "400px",
          padding: "20px 15px",
          border: "1px solid #281870",
          borderRadius: "10px",
          // position:'absolute',
          marginButtom:'200px',
          marginLeft:'100px'
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <i class="fa-solid fa-eye"></i>
          <h5 style={{ marginBottom: "0" }}>View our Candidates</h5>
        </div>
        <button onClick={RedirectViewEmployer} className="view_btn">
          View
        </button>
      </div>
      </>
    )
  }
}
