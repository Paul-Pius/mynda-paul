import React from "react";
import verification from "./images/verification.svg";
import ellipse from "./images/ellipse.png";
import './onboarding.css';
import '../../assets/styles/global-styles.css';


function Onboarding3 () {
	return (
		<>
		<div className= "ob-body">
			<div className= "verification">
				<img src={verification} alt="placeholder"></img>
			</div>

			<div className= "ob-text">
				<h4>Reliable platform connecting employers and artisans</h4>
				<p>We ensure proper verification process for all artisans which includes KYC, police verification and so on.</p>
			</div>

			<div className= "ellipse-container">
				<img className= "ellipse" src= {ellipse} alt= "ellipse dot"></img>
				<img className= "ellipse" src= {ellipse} alt= "ellipse dot"></img>
				<img className= "ellipse" src= {ellipse} alt= "ellipse dot"></img>
			</div>
			<div>
				<a href="/roles"><button className= "ob-button">Get Started</button></a>
			</div>
		</div>
		</>
	)
}

export default Onboarding3;