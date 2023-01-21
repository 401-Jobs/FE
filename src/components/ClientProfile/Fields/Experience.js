import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ExperienceForm from '../Forms/ExperienceForm';
function MyVerticallyCenteredModal(props) {
  const experienceHandler=()=>{

  }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Experience Information
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
          <ExperienceForm />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
          {/* <Button onClick={}>Add</Button> */}
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
const Experience = () => {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
        <button className='buttons' onClick={() => setModalShow(true)}>Experience</button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Experience