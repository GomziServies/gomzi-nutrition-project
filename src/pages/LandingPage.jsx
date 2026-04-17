import React from "react";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/nutrition.css";
import OwlCarousel from "react-owl-carousel";
import { Accordion } from "react-bootstrap";

const testimonials = [
  {
    text: "Gomzi Life Science is a very good work, I have also made this product and they provide very good quality, they do not compromise on quality, moreover they provide timely delivery, if you want to join them then you can join, I have a positive review, thank you gomzi life science and especially Gautam sir is very good, thank you Gautam sir",
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
    text: (
      <>
        {" "}
        Service 100%
        <br />
        Quality delivered 100%
        <br />
        Coperation 100%
        <br />
        Team support 100%
        <br />
        Overall good experience{" "}
      </>
    ),
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
    text: "I got my brand ready with Gomzi Supplement Manufacturing, and they were incredibly helpful in getting my brand ready and gave me excellent suggestions. This helped me build my brand effectively. They were incredibly helpful and their team is incredibly good, and I look forward to working with them again. Thank you so much!",
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
    0: { items: 1 },
    576: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  },
};

const logos = [
  {
    id: 1,
    imageSrc: "/assets/images/third-party-manufacturing/fassai.webp",
  },
  {
    id: 2,
    imageSrc: "/assets/images/third-party-manufacturing/gmp.webp",
  },
  {
    id: 3,
    imageSrc: "/assets/images/third-party-manufacturing/haccp.webp",
  },
  {
    id: 4,
    imageSrc: "/assets/images/third-party-manufacturing/halal.webp",
  },
  {
    id: 5,
    imageSrc: "/assets/images/third-party-manufacturing/kosher.webp",
  },
];

