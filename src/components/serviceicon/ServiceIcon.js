import React from "react";
import './service-icon.css';
import '../navbar/navbar.css';

const ServiceIcon = (props) => {
	return (
    <>
      <div className="list-div-2">
        {props.serviceIcon}
        <li>Services</li>
      </div>
    </>
  );
}

export default ServiceIcon;
