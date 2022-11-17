import React from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import "./Congrat.css";



function Congrat() {

    return (
        <div className="container-congrat">
            <form className="congratf">
                <h3 className="btnh">Congratulations</h3>
                <p className="acc">Account creation successful</p>
                <ReusableButton text="Login to your account" padding="1rem 5rem" background= "#204ECF" borderRadius="5px" fontSize="16px"/>
            </form>
        </div>
    )
}

export default Congrat;