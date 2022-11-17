import React from "react";

import "./main-header.css";
import messageicon from "./images/messageicon.svg";
import notification from "./images/notification.svg";
import options from "./images/options.svg";
import ProfilePicture from "../profile_picture/ProfilePicture";

function MainHeader(props) {
  let DisplayPicture = <img src={props.picture} alt="display"></img>;

  return (
    <>
      <header className="main-header">
        <div className="user-info">
          <ProfilePicture DisplayPicture={DisplayPicture} />
          <div className="header-greeting">
            <h4>Good morning,</h4>
            <p>Welcome Abigail</p>
          </div>
        </div>

        <div className="main-header-icons">
          <div className="message-icon">
            <a href="/message">
              <img src={messageicon} alt="placeholder"></img>
            </a>
          </div>
          <div className="notification-icon">
            <a href="/notification">
              <img src={notification} alt="placeholder"></img>
            </a>
          </div>
          <div className="option-icon">
            <img src={options} alt="placeholder"></img>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
