import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import './MyndaPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function MyndaForm() {

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
    <div className="container-mynda">
      <form className="register-form-mynda" onSubmit={handleSubmit}>
      <h3 className="head1">Create Account</h3>
        {submitted && valid ? <div className="success-message">Success!</div> : null}
        <label className="lab">Name</label>
        <input
          onChange={handleNameInputChange}
          value={values.name}
          className="form-field-mynda"
          placeholder="Your first and last name"
          name="fullName"
         />
         {submitted && !values.name ? <span className="spn">Please enter full name</span> : null}

          <label className="lab">Phone</label>
        <input
          onChange={handlePhoneInputChange}
          value={values.phone}
          className="form-field-mynda"
          placeholder="Your 11 digit number"
          name="phone"
          />
        {submitted && !values.phone ? <span className="spn">Please enter phone number</span> : null}
        <label className="lab">Email</label>
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field-mynda"
          placeholder="E.g @gmail.com"
          name="email"
          />
        {submitted && !values.email ? <span className="spn">Please enter email</span> : null}
         <label className="lab">Password</label>
        <input
          onChange={handlePasswordInputChange}
          value={values.password}
          className="form-field-mynda"
          placeholder="Enter password"
          name="password"
          type={passwordShown ? "text" : "password" }
         />
         <i onClick={togglePasswordVisibility} className="eye1">{eye}</i>
         {submitted && !values.password ? <span className="spn">Please enter password</span> : null}
         
         <label className="lab">Retype Password</label>
        <input
          onChange={handleRetypePasswordInputChange}
          value={values.retypepassword}
          className="form-field-mynda"
          placeholder="Retype password"
          name="password"
          type={passwordShown ? "text" : "password" }
         />
         <i onClick={togglePasswordVisibility} className="reeye1">{eye}</i>
         {submitted && !values.retypepassword ? <span className="spn">Please retype password</span> : null}
         <ReusableButton text="Next" padding="1rem 1rem" background="#204ECF" borderRadius="5px" fontSize="16px" />
         <p style={{marginLeft: "1rem", fontWeight: "400", fontSize: "14px", lineHeight: "17px"}}>Already have an account? <span className="log" style={{color: "#204ECF", fontWeight: "600" , fontSize: "14px", lineHeight: "17px"}}>Login</span></p>
      </form>
    </div>
  );
}

export default MyndaForm;
