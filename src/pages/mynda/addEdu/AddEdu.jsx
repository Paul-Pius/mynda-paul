import React, { useState } from "react";
import SelectField from "../../../components/my-component/SelectField";
import ReusableButton from "../../../components/my-component/ReusableB";
import CheckBox from "../../../components/my-component/CheckBox";
import "./AddEdu.css";


function AddEducation() {

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const [values, setValues] = useState({
        placeholder: "",
        start: "",
        end: ""
      });

    
    function handleOnchangeEmployment (e)  {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
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

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.name && values.phone && values.email && values.password && values.retypepassword) {
          setValid(true)
        }
        setSubmitted(true);
      }

    return (
        
        <div className="container-addedu" style={{marginRight: ""}}>
            <form className="fom-add-edu" onSubmit={handleSubmit}>
            {submitted && valid ? <div className="success-message">Success!</div> : null}
                <div className="telushead">
                    <h3 style={{padding: "2rem", color: "#1D1D1D", textAlign: "center", marginTop: "8rem"}}>Add Education</h3>
                    <div>
                        <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px", marginBottom: "1rem"}}/>
                    </div>
                    <h3 style={{color: "#1D1D1D", marginBottom: "-1rem", textAlign: "left"
                        }}>Add Education Level</h3>
                </div>

                <label className="head" style={{marginRight: "10.9rem"}}>Select Level of Education</label>
                <SelectField
                optionData={['Select ---']}
                value={values}
                handleChange={handleOnchangeEmployment}
                name="employment" 
                />

               
                <div style={{display: "flex", justifyContent: "space-between", marginRight: "7.5rem", paddingBottom: "5rem", color: "#1D1D1D"}}>
                    <label className="hea" style={{color: "#1D1D1D"}}>Start Date</label>
                    <label className="hea" style={{color: "#1D1D1D"}}>End Date</label>
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
                    type= "date"
                    placeholder="Start Date"
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
                    type= "date"
                    placeholder="End Date"
                    name="end"
                    />
                </div>
                <div style={{marginBottom: "2.5rem", paddingRight: "14.9rem"}}>
                    <CheckBox />
                </div>

                <span style={{color: "#204ECF", paddingRight: "18rem"}}>+ Add New</span>            

                <div>
                    <ReusableButton text="Submit" padding="1rem 9.7rem" background="#204ECF" borderRadius="5px" fontSize="16px"/>
                </div>
            </form>
        </div>
    )
}

export default AddEducation;