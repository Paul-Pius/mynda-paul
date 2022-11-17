import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import UploadCAC from "../../../components/my-component/UploadCACDrop";
import Text from "../../../components/my-component/TextArea";
import './JobApp.css';


function JobApplication() {

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    text: "",
    address: "",
    placeholder: ""
  })



  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({...values, name: event.target.value})
    console.log(event.value)
  }

  const handlePhoneInputChange = (event) => {
    setValues({...values, phone: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleAddressInputChange = (event) => {
    setValues({...values, address: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.name && values.phone && values.email && values.address && values.text) {
      setValid(true)
    }
    setSubmitted(true);
  }

  return (
    <div className="container-jobapplication">
    <form className="register-form-jobapp" onSubmit={handleSubmit}>
    {submitted && valid ? <div className="success-message">Success!</div> : null}
      <h3 className="head-info-jobapp">Job Application</h3>
      <div>
        <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px", marginTop: "4rem", marginBottom: "1rem"}}/>
      </div>
          <label className="labj">Email</label>
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field"
          placeholder="Add your email"
          name="email"
          />
          {submitted && !values.email ? <span className="warning">Please enter email</span> : null}

         <label className="labj">Phone Number</label>
        <input
          onChange={handlePhoneInputChange}
          value={values.phone}
          className="form-field"
          placeholder="Add Number"
          name="phone"
          />
          {submitted && !values.phone ? <span className="warning">Please enter phone number</span> : null}
        
       <label className="labj">Add your CV</label>
       <div>
        
       </div>
       <UploadCAC />
    
        {/* {submitted && valid ? <div className="success-message">Success!</div> : null} */}
        <label className="labj">Add Mynda Profile URL</label>
        <input
          onChange={handleNameInputChange}
          value={values.name}
          className="form-field"
          placeholder="Add Mynda's url"
          name="name"
         />
         {submitted && !values.name ? <span className="warning">Please enter company name</span> : null}


         <label className="labj">Office Address</label>
        <input
          onChange={handleAddressInputChange}
          value={values.address}
          className="form-field"
          type="date"
          name="address"
         />
         {submitted && !values.address ? <span className="warning">Please enter address</span> : null}


         <label className="labj">Message to Employer (optional)</label>
          <Text style={{fontFamily: ""}} />
         {submitted && !values.text ? <span className="warning">Please give brief explanation about your company</span> : null}
         
         <ReusableButton text="Submit" padding="1rem 8rem" background= "#204ECF" borderRadius="5px" fontSize="16px" />
    </form>
    </div>
  );
}

export default JobApplication;
