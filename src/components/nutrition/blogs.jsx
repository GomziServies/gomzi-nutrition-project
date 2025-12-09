import React from "react";

import { Link } from "react-router-dom";

const ProductBlogs = () => {
  return (
    <section className="bg-secondaryyyy">
      <div className="container-fluid w-80">
        <div className="row py-4">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <div className="col">
              <h2 className="f-rob-bol f-30 text-black text-uppercase">Blogs</h2>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="row col-12 pr-0">
              <div className="col-md-6 col-lg-4 col-xl-4 pr-0 mb-3">
                <Link to="/blogs/top-supplements-for-weight-gain" className="cp">
                  <div className="blog-product-card-main">
                    <div className="blog-product-card bg-white br-15">
                      <span className="lazy-load-image-background blur lazy-load-image-loaded d-inline-block">
                        <img
                          alt="Cover for Top Supplements for Weight Gain blog"
                          className="img-fluid product-img"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/nutrition/top-supplements-for-weight-gain-main.webp"
                          }
                        />
                      </span>
                      <div className="col-12 py-3">
                        <div className="row align-items-center">
                          <div className="col-10 text-left">
                            <p className="m-0 f-pop-bol f-16 text-black">
                              Top Supplements for Weight Gain: A Comparative...
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
                  to="/blogs/how-supplements-help-you-live-healthy-life"
                  className="cp"
                >
                  <div className="blog-product-card-main">
                    <div className="blog-product-card bg-white br-15">
                      <span className="lazy-load-image-background blur lazy-load-image-loaded d-inline-block">
                        <img
                          alt="Cover for How Supplements Help You Live a Healthy Life blog"
                          className="img-fluid product-img"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/nutrition/how-supplements-help-you-live-healthy-life-1.webp"
                          }
                        />
                      </span>
                      <div className="col-12 py-3">
                        <div className="row align-items-center">
                          <div className="col-10 text-left">
                            <p className="m-0 f-pop-bol f-16 text-black">
                              How Supplements Help you live a healthy life.
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
                <Link to="/blogs/best-whey-protein-in-india" className="cp">
                  <div className="blog-product-card-main">
                    <div className="blog-product-card bg-white br-15">
                      <span className="lazy-load-image-background blur lazy-load-image-loaded d-inline-block">
                        <img
                          alt="Cover for The Ultimate Guide to the Best Whey Protein blog"
                          className="img-fluid product-img"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/nutrition/best-whey-protein-in-india-main.webp"
                          }
                        />
                      </span>
                      <div className="col-12 py-3">
                        <div className="row align-items-center">
                          <div className="col-10 text-left">
                            <p className="m-0 f-pop-bol f-16 text-black">
                              The Ultimate Guide to the Best Whey Protein...
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
  );
};

export default ProductBlogs;
