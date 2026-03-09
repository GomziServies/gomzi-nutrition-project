import React from "react";
import { Link } from "react-router-dom";
import NutritionHeader from "../partials/Header/nutritionsheader";
import NutritionFooter from "../partials/Footer/nutritionfooter";

export const whitelabelBloglist = [
  {
    number: 10,
    title: "How to Educate Consumers About Safe & Effective Nutraceutical Use?",
    url: "/blogs/how-to-educate-consumers-about-safe-effective-nutraceutical-use",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-to-educate-consumers-about-safe-effective-nutraceutical-use.webp",
  },
  {
    number:9,
    title:
      "What Supplements Actually Work? Debunking 7 Common Nutraceutical Myths",
    url: "/blogs/what-supplements-actuallywork-debunking-7common-nutraceutical-myths",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/what-supplements-actuallywork-debunking-7common-nutraceutical-myths.webp",
  },
  {
    number: 8,
    title:
      "Maximize Profit & Quality: Your Guide to Private Label Manufacturing in India",
    url: "/blogs/maximize-profit-quality-your-guide-to-private-label-manufacturing-in-india",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/maximize-profit-quality-private-label-manufacturing-guide-india.webp",
  },
  {
    number: 7,
    title:
      "GMP Audit Guide for Nutraceutical Manufacturers: Step-by-Step Process (2025)",
    url: "/blogs/gmp-audit-guide-for-nutraceutical-manufacturers-step-by-step-process-2025",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/gmp-audit-guide-for-nutraceutical-manufacturers-step-by-step-process-2025.webp",
  },
  {
    number: 6,
    title: "Top 10 Third Party Beverage Manufacturers in India for Startups",
    url: "/blogs/top-10-third-party-beverage-manufacturers-in-india-for-startups",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/top-10-third-party-beverage-manufacturers-in-india-for-startups.webp",
  },
  {
    number: 5,
    title:
      "The Startup's Guide: Finding Low MOQ Nutraceutical Manufacturers (2025)",
    url: "/blogs/the-startup's-guide-finding-low-moq-nutraceutical-manufacturers-2025",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-to-educate-1.webp",
  },
  {
    number: 4,
    title:
      "The 7 Best Third-Party Tested Protein Powders (2026 Guide): Reddit Favorites vs. Lab Results",
    url: "/blogs/the-7-best-third-party-tested-protein-powders-2026-guide-reddit-favorites-vs-lab-results",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/top-7-third-party-tested-brands-of-2026(1).webp",
  },
  {
    number: 3,
    title: "How to Manufacture Export-Ready Nutraceutical Products in India",
    url: "/blogs/how-to-manufacture-export-ready-nutraceutical-products-in-india",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-to-manufacture-export-ready-nutraceutical-products-in-india.webp",
  },
  {
    number: 2,
    title:
      "How to Start a Private Label Supplement Brand in India: Step-by-Step Guide",
    url: "/blogs/how-to-start-a-private-label-supplement-brand-in-india",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/view-healthy-food.webp",
  },
  {
    number: 1,
    title:
      "Why Your Brand's Success Depends on the Right Manufacturing Partner",
    url: "/blogs/why-partnering-with-the-right-contract-manufacturer",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/istock.webp",
  },
];

const Readmorewhitelabelblogs = () => {
  const truncateTitle = (text, limit = 60) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  const sortedBlogs = [...whitelabelBloglist].sort(
    (a, b) => b.number - a.number,
  );

  return (
    <>
      <NutritionHeader />

      <section className="bg-secondaryyyy py-5">
        <div className="container-fluid w-80">
          <div className="row py-4">
            <div className="col-12 d-flex align-items-center justify-content-between pt-4 mt-4">
              <div className="col items-center d-flex justify-content-center">
                <h2 className="f-rob-bol f-30 text-black text-uppercase">
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
                              style={{
                                height: "260px",
                                width: "394px",
                                objectFit: "cover",
                              }}
                              src={blog.imgSrc}
                            />
                          </span>
                          <div className="col-12 py-3">
                            <div className="row align-items-center">
                              <div className="col-10 text-left">
                                <p className="m-0 f-pop-bol f-16 text-black">
                                  {truncateTitle(blog.title)}
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <NutritionFooter />
    </>
  );
};

export default Readmorewhitelabelblogs;
