import React from 'react'
import './InterviewTable.css'
import InterviewsDetails from './InterviewsDetails'

const InterviewTable = () => {
  return (
    <div className='interviewTable'>
      <div class='container' style={{ margin: '30px 0'}}>
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
                style={{ position: 'relative', height: '400px' ,overflowY:'auto'}}
              >
                <table class='table mb-0'>
                  <thead>
                    <tr >
                      <th style={{top:'0',zIndex:'2',position:'stickly'}} scope='col'>Company</th>
                      <th style={{top:'0',zIndex:'2',position:'stickly'}} scope='col'>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class='fw-normal'>
                      <th>
                        <img
                          src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp'
                          class='shadow-1-strong rounded-circle'
                          alt='avatar 1'
                          style={{ width: '55px', height: 'auto' }}
                        />
                        <span class='ms-2'>Amazon</span>
                      </th>
                      <td class='align-middle'>
                        <InterviewsDetails />
                      </td>
                    </tr>
                    <tr class='fw-normal'>
                      <th>
                        <img
                          src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp'
                          class='shadow-1-strong rounded-circle'
                          alt='avatar 1'
                          style={{ width: '55px', height: 'auto' }}
                        />
                        <span class='ms-2'>Amazon</span>
                      </th>
                      <td class='align-middle'>
                        <InterviewsDetails />
                      </td>
                    </tr>
                    <tr class='fw-normal'>
                      <th>
                        <img
                          src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp'
                          class='shadow-1-strong rounded-circle'
                          alt='avatar 1'
                          style={{ width: '55px', height: 'auto' }}
                        />
                        <span class='ms-2'>Amazon</span>
                      </th>
                      <td class='align-middle'>
                        <InterviewsDetails />
                      </td>
                    </tr>
                    <tr class='fw-normal'>
                      <th>
                        <img
                          src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp'
                          class='shadow-1-strong rounded-circle'
                          alt='avatar 1'
                          style={{ width: '55px', height: 'auto' }}
                        />
                        <span class='ms-2'>Amazon</span>
                      </th>
                      <td class='align-middle'>
                        <InterviewsDetails />
                      </td>
                    </tr>
                    <tr class='fw-normal'>
                      <th>
                        <img
                          src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp'
                          class='shadow-1-strong rounded-circle'
                          alt='avatar 1'
                          style={{ width: '55px', height: 'auto' }}
                        />
                        <span class='ms-2'>Amazon</span>
                      </th>
                      <td class='align-middle'>
                        <InterviewsDetails />
                      </td>
                    </tr>
                    <tr class='fw-normal'>
                      <th>
                        <img
                          src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp'
                          class='shadow-1-strong rounded-circle'
                          alt='avatar 1'
                          style={{ width: '55px', height: 'auto' }}
                        />
                        <span class='ms-2'>Amazon</span>
                      </th>
                      <td class='align-middle'>
                        <InterviewsDetails />
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterviewTable
