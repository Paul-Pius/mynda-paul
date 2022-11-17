import React from "react";
import "./home.css";
import "../../../assets/styles/global-styles.css";
import MainHeader from "../../../components/main_header/MainHeader";
import Navbar from "../../../components/navbar/Navbar";

import { BiRightArrowAlt } from "react-icons/bi";
import kyc from "./images/kyc.svg";
import househelp from "./images/househelp.svg";
import cook from "./images/cook.svg";
import nurse from "./images/nurse.svg";
import driver from "./images/driver.svg";
import gardner from "./images/gardner.svg";
import bouncer from "./images/bouncer.svg";
import mfdagency from "../../../assets/images/mfdagency.svg";
import ruthdamagency from "../../../assets/images/ruthdamagency.svg";
import like from "../../../assets/images/like.svg";
import location from "../../../assets/images/location.svg";
import car from "./images/car.svg";
import professionalcleaner from "./images/professionalcleaner.svg";
import professionalbouncer from "./images/professionalbouncer.svg";
import lessonteacher from "./images/lessonteacher.svg";
import dp from "./images/dp.svg";
import SearchBar from "../../../components/search_bar/SearchBar";
import serviceicon from "./images/serviceicon.svg";

function HomePage() {
  let picture = dp;
  let icon = serviceicon;

  return (
    <>
      <div className="o-container">
        <MainHeader picture={picture}></MainHeader>
        <Navbar icon={icon}></Navbar>

        <div className="container">
          <SearchBar />

          <section className="kyc-verification">
            <div>
              <h3>Complete your profile KYC to continue</h3>
              <button>Get started</button>
            </div>
            <div>
              <img src={kyc} alt="placeholder"></img>
            </div>
          </section>

          <div className="category-description">
            <h4>Service Category</h4>
            <a href="/employer/service_category">See all</a>
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
          </section>

          <div className="category-description">
            <h4>Agencies</h4>
            <a href="/employer/agencies">See all</a>
          </div>
          <section className="agency-category">
            <div className="agency-category-row">
              <div className="agency-category-col">
                <div>
                  <img className="agency-img" src={mfdagency} alt=""></img>
                </div>
                <div className="agency-link">
                  <span>Agency</span>
                </div>
              </div>
              <div className="agency-category-col">
                <div className="agency-name">
                  <h4>MFD Agency</h4>
                </div>
                <div className="location">
                  <img src={location} alt="placeholder"></img>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="category-tag">
                  <div>
                    <p>Category/Service</p>
                  </div>
                  <div className="category-tag-links">
                    <span>Maids</span>
                    <span>Cooks</span>
                  </div>
                </div>
              </div>
              <div className="agency-category-col-img">
                <img src={like} alt="placeholder"></img>
              </div>
            </div>

            <div className="agency-category-row">
              <div className="agency-category-col">
                <div>
                  <img className="agency-img" src={ruthdamagency} alt=""></img>
                </div>
                <div className="agency-link">
                  <span>Agency</span>
                </div>
              </div>
              <div className="agency-category-col">
                <div className="ruthdam-agency-name">
                  <h4>Ruthdam Agency</h4>
                </div>
                <div className="location">
                  <img src={location} alt="placeholder"></img>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="ruthdam-category-tag">
                  <div>
                    <p>Category/Service</p>
                  </div>
                  <div className="category-tag-links">
                    <span>Maids</span>
                    <span>Cooks</span>
                  </div>
                </div>
              </div>
              <div className="ruthdam-agency-category-col-img">
                <img src={like} alt="placeholder"></img>
              </div>
            </div>

            <div className="agency-category-row">
              <div className="agency-category-col">
                <div>
                  <img className="agency-img" src={mfdagency} alt=""></img>
                </div>
                <div className="agency-link">
                  <span>Agency</span>
                </div>
              </div>
              <div className="agency-category-col">
                <div className="agency-name">
                  <h4>MFD Agency</h4>
                </div>
                <div className="location">
                  <img src={location} alt="placeholder"></img>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="category-tag">
                  <div>
                    <p>Category/Service</p>
                  </div>
                  <div className="category-tag-links">
                    <span>Maids</span>
                    <span>Cooks</span>
                  </div>
                </div>
              </div>
              <div className="agency-category-col-img">
                <img src={like} alt="placeholder"></img>
              </div>
            </div>
          </section>

          <section className="ad-category">
            <div className="ad-category-text">
              <h4>Transportation just got easier</h4>
              <div className="ad-category-text-2">
                <p>Ride with bolt today</p>
                <span>
                  <BiRightArrowAlt className="right-arrow" />
                </span>
              </div>
            </div>
            <div className="ad-category-img">
              <img src={car} alt="placeholder"></img>
            </div>
          </section>

          <div className="category-description">
            <h4>Top Myndas</h4>
            <a href="#">See all</a>
          </div>
          <section className="mynda-category">
            <div className="mynda-category-row">
              <div className="mynda-category-col">
                <div className="cleaner-img">
                  <img src={professionalcleaner} alt=""></img>
                </div>
              </div>
              <div className="mynda-category-col">
                <div className="mynda-agency-name">
                  <h4>Professional Cleaner</h4>
                </div>
                <div className="mynda-location">
                  <img src={location} alt="placeholder"></img>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="price-tag">
                  <p>Posted 2 hours ago</p>
                  <h4>60,000</h4>
                </div>
              </div>
              <div className="mynda-category-col-img-1">
                <img src={like} alt="placeholder"></img>
              </div>
            </div>

            <div className="mynda-category-row">
              <div className="mynda-category-col">
                <div className="cleaner-img">
                  <img src={professionalbouncer} alt=""></img>
                </div>
              </div>
              <div className="mynda-category-col">
                <div className="mynda-agency-name">
                  <h4>Professional Bouncer</h4>
                </div>
                <div className="mynda-location">
                  <img src={location} alt="placeholder"></img>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="price-tag">
                  <p>Posted 22 hours ago</p>
                  <h4>80,000</h4>
                </div>
              </div>
              <div className="mynda-category-col-img-2">
                <img src={like} alt="placeholder"></img>
              </div>
            </div>

            <div className="mynda-category-row">
              <div className="mynda-category-col">
                <div className="cleaner-img">
                  <img src={lessonteacher} alt=""></img>
                </div>
              </div>
              <div className="mynda-category-col">
                <div className="mynda-agency-name">
                  <h4>Lesson Teacher</h4>
                </div>
                <div className="mynda-location">
                  <img src={location} alt="placeholder"></img>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="price-tag">
                  <p>Posted 22 hours ago</p>
                  <h4>80,000</h4>
                </div>
              </div>
              <div className="mynda-category-col-img-3">
                <img src={like} alt="placeholder"></img>
              </div>
            </div>
          </section>
        </div>
        <div className="bottom-margin"></div>
      </div>
    </>
  );
}

export default HomePage;
