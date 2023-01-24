import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../../../context/auth";
import { JoobSeekerContext } from "../../../context/joobseeker";
import SkillsForm from "../Forms/SkillsForm";
import "../Skills.css";
function MyVerticallyCenteredModal(props) {
  const { skills: currentSkills, updateJobseekerSkills } =
    useContext(JoobSeekerContext);

  const { token } = useContext(AuthContext);

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  function createKeyword(key) {
    if (key == "" && key == null) return;
    // Create LI
    var li = document.createElement("li");
    // var inputValue = document.getElementById("Skills").value || key;
    console.log(key);
    var t = document.createTextNode(key);
    li.appendChild(t);
    if (key === "") {
      return;
    } else {
      if (document.getElementById("myUL"))
        document.getElementById("myUL").appendChild(li);
    }

    // document.getElementById("Skills").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.onclick = function () {
      var div = this;
      let key = div.parentElement.firstChild.textContent.trim();
      div.parentElement.style.display = "none";
      let keys = skills.filter((item) => item != key);
      setSkills(keys);
    };
    li.appendChild(span);
  }

  useEffect(() => {
    if (currentSkills && currentSkills.length > 0) {
      setSkills(currentSkills.split(","));
    }
  }, [currentSkills]);

  // useEffect(() => {
  //   console.log(skills);
  //   let mySkills = [];
  //   if (skills && skills.length > 0) {
  //     mySkills = skills;
  //   }

  //   if (mySkills.length > 0) {
  //     mySkills.forEach((element) => {
  //       createKeyword(element);
  //     });
  //   }
  // }, [skills, document.getElementById("myUL")]);

  const submitHandler = () => {
    createKeyword(skill);
    setSkills([...skills, skill]);
  };

  const SaveSkills = async () => {
    let s = skills.join(",");
    let obj = {
      skills: s,
    };
    console.log(obj);
    await updateJobseekerSkills(token, obj);
  };

  const showHandler = () => {
    console.log("AM HERE");
    let mySkills = [];
    if (skills && skills.length > 0) {
      mySkills = skills;
    }

    if (mySkills.length > 0) {
      mySkills.forEach((element) => {
        createKeyword(element);
      });
    }
    console.log(skills);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onShow={showHandler}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Skills</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SkillsForm
          setSkill={setSkill}
          onHide={props.onHide}
          submitHandler={submitHandler}
          save={SaveSkills}
        />
        <div className="skills_container">
          <ul id="myUL" className="skillsList"></ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}
const Skills = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <button className="buttons" onClick={() => setModalShow(true)}>
        Skills
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Skills;
