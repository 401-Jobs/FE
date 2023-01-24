import React from 'react';

export const CompanyShortList = () =>{
    return(
        <>
           <div className='interviewTable'>
      <div class='container' style={{ margin: '30px 0' }}>
        <div class='row d-flex justify-content-center align-items-center h-100'>
          <div class='col-md-12 col-xl-10'>
            <div class='card shadow'>
              <div class='card-header p-3'>
                <h5 class='mb-0 d-flex'>
                {/* <i style={{ paddingRight: '5px' }} class="fa-duotone fa-calendar-star"></i> */}
                <img src='https://cdn-icons-png.flaticon.com/128/9485/9485512.png' alt='favorite' width='30px' height='30px' />
                  Short List
                </h5>
              </div>
              <div
                class='card-body'
                style={{ position: 'relative', height: '389px' ,overflowY:'scroll'}}
              >
                <table class='table mb-0'>
                  <thead>
                    <tr >
                      <th style={{top:'0',zIndex:'2',position:'stickly'}} scope='col'>Jobseeker</th>
                      <th style={{top:'0',zIndex:'2',position:'stickly'}} scope='col'>View</th>
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
                      <i class="fa-solid fa-eye"></i>
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
                      <i class="fa-solid fa-eye"></i>
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
                      <i class="fa-solid fa-eye"></i>
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
        </>
    )
}