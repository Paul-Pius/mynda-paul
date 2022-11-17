import React from "react";
import "../../../assets/styles/global-styles.css";
import "./message.css";
import arrowL from "../../../assets/images/arrowL.svg";

function Message() {
  return (
    <>
      <div className="o-container">
        <header className="message-header">
          <div className="message-header-arrow">
            <img src={arrowL} alt="Go back"></img>
          </div>
          <div className="message-header-text">
            <h4>Message</h4>
          </div>
        </header>

        <div className="message-body-container"></div>
      </div>
    </>
  );
}

export default Message;
