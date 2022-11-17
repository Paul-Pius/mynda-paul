import React from "react"

// type = {

// }

// type = {
//     name?: string,
//     id?: number,
//     text?: string,
//     value?: string,
//     optionData?: any,
//     label?: string,
//     placeholder?: string,
//     handleChange: (e) => void
// }

const SelectField = ({
    name,
    value,
    optionData,
    label,
    placeholder,
    handleChange,
}) => {

    return (
        <div className="select-group" style={{ marginBottom: "20px", width: ""}}>
            {label && <label className={"form--label"} style={{ color: '#F3F5F7' }}>{label}</label>}
            <select
                style={{ width: '98.5%', 
                height: '3.2rem', 
                backgroundColor: "#F3F5F7", 
                border: "none", 
                borderRadius: "5px",
                color: "#8E8E8E" 
            }}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            >
                {
                    optionData && optionData.map
                        (
                            (item, value) => (
                                <option>
                                    {item}
                                </option>
                            )
                        )
                }

            </select>
        </div>
    )
}

export default SelectField