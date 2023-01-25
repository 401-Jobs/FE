import React from 'react'
import { AuthContext } from '../../context/auth'
import { useContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export const CompanyShortList = () => {
  const [usersInfo, setUsersInfo] = useState([])
  const [usersMedia, setUsersMedia] = useState([])
  const { token } = useContext(AuthContext)
  // console.log(token)
  const getShortList = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
    let res = await axios.get('https://reqiq.herokuapp.com/get-shortlist/', {
      headers: headers,
    })
    setUsersInfo(res.data['usersInfo'])
    setUsersMedia(res.data['usersMedia'])
  }
  const handleDelete = async (id) => {
    // console.log(id)
    console.log(token)

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.get(
      `https://reqiq.herokuapp.com/delete-shortlist/?id=${id}`,
      config
    );
    window.location.reload(false);
  }

  useEffect(() => {
    getShortList()
  }, [])
  return (
    <>
      <div className='interviewTable'>
        <div class='container' style={{ margin: '30px 0' }}>
          <div class='row d-flex justify-content-center align-items-center h-100'>
            <div class='col-md-12 col-xl-10'>
              <div class='card shadow'>
                <div class='card-header p-3'>
                  <h5 class='mb-0 d-flex'>
                    {/* <i style={{ paddingRight: '5px' }} class="fa-duotone fa-calendar-star"></i> */}
                    <img
                      src='https://cdn-icons-png.flaticon.com/128/9485/9485512.png'
                      alt='favorite'
                      width='30px'
                      height='30px'
                    />
                    Short List
                  </h5>
                </div>
                <div
                  class='card-body'
                  style={{
                    position: 'relative',
                    height: '389px',
                    overflowY: 'scroll',
                  }}
                >
                  <table class='table mb-0'>
                    <thead>
                      <tr>
                        <th
                          style={{ top: '0', zIndex: '2', position: 'stickly' }}
                          scope='col'
                        >
                          Jobseeker
                        </th>
                        <th
                          style={{ top: '0', zIndex: '2', position: 'stickly' }}
                          scope='col'
                        >
                          View
                        </th>
                        <th
                          style={{ top: '0', zIndex: '2', position: 'stickly' }}
                          scope='col'
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersInfo.length > 0 &&
                        usersInfo.map((item, idx) => {
                          return (
                            <tr class='fw-normal'>
                              <th>
                                <img
                                  src={`${process.env.REACT_APP_BACKEND_URL}${usersMedia[idx]['image']}`}
                                  class='shadow-1-strong rounded-circle'
                                  alt='avatar 1'
                                  style={{ width: '55px', height: 'auto' }}
                                />
                                <span class='ms-2'>{item['firstName']}</span>
                              </th>
                              <td class='align-middle'>
                                <i class='fa-solid fa-eye'></i>
                              </td>
                              <td class='align-middle'>
                              <button onClick={()=>{handleDelete(item['owner'])}} style={{border:'none',backgroundColor:'#fff'}}><i class="fa fa-times" aria-hidden="true"></i></button>
                              
                              </td>
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
    </>
  )
}
