import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import DropFile from "../../../components/my-component/DropFile";
import UploadImgDrop from "../../../components/my-component/UploadImgDrop";
import './AddShareHolder.css';


function AddShareHolder() {

  const [values, setValues] = useState({
    bvn: "",
    facebook: ""
  })

  const [submitted, setSubmitted] = useState(false);
  const [setValid] = useState(false);

  const handleBvnInputChange = (event) => {
    setValues({...values, bvn: event.target.value})
  }

  const handleFacebookInputChange = (event) => {
    setValues({...values, facebook: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.bvn && values.facebook) {
      setValid(true)
    }
    setSubmitted(true);
  }

  return (
    <div className="form-contain-addshare">
      <form className="register-form-upload-addshare" onSubmit={handleSubmit}>
      <h3 className="prfadd">Add ShareHolder</h3>
      <div>
        <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px", marginTop: "2rem", marginBottom: "0.5rem"}}/>
      </div>
      <p style={{textAlign: "left"}}>
        This info is pertaining to your company's shareholderinformation
      </p>
      <div style={{display: "flex", marginTop: "2rem"}}>
        <UploadImgDrop />
        <p className="uploadi" style={{marginTop: "1.6rem", marginLeft: "-15rem"}}>Upload Image</p>
      </div>

        <p className="bvn" style={{marginTop: "2rem", paddingRight: "14.7rem"}}>Shareholder name</p>
        <input
          onChange={handleBvnInputChange}
          value={values.bvn}
          className="form-field"
          placeholder="Add name"
          name="name"
         />
        {submitted && !values.phone ? <span>Please enter bvn</span> : null}

        <label className="facebook" style={{paddingRight: "22rem"}}>Email</label>
        <input
          onChange={handleFacebookInputChange}
          value={values.phone}
          className="form-field"
          placeholder="E.g @gmail.com"
          name="facebook"
          />
         {submitted && !values.name ? <span>Please enter facebook address</span> : null}

        <label className="facebook" style={{paddingRight: "16rem"}}>Phone Number</label>
        <input
          onChange={handleFacebookInputChange}
          value={values.phone}
          className="form-field"
          placeholder="E.g +234"
          name="phone"
          />
         {submitted && !values.name ? <span>Please enter facebook address</span> : null}

        <label className="facebook" style={{paddingRight: "20rem"}}>Address</label>
        <input
          onChange={handleFacebookInputChange}
          value={values.phone}
          className="form-field"
          placeholder="House no, state, city, country"
          name="address"
          />
         {submitted && !values.name ? <span>Please enter facebook</span> : null}

        <label className="facebook" style={{paddingRight: "20rem"}}>Shares</label>
        <input
          onChange={handleFacebookInputChange}
          value={values.phone}
          className="form-field"
          placeholder="%"
          name="shares"
          />
         {submitted && !values.name ? <span>Please enter facebook address</span> : null}

        <label className="facebook" style={{paddingRight: "22rem"}}>Role</label>
        <input
          onChange={handleFacebookInputChange}
          value={values.phone}
          className="form-field"
          placeholder="Current role in agency"
          name="role"
          />
         {submitted && !values.name ? <span>Please enter facebook address</span> : null}

        <label className="nin" style={{paddingRight: "7rem"}}>Upload National Identity Card(NIN)</label>
        <div style={{marginBottom: "2rem"}}>
          <DropFile />
        </div>
        <ReusableButton text="Save" padding="1rem 10.3rem" background= "#204ECF" borderRadius="5px" fontSize="16px"/>
      </form>
    </div>
  );
}

export default AddShareHolder;




