import React,{useState,useEffect} from 'react'
import search_icon from './search.png'
import './CandidateSearch.css'
import Filter from './Filter'
import CandidateCards from './CandidateCards'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import axios from 'axios'
import Row from 'react-bootstrap/Row';

const CandidateSearch = () => {
    const[userInfo,setuserInfo]=useState({})
    const { token } = useContext(AuthContext);
    
    const [candidates,setCandidates]=useState([])
    const [skill,setSkill]=useState('')
    const [skills,setSkills]=useState([])


    let getAllJobSeekers=async(e)=>{
      const config = {
        headers: {
          Authorization:`Bearer ${token}`,
        },
      };
      let res = await axios.get(
        "https://reqiq.herokuapp.com/jobseeker-all/",
        config
      );
      console.log(res.data);
       let info=res.data['userInfo'];
       let educate=res.data['userEducation']
       let contact=res.data['userContact']
       let work=res.data['userWork'] 
       let media=res.data['userMedia'] 
       let details=res.data['userDetails'] 
       let result = [];
       result = info.map(obj => {
          const index = educate.findIndex(el => el["id"] == obj["id"]);
          const indexCon = contact.findIndex(el => el["id"] == obj["id"]);
          const indexwor= work.findIndex(el => el["id"] == obj["id"]);
          const indexMed=media.findIndex(el => el["id"] == obj["id"]);
          const indexDet=details.findIndex(el => el["id"] == obj["id"]);
  
          const{github,linkedin,skills}=indexDet !==-1?details[indexCon]:{};
          const{image}=indexMed !==-1?media[indexCon]:{};
          const{title,description}=indexwor !==-1?work[indexCon]:{};
          const{email,phoneNumber}=indexCon !==-1?contact[indexCon]:{};
          const { major,degree} = index !== -1 ? educate[index] : {};
        return {
           ...obj,
           major,
           degree,
           email,
           phoneNumber,
           title,
           description,
           image,
           github,
           linkedin,
           skills
  
        };
          return result
       });
       console.log(result)
      //  console.log(userInfo)
      setuserInfo(result)
       
      }




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
          let keys = skills.filter(function (item) {
            // console.log(skills);
            return item !== key;
          });
          setSkills(keys)
        };
        li.appendChild(span);
      }
      const submitHandler=(e)=>{
        e.preventDefault()
        createKeyword(skill)
        setSkills([...skills,skill])
        // console.log(skills)
      }
      const skillHandler=(e)=>{
        setSkill(e.target.value)
    }
    // search functionality
    const submitSearchHandler=(e)=>{
        e.preventDefault()
        let candidate=e.target.q.value
        let target= userInfo.filter(item=>{
            if (item.title!== null && item.title.toLowerCase()=== candidate.toLowerCase()) return item
        })
        
        setuserInfo(target)
 
    }
// filter functionality
const submitFilterHandler=(e)=>{
    // console.log('ffff')
    e.preventDefault()
    let jobTitle=e.target.jobTitle.value
    let minExp=e.target.minExp.value
    let maxExp=e.target.maxExp.value
    let minAge=e.target.minAge.value
    let maxAge=e.target.maxAge.value
    let findIntersection=(checkArr)=>{
      // console.log(checkArr.split(','));
        let common = checkArr.split(',').filter(x => skills.indexOf(x) !== -1)
        if (common.length>0) return true
        else return false
    }
    
    let res=userInfo.filter(item=>{
        if (item.title===null || item.yearsExperience===null || item.age===null) return false
        if (jobTitle==item.title || (parseInt(minExp)<=parseInt(item.yearsExperience) && parseInt(item.yearsExperience)<=parseInt(maxExp)) || (parseInt(minAge)<=parseInt(item.age) && parseInt(item.age)<=parseInt(maxAge)) || findIntersection(item.skills)===true) return item
    })
    setuserInfo(res)
}

    useEffect(()=>{
        getAllJobSeekers()
    },[])
    
  return (
    <div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', paddingTop:'25px'}}>
            <p style={{fontSize:'x-large'}}>Search for Candidate</p>
        <form onSubmit={submitSearchHandler} action='' className='search-bar'>
            <input type='text' placeholder='Search job title' name='q'/>
            <button type='submit'><img src={search_icon} alt='search bar'/></button>
        </form>
        </div>
        <div>
            <Filter submitFilterHandler={submitFilterHandler} skillHandler={skillHandler} submitHandler={submitHandler}/>
        </div>
        <div>
        <Row xs={1} md={4} className="g-4">
        {userInfo.length>0 && userInfo.map((person,index)=>{
        return(
          
        <CandidateCards 
        key={person.index}
        firstName={person.firstName}
        lastName={person.lastName}
        location={person.country}
        jopTitle={person.title}
        email={person.email}
        img={person.image}
        skills={person.skills}
        ex={person.yearsExperience}
        age={person.age}
        id={person.owner}
        />
        
        )
        
      })}
         </Row> 
            
        </div>
    </div>
  )
}

export default CandidateSearch