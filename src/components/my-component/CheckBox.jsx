import React, { useState } from "react";

function CheckBox() {

    const [formData, setFormData] = useState();

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        
        setFormData({
            ...formData,
            [name]: value
        }) 
    };

    return (
        <form>
            <div style={{marginBottom: "-1.5rem"}}>
                <input type="checkbox" name="checkbox" value="check" onChange={handleChange}/>
                <label style={{color: "#8E8E8E"}}>I still work here</label>
            </div>
        </form>
    )
}

export default CheckBox;