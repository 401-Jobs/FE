import React from 'react'

const RandomProfile = () => {
  return (
    <div className='shadow' style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'50%',margin:'auto',marginBottom:'50px',padding:'20px 15px',border:'1px solid #fff',borderRadius:'10px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
        <i class="fa-solid fa-shuffle"></i>
        <h5 style={{marginBottom:'0'}}>Compare profile with random candidate profile</h5>
        </div>
        <button className='view_btn'>Random</button>
      </div>
  )
}

export default RandomProfile