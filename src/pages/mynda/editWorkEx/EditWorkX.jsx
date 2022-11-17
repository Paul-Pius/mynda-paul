import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import SelectField from "../../../components/my-component/SelectField";
import CheckBox from "../../../components/my-component/CheckBox";
import Text from "../../../components/my-component/TextArea";
import "./EditWorkX.css";


function EditWorkX() {

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

    const handleTitleInputChange = (event) => {
        setValues({...values, title: event.target.value})
        console.log(event.value)
      }

    const handleCompanyNameInputChange = (event) => {
        setValues({...values, companyname: event.target.value})
        console.log(event.value)
      }

    const handleLocationInputChange = (event) => {
        setValues({...values, location: event.target.value})
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
        
        <div className="container-editwork">
            <form className="fom-edit-experience" onSubmit={handleSubmit}>
            {submitted && valid ? <div className="success-message">Success!</div> : null}
                <div className="telushead">
                    <h3 style={{padding: "1rem", color: "#1D1D1D", textAlign: "center", marginTop: "8rem"}}>Edit Work Experience</h3>
                    <div>
                        <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px", marginBottom: "1rem"}}/>
                    </div>
                    <h3 style={{color: "#1D1D1D", marginBottom: "-1rem", textAlign: "left"
                                }}>Edit Work Experience</h3>
                </div>

                <label style={{marginRight: "20.5rem"}}>Title</label>
                <input style={{width: "98%", borderRadius: "5px", marginBottom: "1rem"}}
                onChange={handleTitleInputChange}
                value={values.title}
                className="form-field"
                placeholder="E.g House cleaner"
                name="Title"
                />

                <label style={{marginRight: "14.5rem"}}>Employment Type</label>
                <SelectField
                optionData={['Select Employment Type', 'Fulltime', 'Part-time', 'Contract']}
                value={values.employment}
                handleChange={handleOnchangeEmployment}
                name="employment" 
                />

                <label style={{marginRight: "15rem"}}>Company Name</label>
                <input style={{width: "98%", borderRadius: "5px", marginBottom: "1rem"}}
                onChange={handleCompanyNameInputChange}
                value={values.name}
                className="form-field"
                placeholder="E.g Microsoft"
                name="company name"
                />

                <label style={{marginRight: "18.5rem"}}>Location</label>
                <input style={{width: "98%", borderRadius: "5px", marginBottom: "1rem"}}
                onChange={handleLocationInputChange}
                value={values.name}
                className="form-field"
                placeholder="Street, City, State"
                name="location"
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
                
                <div  style={{marginBottom: "0.5rem"}}>
                    <label style={{marginRight: "17.5rem"}}>Description</label>
                </div>
                <div>
                    <Text placeholder= "Add brief description"/>
                </div>

                <div>
                    <ReusableButton text="Save" padding="1rem 10.2rem" background= "#204ECF" borderRadius="5px" fontSize="16px"/>
                </div>
            </form>
        </div>
    )
}

export default EditWorkX;