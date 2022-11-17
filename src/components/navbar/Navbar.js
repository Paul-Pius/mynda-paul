import './navbar.css';
import homeicon from "./images/homeicon.svg";
import savedicon from "./images/savedicon.svg";
import walleticon from "./images/walleticon.svg";
import { IoIosMore } from "react-icons/io";
import ServiceIcon from "../serviceicon/ServiceIcon";

function Navbar(props) {
  let serviceIcon = <img src={props.icon} alt="icon"></img>;

  return (
    <>
      <nav className="nav-bar">
        <ul>
          <div className="list-div">
            <img src={homeicon} alt="placeholder"></img>
            <li className="home-active">Home</li>
          </div>
          <ServiceIcon serviceIcon={serviceIcon} />
          <div className="list-div">
            <img src={savedicon} alt="placeholder"></img>
            <li>Saved</li>
          </div>
          <div className="list-div-2">
            <img src={walleticon} alt="placeholder"></img>
            <li>Wallet</li>
          </div>
          <div className="list-div">
            <IoIosMore className="more-icon" />
            <li>More</li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
