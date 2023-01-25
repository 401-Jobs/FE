import React,{useState} from 'react'

const Filter = (props) => {
  const[showcollapse,setShowCollapse]=useState(true) 
  return (
    <div>
       <button style={{}}onClick={()=>setShowCollapse(!showcollapse)} className="btn filter">
   Filter
   <svg class="scd" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-v" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M112 96H96V16c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v80H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h16v336c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V160h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm320 128h-16V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v208h-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h16v208c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V288h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM272 352h-16V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v336h-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h16v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-80h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path></svg>
  </button>
      <form onSubmit={props.submitFilterHandler} className={showcollapse?'collapse.show':'collapse'}>
       
       
        
        <p style={{fontSize:'x-large',textAlign:'center'}}>Filter Candidates By</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop:'15px'}}>
          {/* JobTitle */}
          <div className='labelInputMaxMin'>
          <div className='labelInput'>
            <label>Job Title</label>
            <input type='text' name='jobTitle' placeholder='job title'/>
          
          </div>
          <div className='labelInput'>
          <label>Skills</label>
            <input type='text' name='skills' onChange={props.skillHandler} placeholder='skill'/>
            </div>
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
        

            <div  className='labelInputMaxMin'>
            <button onClick={props.submitHandler} style={{backgroundColor:'#58629b',padding:'5px 5px',border:'none',borderRadius:'15px',marginTop:'15px'}}>Add</button>
        <button style={{backgroundColor:'#58629b',padding:'5px 5px',border:'none',borderRadius:'15px',marginTop:'15px'}}>Search</button>
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
