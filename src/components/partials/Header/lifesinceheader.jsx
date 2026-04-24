import React from "react";
import UserInfo from "../../../assets/js/menu/userInfo";
import MobileUserInfo from "../../../assets/js/menu/mobileUserInfo";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../../assets/css/nutrition.css";

function LifesinceHeader() {
  function openside() {
    document.getElementById("demo").style.width = "100%";
  }

  function sideclose() {
    console.log("Closing side");
    document.getElementById("demo").style.width = "0px";
  }

  return (
    <>
      <div className="my-auto">
        <section className="header-main"></section>
      </div>
      <div className="container-fluid main p-0 m-0 lifescience-header-position">
        <div className="lifescience-header-position-div">
          <div className="d-lg-block d-none log-new">
            <Link to="/">
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "../assets/images/logo/gomzi-life-science-logo.webp"
                  }
                  width="100%"
                  alt="Fg Group"
                />
              </div>
            </Link>
          </div>
          <div className="d-lg-none d-sm-block t0 log1-new">
            <Link to="/">
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "../assets/images/logo/gomzi-life-science-logo.webp"
                  }
                  width="100%"
                  alt="Fg Group"
                />
              </div>
            </Link>
          </div>

          <div className="center-menu d-lg-block d-none">
            <ul className="center-menu-list">
              <li>
                <Link
                  to="/read-more-white-labelling-blogs"
                  className="inter-500"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" target="_blank" className="inter-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/nutrition/contact-us"
                  target="_blank"
                  className="inter-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="side" id="demo">
            <span className="closebtn" onClick={sideclose}>
              ×
            </span>
            <Link
              to="/nutrition"
              className="lifescience-header-position-div-mb-mt"
            >
              <img
                className="lazy"
                src={
                  process.env.PUBLIC_URL +
                  "../assets/images/logo/gomzi-life-science-logo.webp"
                }
                width="40%"
                alt="Fg Group"
              />
            </Link>

            <ul className="mobileUserInfo aa">
              <li>
                <Link
                  to="/read-more-white-labelling-blogs"
                  className="inter-500"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" target="_blank" className="inter-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/nutrition/contact-us"
                  target="_blank"
                  className="inter-500"
                >
                  Contact Us
                </Link>
              </li>

              <MobileUserInfo />
            </ul>
          </div>
          <span
            className="d-lg-none d-sm-block btnn cp lifescience-header-position-div-fts-color "
            onClick={openside}
          >
            ☰
          </span>

          <div className="login d-lg-block d-none">
            <ul>
              <UserInfo />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default LifesinceHeader;
