import React from "react";
import maid from "./images/maid.svg";
import ellipse from "./images/ellipse.png";
import './onboarding.css';
import '../../assets/styles/global-styles.css';


function Onboarding1 () {
	return (
		<>
		<div className= "ob-body">
			<div className= "skip">
				<p>Skip</p>
			</div>
			<div>
				<img className= "maid" src={maid} alt="placeholder"></img>
			</div>

			<div className= "ob-text">
				<h4>Enjoy verified maid services</h4>
				<p>You don’t need to stress too much, with Mynda you can access to verified maids from the comfort of your home.</p>
			</div>

			<div className= "ellipse-container">
				<img className= "ellipse" src= {ellipse} alt= "ellipse dot"></img>
				<img className= "ellipse" src= {ellipse} alt= "ellipse dot"></img>
				<img className= "ellipse" src= {ellipse} alt= "ellipse dot"></img>
			</div>
			<div>
				<a href= "/onboarding_2"><button className= "ob-button">Next</button></a>
			</div>
		</div>
		</>
	)
}

export default Onboarding1;