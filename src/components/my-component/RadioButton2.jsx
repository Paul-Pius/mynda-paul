import React, { useState } from "react";



function RadioButton2() {

    const [radio, setRadio] = useState({
        yes: ""
    })

    const handleChange2 = event => {
        const target = event.target
        const name = target.name
        const value = target.value
        setRadio({
            ...radio,
            [name]: value
        }) 
    }
    return (
        <form>
            <div style={{marginTop: "1rem"}}>
                <input type="radio" name="yes" value="yes" onChange={handleChange2}/>
                <label style={{color: "#8E8E8E"}}> No </label>
                <input type="radio" name="yes" value="no" onChange={handleChange2}/>
                <label style={{color: "#8E8E8E"}}> Yes </label>
            </div>
        </form>
    )
}

export default RadioButton2;