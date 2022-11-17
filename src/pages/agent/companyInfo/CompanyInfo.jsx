import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import UploadCAC from "../../../components/my-component/UploadCACDrop";
import Text from "../../../components/my-component/TextArea";
import Multi from "../../../components/my-component/Multiselect/MultiSelect";
import './CompanyInfo.css';


function CompanyInfo() {

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
    <div className="container-companyinfo">
      <form className="register-form-info" onSubmit={handleSubmit}>
      <div>
        <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px", marginTop: "6rem", marginBottom: "2rem"}}/>
      </div>
      <h3 className="head-info">Company's Information</h3>
    
        {submitted && valid ? <div className="success-message">Success!</div> : null}
        <label className="lab">Company Name</label>
        <input
          onChange={handleNameInputChange}
          value={values.name}
          className="form-field"
          placeholder="Add name"
          name="name"
         />
         {submitted && !values.name ? <span className="warning">Please enter company name</span> : null}

          <label className="lab">Email</label>
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field"
          placeholder="Company's email"
          name="email"
          />
          {submitted && !values.email ? <span className="warning">Please enter email</span> : null}

         <label className="lab">Phone Number</label>
        <input
          onChange={handlePhoneInputChange}
          value={values.phone}
          className="form-field"
          placeholder="e.g +234"
          name="phone"
          />
          {submitted && !values.phone ? <span className="warning">Please enter phone number</span> : null}

         <label className="lab">Office Address</label>
        <input
          onChange={handleAddressInputChange}
          value={values.address}
          className="form-field"
          placeholder="State, street, LGA"
          name="address"
         />
         {submitted && !values.address ? <span className="warning">Please enter address</span> : null}

         
        <div style={{marginBottom: "1rem", marginRight: ""}}>
          <label className="labu">Upload CAC Certificate</label>
        </div>
        <UploadCAC />

         <div style={{marginBottom: "0.5rem"}}>
          <label className="lab2">About Us</label>
         </div>
         <div>
            <Text style={{fontFamily: ""}} placeholder = "Brief description about your company"/>
         </div>
         <label className="lab1">Select Service</label>
         {submitted && !values.text ? <span className="warning">Please give brief explanation about your company</span> : null}
         <div>
            <Multi />
         </div>
         <div className="submtb">
            <ReusableButton text="Submit" padding="1rem 9.5rem" background= "#204ECF" borderRadius="5px" fontSize="16px" />
         </div>
         <div style={{lineHeight: "3rem", marginTop: "0.5rem"}}>
          <p style={{
            color: "#1D1D1D", 
            fontWeight: "400", 
            fontSize: "12px", 
            lineHeight: "19px"}}>By clicking "Signup" you accept the 
            
            <span style={{
              color: "#204ECF", 
              lineHeight: "19px", 
              fontWeight: "400", 
              fontSize: "12px"}}>Terms of</span>
              </p>

          <p className="policy">
            <span style={{
            color: "#204ECF", 
            lineHeight: "19px", 
            fontWeight: "400", 
            fontSize: "12px"}}>service </span>

            <span style={{
              color: "#1D1D1D", 
              fontWeight: "400", 
              fontSize: "12px", 
              lineHeight: "19px"
            }}>and</span>

              <span style={{
                color: "#204ECF", 
                lineHeight: "19px", 
                fontWeight: "400", 
                fontSize: "12px"}}> Privacy Policy</span></p>
        </div>
      </form>
    </div>
  );
}

export default CompanyInfo;
