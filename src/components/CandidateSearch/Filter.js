import React,{useState} from 'react'

const Filter = (props) => {
    
  return (
    <div>
      <form onSubmit={props.submitFilterHandler}>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',marginTop:'15px'}}>
        <p style={{fontSize:'x-large',textAlign:'center'}}>Filter Candidates By</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', marginTop:'15px'}}>
          {/* JobTitle */}
          <div className='labelInput'>
            <label>Job Title</label>
            <input type='text' name='jobTitle' placeholder='job title'/>
          </div>
          {/* end JobTitle */}
          {/* exp container */}
          <div className='labelInputMaxMin'>
            <div className='labelInput'>
              <label>Min. Years of Experience</label>
              <input type='text' name='minExp' placeholder='min'/>
            </div>
            <div className='labelInput'>
              <label>Max. Years of Experience</label>
              <input type='text' name='maxExp' placeholder='max'/>
            </div>
          </div>
          {/* end exp container */}
          {/* age */}
          <div className='labelInputMaxMin'>
            <div className='labelInput'>
              <label>Min. Age</label>
              <input type='text' name='minAge' placeholder='min'/>
            </div>
            <div className='labelInput'>
              <label>Max. Age</label>
              <input type='text' name='maxAge' placeholder='max'/>
            </div>
          </div>
          {/* end age */}
        </div>
        <div className='skill_container'>
            <label>Skills</label>
            <input type='text' name='skills' onChange={props.skillHandler} placeholder='skill'/>
            <button onClick={props.submitHandler} style={{backgroundColor:'#58629b',padding:'5px 10px',border:'none',borderRadius:'15px'}}>Add</button>
        <button style={{backgroundColor:'#58629b',padding:'5px 10px',border:'none',borderRadius:'15px',marginLeft:'20px'}}>Search</button>
        </div> 
        
        <div className='' style={{display:'flex',flexWrap:'wrap',maxWidth:'600px',margin:'auto',justifyContent:'center',alignItems:'center'}}>
            <ul id="myUL" className="skillsList"></ul>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Filter
