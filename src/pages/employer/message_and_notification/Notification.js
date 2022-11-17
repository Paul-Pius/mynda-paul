import React from "react";
import "../../../assets/styles/global-styles.css";
import './message.css';
import arrowL from '../../../assets/images/arrowL.svg';


function Notification () {
	return (
    <>
      <div className="o-container">
        <header className="message-header">
          <div className="message-header-arrow">
            <img
              src={arrowL}
              alt="placeholder"
            ></img>
          </div>
          <div className="message-header-text">
            <h4>Notification</h4>
          </div>
        </header>
      </div>
    </>
  );

}

export default Notification;