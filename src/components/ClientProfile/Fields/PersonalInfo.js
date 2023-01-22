import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PersonalInfoForm from "../Forms/PersonalInfoForm";
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
          Personal Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PersonalInfoForm />
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}
const PersonalInfo = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <button className="buttons" onClick={() => setModalShow(true)}>
        Personal Information
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default PersonalInfo;
