import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './InterviewTable.css'

const InterviewsDetails = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className='details_btn' variant="primary" onClick={handleShow}>
        Details
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Interviews Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{display:'flex',flexDirection:'column',gap:'10px',justifyContent:'space-around'}}>
          <div style={{display:'flex',justifyContent:'space-around',alignItems:'center', padding:'10px 5px',border:'1px solid #281870', borderRadius:'10px',backgroundColor:'#ebe9ee'}}>

            <span>Date: 30/1/2023</span>
            <span>Time: 15:00 PM</span>
            <span>Location: onsite</span>
          </div>
          <p style={{display:'flex',justifyContent:'space-around',alignItems:'center', padding:'10px 5px',border:'1px solid #281870', borderRadius:'10px',backgroundColor:'#ebe9ee'}}>Company Name: Amazon</p>
          <p style={{display:'flex',justifyContent:'space-around',alignItems:'center', padding:'10px 5px',border:'1px solid #281870', borderRadius:'10px',backgroundColor:'#ebe9ee'}}>Description: You have a technical interview, prepare yourself well please.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='accept_btn'><i class="fa-solid fa-check"></i>Accept</button>
          <button className='reject_btn'><i class="fa-solid fa-xmark" style={{paddingRight:'5px'}}></i>Reject</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default InterviewsDetails