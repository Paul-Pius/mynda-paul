import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import "./VerifyNumber.css";


function VerifyOTP() {


    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if(isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if(element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleClick = () => {

    }

    return (
        <div className="container-verify">
            <form className="otpForm">
            <div className="col text-center">
                <h3 className="verify">Verify Number with OTP</h3>
                <div className="verify">
                    <p className="parag1">kindly enter the 4 digits code sent</p>
                    <p className="parag2">to the number ending in ....</p>
                </div>

                {otp.map((data, index) => {
                    return (
                        <input
                            className="otp-field"
                            type="text"
                            name="otp"
                            maxLength="1"
                            key={index}
                            value={data}
                            onChange={e => handleChange(e.target, index)}
                            onFocus={e => e.target.select()} 
                        />
                        )
                    })}
                    <div className="resendotp">
                        <p className="resendotp1">Resend OTP</p> 
                        <p>00:20</p>
                    </div>
            </div>
            <ReusableButton onClick={handleClick} text="Next" padding="1rem 9rem" background = "#D4D3D3" borderRadius="5px" fontSize="16px"/>
            </form>
        </div>
    )
}

export default VerifyOTP;