import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContactForm from '../Forms/ContactForm';
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
          <Button onClick={props.onHide}>ADD</Button>
        </Modal.Footer>
      </Modal>
    );
  }
const Contact = () => {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
        <button className='buttons' onClick={() => setModalShow(true)}>Contact</button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Contact