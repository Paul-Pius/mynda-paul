import React from "react";


function ReusableButton(props) {
    const {text, padding, background, borderRadius, fontSize} = props

    return (
            <button style={{padding: padding, background: background, borderRadius: borderRadius, fontSize: fontSize}}>
                {text}
            </button>
    )
}

export default ReusableButton;