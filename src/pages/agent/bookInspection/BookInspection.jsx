import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import SelectField from "../../../components/my-component/SelectField";
import Text from "../../../components/my-component/TextArea";
import "./BookInspection.css";


function BookInspection() {

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const [values, setValues] = useState({
        inputOne: "",
        date: ""
      });


    function handleOnchangeinput (e)  {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    function handleOnchageDate (e)  {
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
        
        <div className="container-book">
            <form className="fom-about-book" onSubmit={handleSubmit}>
            {submitted && valid ? <div className="success-message">Success!</div> : null}
                <div className="telushead">
                    <h3 style={{paddingTop: "10rem", textAlign: "center", color: "#1D1D1D"}}>Book Inspection</h3>
                    <div>
                        <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px", marginBottom: "1rem"}}/>
                    </div>
                    <p style={{color: "#8E8E8E", fontStyle: "italic", textAlign: "center"
                        }}>Book inspection to check on your</p><br />
                        <p style={{marginTop: "-1.5rem", color: "#8E8E8E", fontStyle: "italic"}}>Employees/Myndas</p>
                </div>

                <p className="head">Select employed mynda you want to inspect</p>
                <SelectField
                label=""
                optionData={['Select---', 'name', 'names']}
                value={values.inputOne}
                handleChange={handleOnchangeinput}
                name="inputOne"
                />

                <label className="" style={{marginRight: "15rem"}}>Date and Time</label>
                <input style={{borderRadius: "5px", width: "90%"}}
                onChange={handleOnchageDate}
                value={values.date}
                type="date"
                className="form-field-about"
                placeholder="MM/DD/YY"
                name="date"
                />
                <label className="" style={{marginRight: "12rem"}}>Message to employee</label>
                <Text />
                <div>
                    <ReusableButton text="Submit" padding="1rem 9.3rem" background= "#204ECF" borderRadius="5px" fontSize="16px"/>
                </div>
            </form>
        </div>
    )
}

export default BookInspection;