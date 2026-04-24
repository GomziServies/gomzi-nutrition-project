import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import nutritionSendWhatsappMsg from "../../../assets/js/utils/nutritionSendWhatsappMsg";
import "../../../assets/css/nutrition.css";

function NutritionFooter() {
  return (
    <>
      <footer>
        <div className="container-fluid pt-5 pb-3 bg-black">
          <div className="container ">
            <div className="row ">
              <div className="col-md-3 f1 f2">
                <h4 className="mb-0 barlow-condensed-semi">
                  Gomzi Lifesciences LLP
                </h4>
                <p className="int-regular">
                  Your Trusted Partner for Premium Nutraceutical Manufacturing.
                </p>
                <div className="f2">
                  <p className="mb-2 mt-2 int-regular">
                    <Link to="tel:+918320077993">
                       +91 8320077993
                    </Link>
                  </p>
                  <p className="mb-4 int-regular">
                    <Link to="mailto:info@gomzilifesciences.in">
                      info@gomzilifesciences.in
                    </Link>
                  </p>
                </div>
              </div>

              <div className="col-md-2 f2">
                <h4 className="barlow-condensed-semi">Links</h4>

                <p className="mb-4">
                  <Link to="/nutrition/contact-us" target="_blank">
                    Contact Us
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="/aboutUs" target="_blank">
                    AboutUs
                  </Link>
                </p>
              </div>
              <div className="col-md-4 f2">
                <h4 className="barlow-condensed-semi">Information</h4>
                <p className="mb-3">
                  <Link to="/nutrition/terms-condition-customer">
                    Terms & Conditions
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/nutrition/return-and-refund-policy-customer">
                    Return & Refund
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/nutrition/privacy-policy-customer">
                    Privacy Policy
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/nutrition/cancellation-policy-customer">
                    Cancellation Policy
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/nutrition/pricing-policy-customer">
                    Pricing Policy
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/nutrition/shipping-policy-customer">
                    Shipping Policy
                  </Link>
                </p>
              </div>
              <div className="col-md-3 f2">
                <div className="f3 p-0">
                  <h4 className="barlow-condensed-semi">Follow Us</h4>
                  <Link
                    to="https://www.facebook.com/Gomzilifesciences"
                    className="fb"
                    aria-label="Follow us on Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link
                    to="https://www.instagram.com/gomzilifesciences/"
                    className="insta"
                    aria-label="Follow us on Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    to="https://www.youtube.com/@Gomzilifesciences"
                    className="you"
                    aria-label="Follow us on YouTube"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/gomzi-lifesciences-423558312/"
                    className="in"
                    aria-label="Follow us on LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </div>
                <div className="f2 mt-3">
                  <h4 className="mb-4 int-500 ft-pwu">Partner With Us</h4>
                  <p className="mb-3">
                    <Link
                      onClick={() =>
                        nutritionSendWhatsappMsg(
                          "Hello, I'm interested in becoming a distributor of Gomzi Lifescience.",
                          { pageRef: true },
                        )
                      }
                    >
                      Become a distributor
                    </Link>
                  </p>
                  <p className="mb-3">
                    <Link
                      onClick={() =>
                        nutritionSendWhatsappMsg(
                          "Hello, I'm interested in becoming an affiliate of Gomzi Lifescience.",
                          { pageRef: true },
                        )
                      }
                    >
                      Become an affiliate
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default NutritionFooter;
