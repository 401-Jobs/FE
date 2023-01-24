import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ExperienceForm from "../Forms/ExperienceForm";

import { AuthContext } from "../../../context/auth";
import { JoobSeekerContext } from "../../../context/joobseeker";

import React, { useContext, useEffect, useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
function Tabs(props) {
  const [basicActive, setBasicActive] = useState("tab1");

  const { token } = useContext(AuthContext);
  const { jobseekerData, userWork } = useContext(JoobSeekerContext);

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

  console.log(userWork);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const CreateTabsItems = (props) => {
    let tabs = userWork.map((edu, idx) => {
      return (
        <>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick(`JOB ${idx + 1}`)}
              active={basicActive === `JOB ${idx + 1}`}
            >
              {`JOB ${idx + 1}`}
            </MDBTabsLink>
          </MDBTabsItem>
        </>
      );
    });
    return tabs;
  };
  //       <EducationForm onHide={props.onHide} data={edu} />
  const createTabsContent = (props) => {
    let content = userWork.map((edu, idx) => {
      return (
        <>
          <MDBTabsPane show={basicActive === `JOB ${idx + 1}`}>
            <ExperienceForm
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
          Experience Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ExperienceForm onHide={props.onHide} updateMode={false} />
        <Tabs props={props} updateMode={true} />
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
      <button className="buttons" onClick={() => setModalShow(true)}>
        Experience
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Experience;
