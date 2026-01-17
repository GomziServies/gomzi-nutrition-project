import React from "react";

import { Link } from "react-router-dom";

export const bloglist = [
  {
    number: 7,
    title: "How to Educate Consumers about Safe & Effective Nutraceutical Use",
    url: "/blogs/how-to-educate-consumers-about-safe-effective-nutraceutical-use",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/nutrition/how-to-educate-consumers-about-safe-01.webp",
  },
  {
    number: 6,
    title:
      " From Mass Production to Micro-Batches: How to Launch a Personalized Supplement Line",
    url: "/blogs/from-mass-production-to-micro-batches-how-to-launch-a-personalized-supplement-line",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/nutrition/from-mass-production-to-micro-batches-how-to-launch-a-personalized-supplement-line-03.png",
  },
  {
    number: 5,
    title:
      "  Start Your Supplement Brand: Low MOQ Nutra Manufacturers in India",
    url: "/blogs/how-to-launch-a-supplement-brand-with-low-moq-manufacturers-the-2026-startup-blueprint",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/nutrition/how-to-launch-a-supplement-brand03-02.jpg",
  },
  {
    number: 4,
    title:
      "    Whey Isolate vs. Concentrate: Which One Actually Delivers Better Results in 2026?",
    url: "/blogs/whey-isolate-vs-concentrate-which-one-actually-delivers-better-results-in-2026",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/nutrition/Depositphotos_146062285_S.webp",
  },
  {
    number: 3,
    title: "Top Supplements for Weight Gain: A Comparative...",
    url: "/blogs/top-supplements-for-weight-gain",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/nutrition/top-supplements-for-weight-gain-main.webp",
  },
  {
    number: 2,
    title: " How Supplements Help you live a healthy life.",
    url: "/blogs/how-supplements-help-you-live-healthy-life",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/nutrition/how-supplements-help-you-live-healthy-life-1.webp",
  },
  {
    number: 1,
    title: "The Ultimate Guide to the Best Whey Protein...",
    url: "/blogs/best-whey-protein-in-india",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/nutrition/best-whey-protein-in-india-main.webp",
  },
];

const Readmoreblogs = () => {
  const truncateTitle = (text, limit = 8) => {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  const sortedBlogs = [...bloglist].sort((a, b) => b.number - a.number);

  return (
    <section className="bg-secondaryyyy py-5">
      <div className="container-fluid w-80">
        <div className="row py-4">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <div className="col items-center d-flex justify-content-center">
              <h2 className="f-rob-bol f-30 text-black text-uppercase ">
                All Blogs
              </h2>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="row col-12 pr-0">
              {sortedBlogs.map((blog, index) => (
                <div
                  className="col-md-6 col-lg-4 col-xl-4 pr-0 mb-3"
                  key={index}
                >
                  <Link to={blog.url} className="cp">
                    <div className="blog-product-card-main">
                      <div className="blog-product-card bg-white br-15">
                        <span className="lazy-load-image-background blur lazy-load-image-loaded d-inline-block">
                          <img
                            alt="blog cover"
                            className="img-fluid product-img"
                            src={blog.imgSrc}
                          />
                        </span>
                        <div className="col-12 py-3">
                          <div className="row align-items-center">
                            <div className="col-10 text-left">
                              <p className="m-0 f-pop-bol f-16 text-black">
                                {truncateTitle(blog.title, 10)}
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
              ))}
              {/* 
              <div className="col-md-6 col-lg-4 col-xl-4 pr-0 mb-3">
                <Link to="" className="cp">
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
              </div> */}
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Readmoreblogs;
