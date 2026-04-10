import React from "react";
import { bloglist } from "./read-more-blogs";
import { Link } from "react-router-dom";

const ProductBlogs = () => {
  const sortedBlogs = [...bloglist].sort((a, b) => b.number - a.number);

  const truncateTitle = (text, limit = 8) => {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  return (
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
            </div>
          </div>
        </div>{" "}
        <div className="text-center  py-3">
          <Link
            to="/read-more-blogs"
            className="btn text-white px-4 py-2 read-more-blogs-btn"
          >
            Read More Blogs...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductBlogs;
