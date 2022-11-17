import React from "react";
import "./lab-home.css";
import "../../../assets/styles/global-styles.css";
import MainHeader from "../../../components/main_header/MainHeader";
import Navbar from "../../../components/navbar/Navbar";
import SearchBar from "../../../components/search_bar/SearchBar";
import dp from "./images/dp.svg";
import patienticon from "./images/patienticon.svg";
import femaledoctor from './images/femaledoctor.svg';

const LabHomePage = () => {
  let picture = dp;
  let icon = patienticon;

  return (
    <>
      <div className="o-container">
        <MainHeader picture={picture} />
        <Navbar icon={icon} />

        <div className="container">
          <SearchBar />
          <section className="lab-services">
            <div>
              <h3>Set up your Lab Services today</h3>
              <button>Get started</button>
            </div>
            <div>
              <img src={femaledoctor} alt="placeholder"></img>
            </div>
          </section>
          <div className="new-patient-orders">
            <div className="new-patient-orders-head">
              <h4></h4>
            </div>
            <div className="new-patient-orders-body"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabHomePage;
