import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import './AgentPage.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function AgentForm() {

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    retypepassword: "",
    placeholder: ""
  })

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true)
  }

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

  const handlePasswordInputChange = (event) => {
    setValues({...values, password: event.target.value})
  }

  const handleRetypePasswordInputChange = (event) => {
    setValues({...values, retypepassword: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.name && values.phone && values.email && values.password && values.retypepassword) {
      setValid(true)
    }
    setSubmitted(true);
  }

  return (
    <div className="container-agent">
      <form className="register-form-agent" onSubmit={handleSubmit}>
      <h3 className="head1">Create Account</h3>
      <div>
        <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px"}}/>
      </div>
      <p style={{fontFamily: "sans serif", marginBottom: "2rem", textAlign: "left"}}>This info is pertaining to you as a primary<br></br> 
      contact of your agency</p>
        {submitted && valid ? <div className="success-message">Success!</div> : null}
        <label className="lab">Name</label>
        <input
          onChange={handleNameInputChange}
          value={values.name}
          className="form-field"
          placeholder="Your first and last name"
          name="fullName"
         />
         {submitted && !values.name ? <span className="spn">Please enter full name</span> : null}

          <label className="lab">Pnone Number</label>
        <input
          onChange={handlePhoneInputChange}
          value={values.phone}
          className="form-field"
          placeholder="e.g +234"
          name="phone"
          />
        {submitted && !values.phone ? <span className="spn">Please enter phone number</span> : null}
         <label className="lab">Email</label>
        <input
          onChange={handleEmailInputChange }
          value={values.email}
          className="form-field"
          placeholder="E.g @gmail.com"
          name="email"
          />
        {submitted && !values.email ? <span className="spn">Please enter email</span> : null}
         <label className="lab">Password</label>
        <input
          onChange={handlePasswordInputChange}
          value={values.password}
          className="form-field"
          placeholder="Enter password"
          name="password"
          type={passwordShown ? "text" : "password" }
         />
          <i onClick={togglePasswordVisibility} className="eyea">{eye}</i>
         
         {submitted && !values.password ? <span className="spn">Please enter password</span> : null}
         <label className="lab">Retype Password</label>

         <div>
          <input
            onChange={handleRetypePasswordInputChange}
            value={values.retypepassword}
            className="form-field"
            placeholder="Retype password"
            name="password"
            type={passwordShown ? "text" : "password" }
          />
            <i onClick={togglePasswordVisibility} className="reeyea">{eye}</i>
         </div>

         {submitted && !values.retypepassword ? <span className="spn">Please retype password</span> : null}
         <ReusableButton text="Next" padding="1rem 9.6rem" background= "#204ECF" borderRadius="5px" fontSize="16px" />
         <p style={{marginLeft: "-0.5rem", fontWeight: "400", fontSize: "14px", lineHeight: "17px"}}>Already have an account? <span className="log" style={{color: "#204ECF", fontWeight: "600" , fontSize: "14px", lineHeight: "17px"}}>Login</span></p>
      </form>
    </div>
  );
}

export default AgentForm;
