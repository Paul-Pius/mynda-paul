import React from "react";
import './signup.css';
import '../../../assets/styles/global-styles.css';
import arrowL from '../../../assets/images/arrowL.svg';

function Signup () {
	return (
		<>
		<div className="signup-body">
			<SignupForm/>
		</div>
		</>
	)
}

function SignupForm () {
	return (
		<>
		<div className= "signup-body">
			<div className="form-header">
				<img className= "form-header-arrow" src={arrowL} alt="placeholder"></img>
				<h3>Create Account</h3>
			</div>
				<form>
					<div className="form-items">
						<FormItem name="name" type="text" placeholder="First and last name" label="Name">
						</FormItem>
						<FormItem name="email" type="email" placeholder="Eg @gmail.com" label="Email">
						</FormItem>
						<FormItem name="phoneNumber" type="text" placeholder="Eg +234" label="Phone Number">
						</FormItem>
						{/* <label for="drop-down">Gender:</label><select name="drop-down" id="drop-down"><option value="one">One</option><option value="two">Two</option><option value="three">Three</option></select> */}
						<FormItem name="gender" type="select" placeholder="Select one..." label="Gender">
						</FormItem>
						<FormItem name="residentialAddress" type= "text-area" placeholder="House No, street, state" label="Residential Address">
						</FormItem>
						<FormItem name="password" type="password" placeholder="Enter password" label="Password">
						</FormItem>
						<FormItem name="retypePassword" type="password" placeholder="Retype Password" label="Retype Password">
						</FormItem>
					</div>
				</form>
				<div className="terms-and-conditions-link">
					<p>By clicking "Signup", you accept the <a href= 'https://google.com' target= "_blank" rel= "noreferrer">Terms of service and Privacy Policy</a></p>
				</div>
				<div className= "btn-container">
					<button className= "signup-btn">Next</button>
				</div>
				<div className= "existing-user-alt">
					<p>Already have an account? <a href= '/employer/login'>Login</a></p>
				</div>
			</div>
		</>
	)
	
}

function FormItem (props) {
	const {Icon} = props;
	return (
       <form>
        <div className="form-item">
            <label className='forms-items' htmlFor={props.name}>{props.label}</label>
              <div className='input-container'>
                <span>
                {
                  Icon && (
                    <Icon />
                  )
                }
                </span>
                <input type={props.type} className="form-control input" id={props.name}  placeholder={props.placeholder} onChange= {(e) => props.changeFunction(e) }/>
              </div>
        </div>
        </form>
	)

}

export default Signup;