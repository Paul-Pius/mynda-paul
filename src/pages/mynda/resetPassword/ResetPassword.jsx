import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import lock from "../../../assets/images/lock.png";
import "./ResetPassword.css";



function ResetPassword() {

    const [reset, setReset] = useState(false);
    const [setValid] = useState(false);

    const [values, setValues] = useState({
        email: ""
      })

      const handleSubmit = (event) => {
        event.preventDefault();
        if(values.email) {
          setValid(true);
        }
        setReset(true)
      }

      const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
      }

    return (
        <div className="container-resetpassword">
            <form className="register-form-reset" onSubmit={handleSubmit}>
            <div className="locked">
                <img src={lock} alt="" />
            </div>
                    <h3 className="headerReset">Reset Password</h3>
                    <div>
                        <p className="par1" style={{marginBottom: "-1.4rem"}}>Kindly enter the email address</p><br />
                        <p className="par2">associated with this account and we</p>
                        <p className="par3">will send a password reset instructions</p>
                    </div>

                <label className="labb">Email</label>
                <input
                onChange={handleEmailInputChange}
                value={values.email}
                className="form-field"
                placeholder="E.g @gmail.com"
                name="email"
                />
                {reset && !values.email ? <span className="spn">Please enter email address</span> : null}
                <div style={{marginTop: "-2rem"}}>
                  <ReusableButton text="Next" padding="1rem 8.5rem" background="#204ECF" borderRadius="5px" fontSize="16px" />
                </div>
                <p style={{
                    fontWeight: "400", 
                    fontSize: "14px", 
                    lineHeight: "17px",
                    marginTop: "-2rem"
                  }}>You remember your password? <span className="log" style={{
                        color: "#204ECF", 
                        fontWeight: "600", 
                        fontSize: "14px", 
                        lineHeight: "17px"}}>Login</span></p>
            </form>
        </div>
    )
}

export default ResetPassword;