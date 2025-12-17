import React from "react";
import { Link } from "react-router-dom";

const Whitelabellingblogs = () => {
  return (
    <>
      <section className="bg-secondaryyyy">
        <div className="container-fluid w-80">
          <div className="row py-4">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div className="col">
                <h2 className="f-rob-bol f-30 text-black text-uppercase">
                  Blogs
                </h2>
              </div>
            </div>
            <div className="col-12 mt-4">
              <div className="row justify-content-center mx-auto">
                <div className="col-md-6 col-lg-4 col-xl-4 pr-0 mb-3">
                  <Link
                    to="/blogs/how-to-start-a-private-label-supplement-brand-in-india"
                    className="cp"
                  >
                    <div className="blog-product-card-main">
                      <div className="blog-product-card bg-white br-15">
                        <span className="lazy-load-image-background blur lazy-load-image-loaded d-inline-block">
                          <img
                            alt="Cover for How to Start a Private Label Supplement Brand in India: Step-by-Step Guide blog"
                            className="img-fluid product-img"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/white-labelling-blogs/view-healthy-food.webp"
                            }
                          />
                        </span>
                        <div className="col-12 py-3">
                          <div className="row align-items-center">
                            <div className="col-10 text-left">
                              <p className="m-0 f-pop-bol f-16 text-black">
                                How to Start a Private Label Supplement Brand in
                                India...
                              </p>
                            </div>
                            <div className="col-2 text-right">
                              <i className="fas f-20 fa-arrow-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 pr-0 mb-3">
                  <Link
                    to="/blogs/why-partnering-with-the-right-contract-manufacturer"
                    className="cp"
                  >
                    <div className="blog-product-card-main">
                      <div className="blog-product-card bg-white br-15">
                        <span className="lazy-load-image-background blur lazy-load-image-loaded d-inline-block">
                          <img
                            alt="Cover for Why Your Brand's Success Depends on the Right Manufacturing Partner |
          Gomzi Nutrition"
                            className="img-fluid product-img"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/white-labelling-blogs/istock.webp"
                            }
                          />
                        </span>
                        <div className="col-12 py-3">
                          <div className="row align-items-center">
                            <div className="col-10 text-left">
                              <p className="m-0 f-pop-bol f-16 text-black">
                                Why Your Brand's Success Depends on the Right
                                Gomzi Nutrition...
                              </p>
                            </div>
                            <div className="col-2 text-right">
                              <i className="fas f-20 fa-arrow-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whitelabellingblogs;
