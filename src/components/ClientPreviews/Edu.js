import React from 'react'

const Edu = (props) => {
  return (
    <div>
        <p style={{fontSize:'x-large'}}>Education</p>
        <div>
          {props.userEducation.map((item) => {
            return (
              <div>
                <p style={{fontSize:'large'}}>{item.institute}</p>
                <div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <p>{item.degree} in {item.major}</p>
                    <p>
                      {item.start} - {item.end}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Edu