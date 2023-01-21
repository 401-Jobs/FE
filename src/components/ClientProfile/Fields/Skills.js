import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SkillsForm from '../Forms/SkillsForm';
import '../Skills.css'
function MyVerticallyCenteredModal(props) {
  const [keywords,setKeywords]=useState([])
  const [skill,setSkill]=useState('')

  function createKeyword(key) {
    // Create LI
    var li = document.createElement("li");
    // var inputValue = document.getElementById("Skills").value || key;
  
    var t = document.createTextNode(key);
    li.appendChild(t);
    if (key === "") {
      return;
    } else {
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
      let keys = keywords.filter(function (item) {
        return item !== key;
      });
      setKeywords(keys)
    };
    li.appendChild(span);
  }

  const submitHandler=()=>{
    createKeyword(skill)
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
            Skills
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SkillsForm setSkill={setSkill}/>
          <div className='skills_container'>
      <ul id="myUL" className="skillsList"></ul>
      </div>
        </Modal.Body>
        <Modal.Footer>
        
          {/* <Button onClick={props.onHide}>Close</Button> */}
          <Button onClick={submitHandler}>ADD</Button>
          <Button onClick={props.onHide}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
const Skills = () => {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
        <button className='buttons' onClick={() => setModalShow(true)}>Skills</button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Skills