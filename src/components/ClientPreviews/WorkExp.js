import React from 'react'

const WorkExp = (props) => {
  return (
    <div>
        <p style={{fontSize:'x-large'}}>Work Experience</p>
        <div>
          {props.userWork.map((item) => {
            return (
              <div>
                <p style={{fontSize:'large'}}>{item.title}</p>
                <div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <p>{item.company}</p>
                    <p>
                      {item.start} - {item.end}
                    </p>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default WorkExp