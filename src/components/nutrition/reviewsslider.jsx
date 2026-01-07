import React, { useRef, useState, useEffect } from "react";
import "../../assets/css/reviewsslider.css";
import "../../assets/css/about.css";

const ReviewsSlider = () => {
  const sliderRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // 🔹 Read More state
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - offsetWidth - 10);
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth / 2,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let interval = null;

    const autoScroll = () => {
      if (isPaused) return;
      if (slider.scrollWidth - slider.scrollLeft <= slider.clientWidth + 1) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: slider.clientWidth / 2, behavior: "smooth" });
      }
      setTimeout(checkScroll, 100);
    };

    interval = setInterval(autoScroll, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const renderStars = (rating) => {
    return (
      <div className="reviews-slider__stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "star filled" : "star empty"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  const reviews = [
    {
      name: "MASTER",
      text: `The Best in the Market! Incredibly Professional and Supportive.
I've been working with Gomzi Life Sciences for our Ozymax Nutrition products, and I am thoroughly impressed. Their entire team operates with an outstanding level of professionalism.
Every deadline has been met, and they are always on time, which is incredibly important for our business. More than that, their customer support is fantastic genuinely supportive and quick to help with any questions.
In my experience, they are simply the best in the market. Highly recommended for anyone looking for quality and reliability!`,
      rating: 5,
      designation: "Brand Owner",
    },
    {
      name: "the fitness school",
      text: "I got my brand ready with Gamzi Supplement Manufacturing, and they were incredibly helpful in getting my brand ready and gave me excellent suggestions. This helped me build my brand effectively. They were incredibly helpful and their team is incredibly good, and I look forward to working with them again. Thank you so much!",
      rating: 5,
      source: "Verified Google Review",
      designation: "Distribution Manager",
    },
    {
      name: "Rathod Kishan",
      text: `We at Pro Wolf Nutrition are truly impressed with Gomzi Life Science for their exceptional supplement manufacturing services. They played a key role in bringing our premium Intence Pre Workout to life — available in our signature Tangy Orange and Green Apple flavors.

From formulation to final packaging, the Gomzi Life Science team demonstrated remarkable professionalism, transparency, and quality control at every step. Their advanced facilities, commitment to hygiene standards, and attention to detail helped us create a product that truly stands out in the market.

Our collaboration experience was smooth, timely, and results-driven. The final product met all our expectations in terms of taste, consistency, and performance effectiveness — exactly what we envisioned for the Pro Wolf brand.

We highly recommend Gomzi Life Science to any brand looking for a trusted and high-quality supplement manufacturing partner in India.

— Team Pro Wolf Nutrition`,
      rating: 5,
      source: "Verified Google Review",
    },
    {
      name: "Bazil Gulzar",
      text: `I Manufactured Peanut butter via Gomzi Lifesciences LLP, the staff was so supportive and they used to give me updates well with the time and the products i received were of very high quality, genuinely more than what i was expecting.
Highly recommend Gomzi Lifesciences LLP.`,
      rating: 5,
      source: "Verified Google Review",
    },
    {
      name: "transform your self R Kumar",
      text: `Honestly, this peanut butter is extremely tasty and the quality is truly excellent. I’m very satisfied with the taste, texture, and overall freshness. Highly recommended!`,
      rating: 5,
      source: "Verified Google Review",
    },
    {
      name: "Chirag Pawar",
      text: `Gomzi nutrition is best premium quality suppliments brand !!
Choco b Whey protein tastes best when consumed in smothee.
All suppliments are good at taste as well as quality.
I also kept their suppliments in my gym to recomend others.`,
      rating: 5,
      source: "Verified Google Review",
    },
    {
      name: "Dr Jayna Upadhyay",
      text: `Very Good service with too much supportive staff… Helped me in everything logo, Design, marketing videos post… Thankyou Gomzi Life sciences ✨`,
      rating: 5,
      source: "Verified Google Review",
    },
    {
      name: "bee shark",
      text: `GOMZI Life Definitely Best teamwork, Co-ordination, best in class.`,
      rating: 5,
    },
    {
      name: "bharat chaudhari",
      text: `Service 💯
Quality delivered 💯
Coperation 💯
Team support 💯
Overall good experienceService 💯
Quality delivered 💯
Coperation 💯
Team support 💯
Overall good experience`,
      rating: 5,
    },
    {
      name: "Lakdawala Vraj",
      text: `Last 2 years i go to the gym every day n im too much serious about fitness but i love to eat sweet n mava kulfi is my most favourite sweet but i didn't eat kulfi last 2 years but now i found gomzi nutrition n it's in mava kulfi flavour and it's tooo tasty n healthy...💕🤞`,
      rating: 5,
    },
    {
      name: "FGIIT Surat",
      text: `whey protein blend mango flavour is very good .product is with good protein content`,
      rating: 5,
    },
  ];

  return (
    <div className="reviews-slider">
      {/* <div className="aboutus-content">
        <h2 className="reviews-slider__heading">Trusted by Our Clients</h2>
        <p className="reviews-slider__subtitle">
          Real reviews from satisfied partners and brands
        </p> */}

      <div class="our-team">
        <div className="ql-editor text-left mt-3">
          <h2 className="mb-3">Trusted by Our Clients</h2>
          <p className="ml-auto-important" >
            Real reviews from satisfied partners and brands
          </p>
        </div>
      </div>

      <div className="reviews-slider__container">
        <div
          className="reviews-slider__track"
          ref={sliderRef}
          onScroll={checkScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {reviews.map((review, index) => (
            <div key={index} className="reviews-slider__card">
              <div className="reviews-slider__card-header">
                <div className="reviews-slider__avatar">
                  {review.name.charAt(0)}
                </div>
                <div className="reviews-slider__info">
                  <h4 className="reviews-slider__name">{review.name}</h4>
                </div>
              </div>

              {/* Review Text */}
              <p
                className={`reviews-slider__text ${
                  expandedIndex === index ? "expanded" : ""
                }`}
              >
                "{review.text}"
              </p>

              {/* Read More */}
              {review.text.length > 150 && (
                <button
                  className="reviews-slider__readmore"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </button>
              )}

              <div className="reviews-slider__footer">
                {renderStars(review.rating)}
                <span className="reviews-slider__source">{review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;
