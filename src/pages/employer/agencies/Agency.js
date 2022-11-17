import React from "react";
import "../../../assets/styles/global-styles.css";
import "./agencies.css";
import arrowL from "../../../assets/images/arrowL.svg";
import mfdagency from "../../../assets/images/mfdagency.svg";
import like from "../../../assets/images/like.svg";
import location from "../../../assets/images/location.svg";


function Agency () {
	return (
    <>
      <div className="o-container agencies-body">
        <header className="message-header">
          <div className="message-header-arrow">
            <a href="/home">
              <img src={arrowL} alt="placeholder"></img>
            </a>
          </div>
          <div className="message-header-text">
            <h4>Agencies</h4>
          </div>
        </header>

        <div className="container">
          <section className="agencies-category">
            <div className="agencies-category-row">
              <div className="agencies-category-col">
                <div className="agencies-img-container">
                  <img className="agencies-img" src={mfdagency} alt=""></img>
                </div>
                <div className="agencies-link">
                  <span>Agency</span>
                </div>
              </div>
              <div className="agencies-category-col">
                <div className="agencies-name">
                  <h4>MFD Agency</h4>
                </div>
                <div className="agencies-location">
                  <img src={location} alt="placeholder"></img>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="agencies-category-tag">
                  <p>Category/Service</p>
                  <div className="agencies-category-tag-links">
                    <span>Maids</span>
                    <span>Cooks</span>
                  </div>
                </div>
              </div>
              <div className="agencies-category-col-img">
                <img src={like} alt="placeholder"></img>
              </div>
            </div>

            <div className="agencies-category-row">
              <div className="agencies-category-col">
                <div className="agencies-img-container">
                  <img className="agencies-img" src={mfdagency} alt=""></img>
                </div>
                <div className="agencies-link">
                  <span>Agency</span>
                </div>
              </div>
              <div className="agencies-category-col">
                <div className="agencies-name">
                  <h4>MFD Agency</h4>
                </div>
                <div className="agencies-location">
                  <img src={location} alt="placeholder"></img>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="agencies-category-tag">
                  <p>Category/Service</p>
                  <div className="agencies-category-tag-links">
                    <span>Maids</span>
                    <span>Cooks</span>
                  </div>
                </div>
              </div>
              <div className="agencies-category-col-img">
                <img src={like} alt="placeholder"></img>
              </div>
            </div>

            <div className="agencies-category-row">
              <div className="agencies-category-col">
                <div className="agencies-img-container">
                  <img className="agencies-img" src={mfdagency} alt=""></img>
                </div>
                <div className="agencies-link">
                  <span>Agency</span>
                </div>
              </div>
              <div className="agencies-category-col">
                <div className="agencies-name">
                  <h4>MFD Agency</h4>
                </div>
                <div className="agencies-location">
                  <img src={location} alt="placeholder"></img>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="agencies-category-tag">
                  <p>Category/Service</p>
                  <div className="agencies-category-tag-links">
                    <span>Maids</span>
                    <span>Cooks</span>
                  </div>
                </div>
              </div>
              <div className="agencies-category-col-img">
                <img src={like} alt="placeholder"></img>
              </div>
            </div>

            <div className="agencies-category-row">
              <div className="agencies-category-col">
                <div className="agencies-img-container">
                  <img className="agencies-img" src={mfdagency} alt=""></img>
                </div>
                <div className="agencies-link">
                  <span>Agency</span>
                </div>
              </div>
              <div className="agencies-category-col">
                <div className="agencies-name">
                  <h4>MFD Agency</h4>
                </div>
                <div className="agencies-location">
                  <img src={location} alt="placeholder"></img>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="agencies-category-tag">
                  <p>Category/Service</p>
                  <div className="agencies-category-tag-links">
                    <span>Maids</span>
                    <span>Cooks</span>
                  </div>
                </div>
              </div>
              <div className="agencies-category-col-img">
                <img src={like} alt="placeholder"></img>
              </div>
            </div>

            <div className="agencies-category-row">
              <div className="agencies-category-col">
                <div className="agencies-img-container">
                  <img className="agencies-img" src={mfdagency} alt=""></img>
                </div>
                <div className="agencies-link">
                  <span>Agency</span>
                </div>
              </div>
              <div className="agencies-category-col">
                <div className="agencies-name">
                  <h4>MFD Agency</h4>
                </div>
                <div className="agencies-location">
                  <img src={location} alt="placeholder"></img>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="agencies-category-tag">
                  <p>Category/Service</p>
                  <div className="agencies-category-tag-links">
                    <span>Maids</span>
                    <span>Cooks</span>
                  </div>
                </div>
              </div>
              <div className="agencies-category-col-img">
                <img src={like} alt="placeholder"></img>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Agency;