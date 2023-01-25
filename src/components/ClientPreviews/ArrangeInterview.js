import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ArrangeInterviewForm from "./ArrangeInterviewForm";

const ArrangeInterview = ({ id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Arrange Interview
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Interview form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ArrangeInterviewForm id={id} />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="primary" onClick={handleClose}>
            Arrange
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ArrangeInterview;
