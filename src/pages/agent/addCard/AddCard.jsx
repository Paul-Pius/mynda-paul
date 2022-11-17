import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import "./AddCard.css";


function AddCard() {

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const [values, setValues] = useState({
        title: "",
        placeholder: "",
        employment: "",
        companyname: "",
        location: "",
        start: "",
        end: ""
      });

    function handleOnchangeStart (e)  {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    function handleOnchangeEnd (e)  {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleTitleInputChange = (event) => {
        setValues({...values, title: event.target.value})
        console.log(event.value)
      }

    const handleCompanyNameInputChange = (event) => {
        setValues({...values, companyname: event.target.value})
        console.log(event.value)
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        if(values.name && values.phone && values.email && values.password && values.retypepassword) {
          setValid(true)
        }
        setSubmitted(true);
      }

    return (
        
        <div className="container-addcard">
            <form className="fom-work-addcard" onSubmit={handleSubmit}>
            {submitted && valid ? <div className="success-message">Success!</div> : null}
                <div className="telushead">
                    <h3 style={{paddingTop: "5rem", color: "#1D1D1D", textAlign: "center"}}>Add Card</h3>
                    <div>
                        <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px", marginBottom: "-1rem"}}/>
                    </div>
                </div>

                <label style={{marginLeft: "-16.5rem"}}>Card Number</label><br />
                <input style={{borderRadius: "5px", marginBottom: "1rem", width: "98%"}}
                onChange={handleTitleInputChange}
                value={values.title}
                className="form-field"
                placeholder="0000 0000 0000 0000"
                name="Title"
                />


                <label style={{paddingRight: "17.5rem"}}>Card Name</label>
                <input style={{borderRadius: "5px", marginBottom: "1rem", width: "98%"}}
                onChange={handleCompanyNameInputChange}
                value={values.name}
                className="form-field"
                placeholder="Name on Card"
                name="company name"
                />

                <div style={{display: "flex", justifyContent: "space-between", marginRight: "5rem", paddingBottom: "5rem", color: "#1D1D1D"}}>
                    <label className="hea" style={{color: "#1D1D1D"}}>Valid Till</label>
                    <label className="hea" style={{color: "#1D1D1D", paddingRight: "4.5rem"}}>CVV</label>
                </div>

                <div style={{display: "flex", justifyContent: "space-between", marginTop: "-5rem", marginRight: "8rem", marginBottom: "1rem"}}>
                <input style={{width: "75%", 
                borderRadius: "5px", 
                paddingTop: "1.5rem", 
                border: "none",
                background: "#F3F5F7"
            }}
                    handleChange={handleOnchangeStart}
                    value={values.name}
                    optionData={['Start Date']}
                    placeholder="MM/YY"
                    name="start"
                    />

                <input style={{width: "75%", 
                borderRadius: "5px",
                paddingTop: "1.5rem", 
                marginRight: "-7.7rem", 
                border: "none",
                background:"#F3F5F7"
            }}
                    handleChange={handleOnchangeEnd}
                    value={values.name}
                    optionData={['End Date']}
                    placeholder="E.g 123"
                    name="end"
                    />
                </div>

                <div>
                    <ReusableButton text="Pay NGN 2,800" padding="1rem 7.8rem" background= "#204ECF" borderRadius="5px" fontSize="16px" />
                </div>

                <div class="cancel" style={{border: "1px solid rgba(212, 211, 211, 0.5)", background: "#FFFFFF", width: "120px", marginLeft: "8rem", marginTop: "1.5rem", height: "2rem", cursor: "pointer"}}>
                    <span style={{fontSize: "10px", color: "#8E8E8E"}}>
                        Cancel Payment
                    </span>
                </div>
            </form>
        </div>
    )
}

export default AddCard;