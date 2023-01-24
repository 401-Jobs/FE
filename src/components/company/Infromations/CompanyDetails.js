import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { MDBSelect } from "mdb-react-ui-kit";
import Country from "./assets/Country";
import "./CompanyDetails.css";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography

} from "mdb-react-ui-kit";




const CompanyDetails = () => {

  const  token  = useContext(AuthContext);
  let UpdatecompanyInfo=async(data2)=> {
   
    const config = {
      headers: {
        Authorization: `Bearer ${token['token']}`,
      },
    };
    let res = await axios.put(
      "https://reqiq.herokuapp.com/update-company-info/",
      data2,
      config
    );
    }











  const[fisrtName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[country,setCountry]=useState("")
  const[city,setCity]=useState("")
  const[companyName,setCompanyName]=useState("")
  const[website,setWebSite]=useState("")
  const[about,setAbout]=useState("")
  const[phone,setPhone]=useState("")
  const[logo,setLogo]=useState("")
  const[email,setEmail]=useState("")
  const[address,setAddres]=useState("")
  const[obj,setobj]=useState({})


  const FirstNameHandler=(e)=>{
    setFirstName(e.target.value)
  }
  const LastNameHandler=(e)=>{
    setLastName(e.target.value)
  }
  const CountryHandler=(e)=>{
    setCountry(e.target.value)
  }
  const cityHandler=(e)=>{
    setCity(e.target.value)
  }
  const PhoneHandler=(e)=>{
    setPhone(e.target.value)
  }
  const EmailHandler=(e)=>{
    setEmail(e.target.value)
  }
  const CompanyNameHandler=(e)=>{
    setCompanyName(e.target.value)
  }
  const websiteHandler=(e)=>{
    setWebSite(e.target.value)
  }
  const addressHandler=(e)=>{
    setAddres(e.target.value)
  }
  const aboutCompanyHandler=(e)=>{
    setAbout(e.target.value)
  }

const companyInfo=(e)=>{
  e.preventDefault()
 setobj({
  firstName:fisrtName,
  lastName:lastName,
  country:country,
  city:city,
  email:email,
  phone:phone,
  company_name:companyName,
  company_website:website,
  company_address:address,
  about_company:about
 })
 console.log(obj)
UpdatecompanyInfo({obj})
}
useEffect(()=>{
 
  
 
 
  // console.log(obj)
  
},[])
  return (
    <>

      <MDBContainer className="py-5" style={{ maxWidth: "1200px" }}>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol>
            <MDBCard className="my-4 shadow-3">
              <MDBRow className="g-0">


                <MDBCol md="3" className="d-xl-block bg-image">
                  {/* <MDBCardImage  alt='Sample photo' fluid />  */}
                </MDBCol>
                <MDBCol md="6">
                  <MDBCardBody className="p-md-5 text-black text-center">


                    <MDBTypography tag="h4" className="mb-5 text-uppercase ">
                      Welcome to your Company Page
                    </MDBTypography>

                    <MDBRow>
                      <MDBCol md="6" className="mb-4">
                        <MDBInput
                          type="text"
                          size="lg"
                          required
                          label="First Name"
                          onChange={FirstNameHandler}
                        />
                      </MDBCol>
                      
                      <MDBCol md="6" className="mb-4">
                        <MDBInput
                          type="text"
                          size="lg"
                          required
                          label="Last Name"
                          onChange={LastNameHandler}
                        />
                      </MDBCol>
                      {/* component  */}
                      <Country />

                      <MDBCol md="6" className="mb-4">
                        <MDBInput 
                        
                        type="text" 
                        size="lg" 
                        label="City"
                        onChange={cityHandler}
                        
                        />
                      </MDBCol>

                      <MDBCol md="6" className="mb-4" required>
                        <MDBInput
                        
                        type="text" 
                        size="lg" 
                        label="Phone Number" 
                        
                        onChange={PhoneHandler}
                        />
                        
                        
                      </MDBCol>
                      
                      <MDBCol md="6" className="mb-4">
                        <MDBInput
                          type="text"
                          size="lg"
                          label="Email"
                          onChange={EmailHandler}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      type="text"
                      className="mb-4"
                      size="lg"
                      label="Company Name"
                      onChange={CompanyNameHandler}
                      required
                    />
                    
                 
                    <MDBCol  className="mb-4">
                  
        <Form.Control type="file" className="files" />
        </MDBCol>


    
                    <MDBInput
                      type="text"
                      className="mb-4"
                      size="lg"
                      label="Company Website"
                      onChange={websiteHandler}
                    />

                    <MDBInput
                      type="text"
                      className="mb-4"
                      size="lg"
                      label="Company Address"
                      onChange={addressHandler}
                      required
                    />

                    <textarea
                      placeholder="About the Company"
                      class="form-control"
                      id="exampleFormControlTextarea5"
                      rows="3"
                      onChange={aboutCompanyHandler}
                    ></textarea>
                  

                    <div className="d-flex justify-content-start pt-3 align-items-center justify-content-center ">
                      <MDBBtn
                       onClick={companyInfo}
                        size="lg"
                        className="ms-2 align-items-center"
                        style={{ backgroundColor: "hsl(210, 100%, 50%)" }}
                      >
                        continue
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default CompanyDetails;
