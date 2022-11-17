import React, { useState } from "react";
import MultiSelect from "multiselect-react-dropdown";


function MultipleSelect() {

    const skills = [
        {Skill: "Groceries", id: 1},
        {Skill: "Baby care", id: 2},
        {Skill: "Sewing", id: 3}
    ]
    
    const [options] = useState(skills)

    return (
        <div style={{width: "99%", display: "flex", background: "#F3F5F7", height: "120%", border: "none"}}>
            <div style={{backgroundColor: "#F3F5F7", width: "100%", height: '3.2rem'}}>
                <MultiSelect options={options} displayValue="Skill" placeholder="Add skill" style={{height: 'rem'}}/>
            </div>
        </div>
    )
}

export default MultipleSelect;


