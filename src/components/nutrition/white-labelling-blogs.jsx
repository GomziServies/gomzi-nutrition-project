import React from "react";
import { Link } from "react-router-dom";
import { whitelabelBloglist } from "./Read-more-whitelabel-blogs";
import "../../assets/css/nutrition.css";
import "../../assets/css/blog.css";

const Whitelabellingblogs = () => {
  const sortedBlogs = [...whitelabelBloglist].sort(
    (a, b) => b.number - a.number,
  );

  const truncateTitle = (text, limit = 60) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <section className="bg-secondaryyyy">
      <div className="container-fluid w-80">
        <div className="row py-4">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <div className="col">
              <div className="certified-compliant-div">
                <h2 className="certified-compliant-div-h2 barlow-condensed-extra">
                  BLOGS
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="row col-12 pr-0">
              {sortedBlogs.slice(0, 3).map((blog, index) => (
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
                              <p className="m-0 inter-regular f-16 text-black">
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

        <div className="text-center py-3">
          <Link
            to="/read-more-white-labelling-blogs"
            className="btn text-white px-4 py-2 read-more-blogs-btn barlow-condensed-semi 
"
          >
            Read More Blogs...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Whitelabellingblogs;
