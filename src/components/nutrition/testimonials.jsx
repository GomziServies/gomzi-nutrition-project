import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../assets/css/nutrition.css"

const testimonials = [
  {
    text: "Gamzi Life Science is a very good work, I have also made this product and they provide very good quality, they do not compromise on quality, moreover they provide timely delivery, if you want to join them then you can join, I have a positive review, thank you gomzi life science and especially Gautam sir is very good, thank you Gautam sir",
    name: "Sarvottam Prasad",
    role: "Founder of Five Fitness",
    rating: 5,
  },
  {
    text: "Thank you so much, Dr. Gautam Jani, for building our product exactly as we envisioned for an entry-level nutraceutical brand. Your commitment, understanding of our needs, and attention to detail made a real difference. We’re grateful to have worked with you..",
    name: "Parth bhai",
    role: "Founder of NutraXpm",
    rating: 5,
  },
  {
    text: (<> Service 💯<br/>Quality delivered 💯<br/>Coperation 💯<br/>Team support 💯<br/>Overall good experience  </> ),
    name: "Bharat bahi Chaudhari",
    role: "Founder of Gravity",
    rating: 5,
  },
  {
    text: "I have a very in-depth knowledge about raw ingredients of nutraceuticals products and currently running a nutrition store in ahmedabad.",
    name: "Mithil Patel",
    role: "Founder of CleanX",
    rating: 5,
  },
  {
    text: "We at Pro Wolf Nutrition are truly impressed with Gomzi Life Science for their exceptional supplement manufacturing services. They played a key role in bringing our premium Intence Pre Workout to life — available in our signature Tangy Orange and Green Apple flavors.",
    name: "Rathod Kishan",
    role: "Founder of Prowolf",
    rating: 5,
  },
  {
    text: "I got my brand ready with Gamzi Supplement Manufacturing, and they were incredibly helpful in getting my brand ready and gave me excellent suggestions. This helped me build my brand effectively. They were incredibly helpful and their team is incredibly good, and I look forward to working with them again. Thank you so much!",
    name: "Samirbhai",
    role: "Founder of Bio Kinetic",
    rating: 5,
  },
];

const carouselOptions = {
  loop: true,
  margin: 24,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  navText: [
    `<span class="testi-nav-btn prev-btn">&#8592;</span>`,
    `<span class="testi-nav-btn next-btn">&#8594;</span>`,
  ],
  responsive: {
    0:    { items: 1 },
    576:  { items: 1 },
    768:  { items: 2 },
    1024: { items: 3 },
  },
};

const TestimonialSection = () => {
  const renderStars = (rating) =>
    [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        style={{
          color: star <= rating ? "#f4b400" : "#e0e0e0",
          fontSize: "20px",
          lineHeight: 1,
        }}
      >
        ★
      </span>
    ));

  return (
    <>
      

      <section className="testi-section">

        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontWeight: "700",fontSize:"42px" }}>
             WHAT START-UP <span style={{ color: "#86c33a" }}>FOUNDERS</span> SAY     
          </h2>
        </div>

        <div className="testi-carousel-wrap">
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {testimonials.map((item, i) => (
              <div className="testi-card" key={i}>
                <div>
                  <div className="testi-quote-wrap">
                    <div className="testi-quote-mark">
                      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 17.5C3 13.5 5.8 10.2 10.5 9L11.5 11.5C8.8 12.4 7.2 14.3 7 16.3H11V22H3V17.5Z" fill="white" />
                        <path d="M15 17.5C15 13.5 17.8 10.2 22.5 9L23.5 11.5C20.8 12.4 19.2 14.3 19 16.3H23V22H15V17.5Z" fill="white" />
                      </svg>
                    </div>
                    <div className="testi-stars">{renderStars(item.rating)}</div>
                  </div>
                  <p className="testi-text">{item.text}</p>
                </div>
                <div className="testi-author">
                  <div className="testi-author-dot">{item.name.charAt(0)}</div>
                  <div>
                    <p className="testi-name">{item.name}</p>
                    <p className="testi-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>

      </section>
    </>
  );
};

export default TestimonialSection;