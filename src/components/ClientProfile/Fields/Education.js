import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EducationForm from "../Forms/EducationForm";

import React, { useContext, useEffect, useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { AuthContext } from "../../../context/auth";
import { JoobSeekerContext } from "../../../context/joobseeker";

function Tabs(props) {
  const [basicActive, setBasicActive] = useState("tab1");

  const { token } = useContext(AuthContext);
  const { jobseekerData, userEducation } = useContext(JoobSeekerContext);

  // useEffect(() => {
  //   console.log("CHANGES HAPPEND");
  //   console.log(userEducation);
  // }, [userEducation]);

  const getData = async (token) => {
    await jobseekerData(token);
  };

  useEffect(() => {
    if (token) getData(token);
  }, [token]);

  console.log(userEducation);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const CreateTabsItems = (props) => {
    let tabs = userEducation.map((edu, idx) => {
      return (
        <>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick(`Edu ${idx + 1}`)}
              active={basicActive === `Edu ${idx + 1}`}
            >
              {`Edu ${idx + 1}`}
            </MDBTabsLink>
          </MDBTabsItem>
        </>
      );
    });
    return tabs;
  };
  //       <EducationForm onHide={props.onHide} data={edu} />
  const createTabsContent = (props) => {
    let content = userEducation.map((edu, idx) => {
      return (
        <>
          <MDBTabsPane show={basicActive === `Edu ${idx + 1}`}>
            <EducationForm
              onHide={props.props.onHide}
              updateMode={props.updateMode}
              data={edu}
            />
          </MDBTabsPane>
        </>
      );
    });
    return content;
  };

  return (
    <>
      <MDBTabs className="mb-3">{CreateTabsItems()}</MDBTabs>

      <MDBTabsContent>{createTabsContent(props)}</MDBTabsContent>
    </>
  );
}

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
          Education Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ marginTop: "2vw", marginBottom: "2vw" }}>Add Education</h3>
        <EducationForm onHide={props.onHide} updateMode={false} />

        <hr
          style={{ paddingTop: "1vw", marginTop: "2vw", marginBottom: "2vw" }}
        ></hr>
        <h3 style={{ marginTop: "2vw", marginBottom: "2vw" }}>
          Edit Education
        </h3>
        <Tabs props={props} updateMode={true} />
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        {/* <Button onClick={props.onHide}>ADD</Button> */}
      </Modal.Footer>
    </Modal>
  );
}
const Education = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <button className="buttons" onClick={() => setModalShow(true)}>
        Education
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Education;
