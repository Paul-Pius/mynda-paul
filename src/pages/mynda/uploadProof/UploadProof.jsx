import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import DropFile from "../../../components/my-component/DropFile";
import UploadImgDrop from "../../../components/my-component/UploadImgDrop";
import './UploadProof.css';


function UploadProof() {

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
    <div className="container-uploadproof">
      <form className="register-form-upload" onSubmit={handleSubmit}>
      <h3 className="prf">Upload Proof of Identity</h3>

      <div style={{display: "flex", marginTop: "2rem"}}>
        <UploadImgDrop />
        <p className="uploadi" style={{marginTop: "1.6rem", marginLeft: "-15rem"}}>Upload Image</p>
      </div>

        
          <p className="bvn" style={{marginBottom: "-0rem", marginRight: "22rem"}}>BVN</p>
        <input
          onChange={handleBvnInputChange}
          value={values.bvn}
          className="form-field-uploadproof1"
          placeholder="Add your BVN number"
          name="BVN"
         />
        {submitted && !values.phone ? <span>Please enter bvn</span> : null}

        <div style={{marginTop: "1rem"}}>
            <label className="facebook" style={{marginRight: "17rem"}}>Facebook ID</label>
        </div>
        <input
          onChange={handleFacebookInputChange}
          value={values.phone}
          className="form-field-uploadproof"
          placeholder="Add ID URL"
          name="facebook"
          />
         {submitted && !values.name ? <span>Please enter facebook address</span> : null}

        <div style={{marginTop: "1rem"}}>
          <label className="nin" style={{marginRight: "7rem"}}>Upload National Identity Card(NIN)</label>
          <DropFile />
        </div>

        <div style={{marginTop: "1rem"}}>
        <label className="nin" style={{marginRight: "11rem"}}>Driver's License(Optional)</label>
          <DropFile />
        </div>
        <div className="btnn" style={{marginRight: "10rem"}}>
          <ReusableButton text="Submit" padding="1rem 9.6rem" background= "#204ECF" borderRadius="5px" fontSize="16px"/>
        </div>
        <div style={{lineHeight: "3rem", marginTop: "1rem"}}>
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

export default UploadProof;


































        <div>
           
        </div>
