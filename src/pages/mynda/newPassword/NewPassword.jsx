import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import lock from "../../../assets/images/lock.png";
import "./NewPassword.css";



function NewPassword() {

    const [login, setLogin] = useState(false);
    const [setValid] = useState(false);

    const [values, setValues] = useState({
        password: "",
        retypepassword: ""
      })

      const handleSubmit = (event) => {
        event.preventDefault();
        if(values.email && values.password) {
          setValid(true);
        }
        setLogin(true)
      }

      const handlePasswordInputChange = (event) => {
        setValues({...values, password: event.target.value})
      }

      const handleConfirmPasswordInputChange = (event) => {
        setValues({...values, retypepassword: event.target.value})
      }


    return (
        <div className="container-newpassword">
            <form className="register-form-new" onSubmit={handleSubmit}>
            <div className="locked">
                <img src={lock} alt="" />
            </div>
                    <h3 className="headernew">Create New Password</h3>
                    <div className="paragdiv">
                        <p className="parag">Your new password must be different</p><br />
                        <p className="parag2">from your previously used password.</p>
                    </div>

                <label className="leb">Password</label>
                <input
                onChange={handlePasswordInputChange}
                value={values.password}
                className="form-field"
                placeholder="Enter password"
                name="password"
                />
                {login && !values.password ? <span className="spn">Please enter new password</span> : null}

                <label className="leb">Confirm Password</label>
                <input
                onChange={handleConfirmPasswordInputChange}
                value={values.retypepassword}
                className="form-field"
                placeholder="retype password"
                name="retype password"
                />
                {login && !values.retypepassword ? <span className="spn">Please retype new password</span> : null}
                <div style={{marginTop: "-2rem"}}>
                  <ReusableButton text="Next" padding="1rem 9.4rem" background="#204ECF" borderRadius="5px" fontSize="16px" />
                </div>
            </form>
        </div>
    )
}

export default NewPassword;