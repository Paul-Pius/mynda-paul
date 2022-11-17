import React from "react";
import access from "./images/access.svg";
import ellipse from "./images/ellipse.png";
import './onboarding.css';
import '../../assets/styles/global-styles.css';


function Onboarding2 () {
	return (
		<>
		<div className= "ob-body">
			<div className= "skip">
				<p>Skip</p>
			</div>
			<div>
				<img src={access} alt="placeholder"></img>
			</div>

			<div className= "ob-text">
				<h4>Reliable platform connecting employers and artisans</h4>
				<p>Get access to all different kinds of professional artisans with just a simple few clicks on your phone.</p>
			</div>

			<div className= "ellipse-container">
				<img className= "ellipse" src= {ellipse} alt= "ellipse dot"></img>
				<img className= "ellipse" src= {ellipse} alt= "ellipse dot"></img>
				<img className= "ellipse" src= {ellipse} alt= "ellipse dot"></img>
			</div>
			<div>
				<a href="/onboarding_3"><button className= "ob-button">Next</button></a>
			</div>
		</div>
		</>
	)
}

export default Onboarding2;