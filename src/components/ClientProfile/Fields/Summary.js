import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SummaryForm from '../Forms/SummaryForm';
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
            Summary
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SummaryForm onHide={props.onHide}/>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
          {/* <Button onClick={props.onHide}>ADD</Button> */}
        </Modal.Footer>
      </Modal>
    );
  }
const Summary = () => {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
        <button className='buttons' onClick={() => setModalShow(true)}>Summary</button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Summary