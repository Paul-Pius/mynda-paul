import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import UploadCAC from "../../../components/my-component/UploadCACDrop";
import Text from "../../../components/my-component/TextArea";
import './TrainingSchool.css';


function TrainingSchool() {

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    occupation: "",
    address: "",
  })



  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({...values, name: event.target.value})
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
  const handleTrainingInputChange = (event) => {
    setValues({...values, occupation: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.name && values.phone && values.email && values.address && values.text) {
      setValid(true)
    }
    setSubmitted(true);
  }

  return (
    <div className="container-trainingschool">
    <form className="register-form-training" onSubmit={handleSubmit}>
    {submitted && valid ? <div className="success-message-training">Success!</div> : null}
      <h3 className="head-info-training">Training School</h3>
      <div>
        <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px", marginTop: "4rem", marginBottom: "1rem"}}/>
      </div>
          <label className="labj">Name</label>
        <input
          onChange={handleEmailInputChange}
          value={values.name}
          className="form-field-training"
          placeholder="Add name"
          name="name"
          />
          {submitted && !values.name ? <span className="warning">Please enter name</span> : null}

         <label className="labj">Phone</label>
        <input
          onChange={handlePhoneInputChange}
          value={values.phone}
          className="form-field-training"
          placeholder="Add phone number"
          name="phone"
          />
          {submitted && !values.phone ? <span className="warning-training">Please enter phone number</span> : null} 
    
        {/* {submitted && valid ? <div className="success-message">Success!</div> : null} */}
        <label className="labj">Email</label>
        <input
          onChange={handleNameInputChange}
          value={values.email}
          className="form-field-training"
          placeholder="E.g @gmail.com"
          name="email"
         />
         {submitted && !values.email ? <span className="warning">Please enter email</span> : null}


         <label className="labj">Address</label>
        <input
          onChange={handleAddressInputChange}
          value={values.address}
          className="form-field-training"
          type="text"
          placeholder="Street, House No, City, State"
          name="address"
         />
         {submitted && !values.address ? <span className="warning">Please enter address</span> : null}
        
         <label className="labj">Training school license(optional)</label>
        <input
          onChange={handleTrainingInputChange}
          value={values.occupation}
          className="form-field-training"
          type="text"
          placeholder="Add occupation"
          name="occupation"
         />
         {submitted && !values.occupation ? <span className="warning">Please enter occupation</span> : null}

         <label className="labj">Description</label>
          <Text placeholder="Add description" style={{fontFamily: ""}} />
         <ReusableButton text="Next" padding="1rem 8rem" background= "#204ECF" borderRadius="5px" fontSize="16px" />
    </form>
    </div>
  );
}

export default TrainingSchool;
