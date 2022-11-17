import React, { useState } from "react";



function RadioButton() {

    const [formData, setFormData] = useState({
        yes: ""
    })

    const handleChange = event => {
        const target = event.target
        const name = target.name
        const value = target.value
        setFormData({
            ...formData,
            [name]: value
        }) 
    }

    return (
        <form>
            <div style={{marginBottom: "-1.5rem"}}>
                <input type="radio" name="yes" value="yes" onChange={handleChange}/>
                <label style={{color: "#8E8E8E"}}> No </label>
                <input type="radio" name="yes" value="no" onChange={handleChange}/>
                <label style={{color: "#8E8E8E"}}> Yes </label>
            </div>
        </form>
    )
}

export default RadioButton;