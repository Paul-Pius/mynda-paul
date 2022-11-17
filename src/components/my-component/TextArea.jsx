import React, { useState } from "react";
import "./TextArea.css";

function Text({
    placeholder, required, value, onChange
}) {

    const [body, setBody] = useState()
    
    return (
        <div className="messaget">
            <form>
                <textarea style={{
                    width: "98%", 
                    height: "6rem", 
                    backgroundColor: "#F3F5F7", 
                    border: "none", 
                    placeholder: "short description about your company", 
                    borderRadius: "5px", 
                }}
                placeholder= {placeholder}
                required = {required}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </form>
        </div>
    )
}

export default Text;
