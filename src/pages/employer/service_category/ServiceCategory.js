import React from "react";
import '../../../assets/styles/global-styles.css';
import './service-category.css';
import '../home/home.css';
import arrowL from "../../../assets/images/arrowL.svg";

import househelp from '../home/images/househelp.svg';
import driver from '../home/images/driver.svg';
import gardner from '../home/images/gardner.svg';
import cook from '../home/images/cook.svg';
import nurse from '../home/images/nurse.svg';
import bouncer from '../home/images/bouncer.svg';
import bodyguard from './images/bodyguard.svg';
import drycleaner from './images/drycleaner.svg';
import messenger from './images/messenger.svg';
import teacher from './images/teacher.svg';

function ServiceCategory () {
	return (
    <>
      <div className="service-category-header">
        <div>
          <a href= "/employer/home">
            <img src={arrowL} alt="back"></img>
          </a>
        </div>
        <h4>Service Category</h4>
      </div>
      <div className="container">
        <div className="category-search-bar">
          <input type="select" placeholder="Search job category"></input>
        </div>
        <section className="service-category">
          <div className="service-category-row">
            <div className="h-help">
              <img src={househelp} alt="placeholder"></img>
            </div>
            <div className="c-cook">
              <img src={cook} alt="placeholder"></img>
            </div>
            <div className="nurses">
              <img src={nurse} alt="placeholder"></img>
            </div>
          </div>
          <div className="service-category-row">
            <div className="driver">
              <img src={driver} alt="placeholder"></img>
            </div>
            <div className="gardner">
              <img src={gardner} alt="placeholder"></img>
            </div>
            <div className="bouncer">
              <img src={bouncer} alt="placeholder"></img>
            </div>
          </div>
          <div className="service-category-row">
            <div className="drycleaner">
              <img src={drycleaner} alt="placeholder"></img>
            </div>
            <div className="bodyguard">
              <img src={bodyguard} alt="placeholder"></img>
            </div>
            <div className="teacher">
              <img src={teacher} alt="placeholder"></img>
            </div>
          </div>
          <div className="service-category-row">
            <div className="messenger">
              <img src={messenger} alt="placeholder"></img>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ServiceCategory;