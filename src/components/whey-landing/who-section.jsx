import React from "react";
// import "./WhoSection.css";

const data = [
  {
    id: "01",
    title: "Start your first brand",
    desc: "You want to launch your own protein. You need clarity on formulation, pricing, and MOQ before you place batch one.",
    blobColor: "#6dc52c",
  },
  {
    id: "02",
    title: "Scale what already sells",
    desc: "You already have traction. Now you need better control over quality, margins, and production consistency.",
    blobColor: "#3db87a",
  },
  {
    id: "03",
    title: "Switch to a better setup",
    desc: "You've seen delays, vague communication, or inconsistent output. Now you want a partner you can trust.",
    blobColor: "#a3d666",
  },
];

const ArrowIcon = ({ className }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 11L11 3M11 3H5M11 3V9" />
  </svg>
);

const WhoSection = () => {
  return (
    <section className="ws-root" id="who">
      <div className="ws-inner">

        {/* Heading */}
        <h2 className="ws-heading text-center">
          Build, Scale or <em>Switch.</em>
        </h2>

        {/* Cards */}
        <div className="ws-grid">
          {data.map((item) => (
            <div className="ws-card" key={item.id}>
              {/* Blob */}
              <div
                className="ws-blob"
                style={{ backgroundColor: item.blobColor }}
              />
              {/* Frosted glass layer */}
              <div className="ws-card-bg" />
              {/* Content */}
              <div className="ws-card-content">
                <div className="ws-card-top">
                  <span className="ws-num">{item.id}</span>
                  <div className="ws-arrow">
                    <ArrowIcon />
                  </div>
                </div>
                <h4>{item.title}</h4>
                <div className="ws-divider" />
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhoSection;