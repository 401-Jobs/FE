import axios from 'axios';
import React, {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../context/auth';
import './InterviewTable.css'


const InterviewsDetails = (props) => {
  const { token } = useContext(AuthContext);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let handelTrue=async()=>{
   let  pf={
    "id":props.interview['id'],
    "status":true
        
    }
    console.log(props.interview['id'])
    const config = {
     
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/jobseeker-update-interview/",
      pf,
      config
    );
    console.log(res.data)


    setShow(false)
  }

  let handelFalse=async()=>{
    let  pf={
      "id":props.interview['id'],
      "status":false
          
      }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/jobseeker-update-interview/",
      pf,
      config
    );
    console.log(props.interview['isApproved_jobseeker'])

    setShow(false)
  }
  console.log(props.interview)
  return (
    <>
      {/* <button className='details_btn' onClick={handleShow} > */}
      <i
        onClick={handleShow}
        className="fa fa-ellipsis-h details"
        aria-hidden="true"
        style={{ marginLeft: "20px" }}
      ></i>
      {/* </button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Interviews Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div style={{display:'flex',flexDirection:'column',gap:'10px',justifyContent:'space-around'}}>
          <div style={{display:'flex',justifyContent:'space-around',alignItems:'center', padding:'10px 5px',border:'1px solid #281870', borderRadius:'10px',backgroundColor:'#ebe9ee'}}>

            <span>Date:{props.interview["date"]}</span>
          </div>
          <p style={{display:'flex',justifyContent:'space-around',alignItems:'center', padding:'10px 5px',border:'1px solid #281870', borderRadius:'10px',backgroundColor:'#ebe9ee'}}>Company Name: {props.company["company_name"]}</p>
          <p style={{display:'flex',justifyContent:'space-around',alignItems:'center', padding:'10px 5px',border:'1px solid #281870', borderRadius:'10px',backgroundColor:'#ebe9ee'}}>Description: You have a technical interview, prepare yourself well please.</p>
          </div>
  
        
          <button className='accept_btn' onClick={handelTrue}><i class="fa-solid fa-check"></i></button>
          <button className='reject_btn' onClick={handelFalse}><i class="fa-solid fa-xmark" style={{paddingRight:'5px',gap:'10px'}}></i></button>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "10px 5px",
                border: "1px solid #281870",
                borderRadius: "10px",
                backgroundColor: "#ebe9ee",
              }}
            >
              <span>Date: 30/1/2023</span>
              <span>Time: 15:00 PM</span>
              <span>Location: onsite</span>
            </div>
            <p
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "10px 5px",
                border: "1px solid #281870",
                borderRadius: "10px",
                backgroundColor: "#ebe9ee",
              }}
            >
              Company Name: Amazon
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "10px 5px",
                border: "1px solid #281870",
                borderRadius: "10px",
                backgroundColor: "#ebe9ee",
              }}
            >
              Description: You have a technical interview, prepare yourself well
              please.
            </p>
          </div> */}
        </Modal.Body>
        <Modal.Footer>
          {/* <button className="accept_btn">
            <i className="fa-solid fa-check"></i>
          </button>
          <button className="reject_btn">
            <i
              className="fa-solid fa-xmark"
              style={{ paddingRight: "5px", gap: "10px" }}
            ></i>
          </button> */}

        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InterviewsDetails;