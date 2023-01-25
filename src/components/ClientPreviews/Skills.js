const Skills = (props) => {
  let skills=String(props.skills)
    skills=skills.split(",") 
 
    
  return (
    <div>
        <p style={{fontSize:'x-large'}}>Skills</p>
        <ul style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            {skills.map(item=>{
                return (
                    <li>{item}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Skills