function LandingPage() {
  function openside() {
    document.getElementById("demo").style.width = "100%";
  }

  function sideclose() {
    console.log("Closing side");
    document.getElementById("demo").style.width = "0px";
  }

  const renderStars = (rating) =>
    [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= rating ? "star-active" : "star-inactive"}`}
      >
        ★
      </span>
    ));
  return (
    <>
      <div className="my-auto">
        <section className="header-main"></section>
      </div>
      <div className="container-fluid main p-0 m-0 landingpage-header-position">
        <div className="landingpage-header-position-div">
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

          {/* <div className="center-menu d-lg-block d-none">
            <ul className="center-menu-list">
              <li>
                <Link to="">How It Works</Link>
              </li>
              <li>
                <Link to="">Formulations</Link>
              </li>
              <li>
                <Link to="">Why Us</Link>
              </li>
              <li>
                <Link to="">Certifications</Link>
              </li>
            </ul>
          </div> */}

          <div className="side" id="demo">
            <span className="closebtn" onClick={sideclose}>
              ×
            </span>
            <Link
              to="/nutrition"
              className="landingpage-header-position-div-mb-mt"
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
              <Link to="">
                <button className="landingpage-btn ">
                  Book Your Free Brand Launch Call
                </button>
              </Link>
            </ul>
          </div>

          <span
            className="d-lg-none d-sm-block btnn cp landingpage-header-position-div-fts-color"
            onClick={openside}
          >
            ☰
          </span>

          <div className="login d-lg-block d-none">
            <ul>
              <button
                className="landingpage-btn cta"
                onClick={() => {
                  document.getElementById("book-call").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Book Your Free Brand Launch Call
              </button>
            </ul>
          </div>
        </div>
      </div>

      <section>
        {" "}
        <div className="ln-hero-section ">
          <div className="hero-banner">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="ln-title ">
                Stop promoting someone else’s protein. Build your own.
              </h1>
              <p className="ln-para">
                Your followers trust your recommendation. Turn that trust into
                your own protein brand with WPC 80%, WPI 90%, 100% Whey, or a
                custom blend, backed by GMP-certified manufacturing, premium
                packaging design, and a D2C website. Starting at 100 KG.
              </p>

              <div class="feat-row">
                <div class="feat-pill">
                  <div class="fp-icon">
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  GMP + FSSAI + HACCP + Kosher + Halal Certified
                </div>

                <div class="feat-pill">
                  <div class="fp-icon">
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  15–20 Working Day Delivery
                </div>

                <div class="feat-pill">
                  <div class="fp-icon">
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  Starting at 100 KG
                </div>

                <div class="feat-pill">
                  <div class="fp-icon">
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  Formulation + Packaging + Website, One Partner
                </div>
              </div>
              <button
                className="landingpage-btn cta"
                onClick={() => {
                  document.getElementById("book-call").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Book Your Free Brand Launch Call
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="why-section">
          <p className="why-label">The real problem</p>

          <h1 className="why-title">
            You’ve been recommending protein for 2 years. <br /> Your followers
            keep asking where they can buy yours.
          </h1>

          <div className="card-container">
            <div className="card">
              <div className="icon-box">
                <i class="fa-solid fa-scale-balanced"></i>
              </div>
              <h3>Every CM wants 500 KG minimum</h3>
              <p>
                You’re ready to launch, not ready to risk Rs 15L on a first
                batch. Most manufacturing partners won’t take you seriously
                below 500 KG. GLS starts at 100 KG so you validate demand before
                you scale.
              </p>
            </div>

            <div className="card">
              <div className="icon-box">
                <i class="fa-solid fa-flask"></i>
              </div>
              <h3>WPC or WPI. FSSAI or not.</h3>
              <p>
                You know fitness. You may not know formulation science,
                compliance, or nutritional positioning yet. That should not stop
                your launch. GLS brand advisors walk you through every decision
                before you commit a single rupee.
              </p>
            </div>

            <div className="card">
              <div className="icon-box">
                <i class="fa-solid fa-handshake"></i>
              </div>
              <h3>5 partners. Zero brand.</h3>
              <p>
                Manufacturing partner. Packaging designer. FSSAI consultant.
                Website developer. Marketing agency. Managing five moving parts
                delays the launch. GLS brings everything under one build path so
                your brand reaches market faster and cleaner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="model-section light-green">
          <p class="model-label">The GLS model</p>
          <h1 class="model-title">
            Whether you want white label or a brand built from scratch, <br />
            you have a clear path.
          </h1>

          <div class="gls-cards">
            <div class="gls-card dark-card">
              <span class="tag">WHITE LABEL, FASTEST PATH</span>

              <h2>Already Know What You Want</h2>

              <p>
                Pick a formulation from the GLS library. Choose your flavour.
                Apply your label. Launch in 15–20 working days. You skip R&D
                time and reduce creative complexity on day one.
              </p>

              <ul>
                <li>
                  <span class="check-icon">
                    <svg viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  4-tier whey matrix ready to manufacture
                </li>
                <li>
                  <span class="check-icon">
                    <svg viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  Chocolate, vanilla, mango, Mawa Kulfi and more
                </li>
                <li>
                  <span class="check-icon">
                    <svg viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  Your label on certified product
                </li>
                <li>
                  <span class="check-icon">
                    <svg viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  COA issued on every batch
                </li>
                <li>
                  <span class="check-icon">
                    <svg viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  Starting at 100 KG
                </li>
              </ul>
            </div>

            <div class="gls-card green-card">
              <span class="tag white-tag">
                BRAND FROM SCRATCH, COMPLETE BUILD
              </span>

              <h2>Building Something That Is 100% Yours</h2>

              <p>
                From brand strategy and formulation development to premium
                packaging design, FSSAI documentation support, and your own D2C
                website, GLS builds the complete brand infrastructure so your
                followers buy from you directly.
              </p>

              <ul>
                <li>
                  <span class="check-icon">
                    <svg viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  Brand strategy + formulation advisory
                </li>
                <li>
                  <span class="check-icon">
                    <svg viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  Custom flavour development
                </li>
                <li>
                  <span class="check-icon">
                    <svg viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  Premium packaging design + 3D mockups Starting at 100 KG
                </li>
                <li>
                  <span class="check-icon">
                    <svg viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  FSSAI compliance documentation
                </li>
                <li>
                  <span class="check-icon">
                    <svg viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  Shopify D2C website development
                </li>
                <li>
                  <span class="check-icon">
                    <svg viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  Meta Ads launch structure
                </li>
              </ul>
            </div>
          </div>

          <h3 class="bottom-text">
            Both paths end at the same place, a certified, market-ready protein
            brand with your name on it.
          </h3>

          <button
            className="landingpage-btn cta"
            onClick={() => {
              document.getElementById("book-call").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Book Your Free Brand Launch Call
          </button>
        </div>
      </section>

      <section id="formulation">
        <div className="formulation-section">
          <p className="formulation-label">Your formulation options</p>

          <h1 className="formulation-title">
            Four tiers. One decision. You get help <br /> choosing the right one
            for your brand.
          </h1>

          <p className="formulation-para text-center">
            Most first-time brand founders do not know which whey formulation to
            choose. That is normal. Your job is to know your audience. GLS helps
            you match your audience, price point, and brand story to the right
            formulation.
          </p>

          <div className="formulation-table-wrapper">
            <table className="formulation-table">
              <thead>
                <tr>
                  <th>FORMULATION</th>
                  <th>PROTEIN PER SERVING</th>
                  <th>BEST FOR</th>
                  <th>PRICE POSITION</th>
                  <th>GLS MOQ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Whey Protein Blend</td>
                  <td>18g per 35g scoop</td>
                  <td>Budget-friendly brands, high-volume entry</td>
                  <td>Most economical</td>
                  <td>100 KG</td>
                </tr>

                <tr>
                  <td>100% Whey Protein</td>
                  <td>22g per 35g scoop</td>
                  <td>Fitness-focused mid-range brands</td>
                  <td>Mid-range</td>
                  <td>100 KG</td>
                </tr>

                <tr>
                  <td>WPC 80%</td>
                  <td>25g per 35g scoop</td>
                  <td>
                    General sports nutrition brands, recommended for first
                    launch
                  </td>
                  <td>Mid-range</td>
                  <td>100 KG</td>
                </tr>

                <tr>
                  <td>WPI 90%</td>
                  <td>27g per 35g scoop</td>
                  <td>Premium brand positioning, lactose-sensitive audience</td>
                  <td>Premium</td>
                  <td>100 KG</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="formulation-note">
            <strong>Not sure which formulation fits your brand story.</strong>{" "}
            In your free 20-minute Brand Launch Call, GLS formulation advisors
            recommend the right tier based on your audience, price point, and
            distribution plan.
          </div>
        </div>
      </section>

      <section id="how-it-work">
        <div className="journey-section light-green">
          <p className="journey-label">The GLS brand launch journey</p>
          <h1 className="journey-title">
            From your idea to a live, selling brand. <br /> Here’s exactly how
            it works.
          </h1>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h6>Idea & Strategy, 1–3 days</h6>
              <h3>Launch roadmap first</h3>
              <p>
                You bring the vision. GLS brings the expertise. In a 20-minute
                call, brand advisors map your product concept, audience, price
                positioning, and formulation direction. You leave with a Brand
                Launch Roadmap before you spend a rupee.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h6>Formulation Development, 5–10 days</h6>
              <h3>Samples before commitment</h3>
              <p>
                GLS matches your brief to WPC 80%, WPI 90%, Blend, or 100% Whey.
                Samples reach you in 5–7 days for tasting and approval, with
                nutritional data and FSSAI-compliant ingredient documentation.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h6>Manufacturing & QC, 15–20 working days</h6>
              <h3>Certified quality on every batch</h3>
              <p>
                Production runs inside the Surat GMP and HACCP-certified
                facility. A Certificate of Analysis is issued on every batch.
                Your product is dispatched within 15–20 working days after
                formulation sign-off.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <h6>Packaging Design, 5–7 days</h6>
              <h3>Your brand looks market-ready</h3>
              <p>
                GLS creates your label design and 3D mockup with your brand
                name, logo, nutritional panel, FSSAI number, barcode, and claim
                copy. Print-ready artwork lands before manufacturing finishes.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">5</div>
              <h6>Website & Marketing Setup, 10–15 days</h6>
              <h3>Your followers can buy on day one</h3>
              <p>
                You get a Shopify D2C website with product pages, checkout, and
                SEO foundation, plus social profile setup, Google Business
                listing, and Meta Ads structure so you launch with a selling
                system, not just a tub.
              </p>
            </div>
          </div>

          <button
            className="landingpage-btn cta"
            onClick={() => {
              document.getElementById("book-call").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Book Your Free Brand Launch Call
          </button>
        </div>
      </section>

      <section id="certification">
        <div className="certified-section">
          <p className="certified-label">Certified manufacturing</p>

          <h1 className="certified-title">
            Your brand’s reputation depends on who manufactures it. <br />{" "}
            Here’s why your followers can trust what you put your name on.
          </h1>

          <div className="certifed-row ">
            <div className="certifed-logo-src">
              {logos.map((logo, i) => (
                <img key={i} src={logo.imageSrc} alt="logo" />
              ))}
            </div>
          </div>

          <div className="certifed-card-container">
            <div className="certifed-card">
              <h3>For your brand</h3>
              <p>
                Every batch comes with a Certificate of Analysis. You get full
                ingredient traceability and documentation support. When your
                audience asks whether this is really WPI 90%, you can show the
                lab report.
              </p>
            </div>

            <div className="certifed-card">
              <h3>For export readiness</h3>
              <p>
                Halal and Kosher dual certification supports expansion into the
                Middle East, Africa, and Southeast Asia. If your brand grows
                beyond India, your manufacturing partner already aligns with
                export expectations.
              </p>
            </div>

            <div className="certifed-card">
              <h3>For consistency</h3>
              <p>
                The Surat facility follows the same quality standard whether
                your batch is 100 KG or 1000 KG. That protects your reputation
                when you scale and keeps your product experience consistent.
              </p>
            </div>
          </div>

          <div className="certifed-card-container-second">
            <div className="certifed-card-second">
              <div className="card-icon">
                <i class="fa-solid fa-industry"></i>
              </div>
              <h3>Manufacturing Floor</h3>
              <p>Real facility. Real equipment. Available for audit.</p>
            </div>

            <div className="certifed-card-second">
              <div className="card-icon">
                <i class="fa-solid fa-microscope"></i>
              </div>
              <h3>QC Lab</h3>
              <p>Real facility. Real equipment. Available for audit.</p>
            </div>

            <div className="certifed-card-second">
              <div className="card-icon">
                <i class="fa-solid fa-box-open"></i>
              </div>
              <h3>Packaging Unit</h3>
              <p>Real facility. Real equipment. Available for audit.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="brand-founders-section light-green">
          <div className="testimonial-div">
            <p className="brand-founders-label">
              Brand founders who started where you are
            </p>
            <h1 className="brand-founders-title">
              They had an audience. They didn’t have a brand. <br /> Now they
              have both.
            </h1>{" "}
          </div>

          <div className="founders-testi-carousel-wrap">
            <OwlCarousel className="owl-theme" {...carouselOptions}>
              {testimonials.map((item, i) => (
                <div className="testi-card" key={i}>
                  <div>
                    <div className="testi-quote-wrap">
                      <div className="testi-quote-mark">
                        <svg
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 17.5C3 13.5 5.8 10.2 10.5 9L11.5 11.5C8.8 12.4 7.2 14.3 7 16.3H11V22H3V17.5Z"
                            fill="white"
                          />
                          <path
                            d="M15 17.5C15 13.5 17.8 10.2 22.5 9L23.5 11.5C20.8 12.4 19.2 14.3 19 16.3H23V22H15V17.5Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="testi-stars">
                        {renderStars(item.rating)}
                      </div>
                    </div>
                    <p className="testi-text">{item.text}</p>
                  </div>
                  <div className="testi-author">
                    <div className="testi-author-dot">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="testi-name">{item.name}</p>
                      <p className="testi-role">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>

      <section>
        <div className="qa-section">
          <p className="qa-label">Your questions, answered</p>

          <h1 className="qa-title">Before you book the call.</h1>

          <Accordion defaultActiveKey={["1"]} alwaysOpen>
            <Accordion.Item eventKey="1" className="mt-3 p-4">
              <Accordion.Header className="faq-question">
                Do I need to know the difference between WPC and WPI before I
                contact you?
              </Accordion.Header>
              <Accordion.Body className="faq-answer">
                No. Most brand founders who contact GLS do not know the
                difference yet. That is exactly what the first call is for. GLS
                asks about your audience, your price point, and your brand
                story, then recommends the right formulation. You make the final
                decision.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mt-3 p-4">
              <Accordion.Header className="faq-question">
                What’s the minimum I can order for a first batch?
              </Accordion.Header>
              <Accordion.Body className="faq-answer">
                100 KG. That usually translates to roughly 100–200 tubs
                depending on pack size. It gives you enough inventory to
                validate demand without locking all your capital into an
                untested first launch.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mt-3 p-4">
              <Accordion.Header className="faq-question">
                How long does the full launch take from first call to product in
                hand?
              </Accordion.Header>
              <Accordion.Body className="faq-answer">
                If you move through approvals without delay, formulation
                approval usually takes 7–10 days, manufacturing takes 15–20
                working days, and packaging design runs in parallel. Product,
                packaging, and website together usually land in a 35–45 day
                launch window.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="mt-3 p-4">
              <Accordion.Header className="faq-question">
                What if my first batch doesn’t sell?
              </Accordion.Header>
              <Accordion.Body className="faq-answer">
                You own your brand, your label, and your formulation direction.
                GLS does not lock you into a long-term contract. Your next order
                can repeat the same formulation, test a new flavour, or shift to
                a different tier based on what the market tells you.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="mt-3 p-4">
              <Accordion.Header className="faq-question">
                What if my first batch doesn’t sell?
              </Accordion.Header>
              <Accordion.Body className="faq-answer">
                GLS provides FSSAI-compliant formulations and documentation
                support as standard. For complete filing support, the team
                guides you through the process and connects you with the right
                resources so your launch stays compliant from day one.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="mt-3 p-4">
              <Accordion.Header className="faq-question">
                Can I see the facility before I place an order?
              </Accordion.Header>
              <Accordion.Body className="faq-answer">
                Yes. Facility visits and audits are available for qualified
                brand founders at the Surat manufacturing unit. Raise that
                during your Brand Launch Call and the GLS team can schedule the
                next step.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className="mt-3 p-4">
              <Accordion.Header className="faq-question">
                What flavours can I choose from for my whey protein?
              </Accordion.Header>
              <Accordion.Body className="faq-answer">
                Standard profiles like chocolate, vanilla, and strawberry are
                available, along with Indian flavour options such as Mawa Kulfi
                and Kesar Pista. Custom flavour development is also possible for
                larger orders.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>

      <section class="cta-section" id="book-call">
        <div class="cta-container">
          <div class="cta-content">
            <h1>
              Your Followers Are Waiting
              <br />
              For Your Brand. Let's Build It.
            </h1>

            <p>
              Book a free 20-minute Brand Launch Call. Walk away with a roadmap
              that covers formulation recommendation, MOQ, packaging direction,
              estimated investment, and launch timeline. No sales pressure.
            </p>
          </div>

          <div class="cta-form">
            <form>
              <div class="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div class="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="Enter your phone number" />
              </div>

              <div class="form-group">
                <label>Instagram Handle</label>
                <input type="text" placeholder="@yourhandle" />
              </div>

              <div class="form-group">
                <label>Which formulation interests you most?</label>
                <select>
                  <option>Select an option</option>
                  <option>Whey Blend</option>
                  <option>100% Whey</option>
                  <option>WPC 80%</option>
                  <option>WPI 90%</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <div class="form-group">
                <label>Estimated First Batch Budget</label>
                <select>
                  <option>Select budget range</option>
                  <option>Rs 2-4L</option>
                  <option>Rs 4-8L</option>
                  <option>Rs 8L+</option>
                </select>
              </div>

              <button
                className="landingpage-btn cta"
                onClick={() => {
                  document.getElementById("book-call").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Book Your Free Brand Launch Call
              </button>

              <p class="form-note">
                We respond within 2 hours during business hours. No spam. No
                hard sell.
              </p>

              <div class="form-tags">
                <span>🔒 Confidential</span>
                <span>✔ GMP Certified</span>
                <span>✔ 15–20 Day Delivery</span>
                <span>✔ No Long-Term Contracts</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="footer-container">
          <div class="footer-col">
            <h2 class="footer-logo">GOMZI LIFE SCIENCES</h2>
            <p class="footer-text">
              Your brand, manufactured with the same care we would give our own.
            </p>
          </div>

          <div class="footer-col">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <a href="#how-it-work">How It Works</a>
              </li>
              <li>
                <a href="#formulation">Formulations</a>
              </li>
              <li>
                <a href="#certification">Certifications</a>
              </li>
              <li>
                <a href="#book-call">Book a Call</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>CONTACT</h3>
            <p>
              <Link className="link" to="tel:+918320077993">
                Gautam Jani - +91 8320077993
              </Link>
            </p>
            <p>
              {" "}
              <Link className="link" to="mailto:info@gomzilifesciences.in">
                info@gomzilifesciences.in
              </Link>
            </p>

            <p>Surat, Gujarat, India</p>
          </div>

          <div class="footer-col">
            <h3>CERTIFICATIONS</h3>
            <div class="cert-tags">
              <span>FSSAI</span>
              <span>GMP</span>
              <span>HACCP</span>
              <span>KOSHER</span>
              <span>HALAL</span>
            </div>
          </div>
        </div>

        <div class="footer-bottom text-center">
          © 2026 Gomzi Life Sciences LLP.
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
