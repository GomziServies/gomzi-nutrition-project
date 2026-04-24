import React from "react";
// import "./WhoSection.css";

const data = [
  {
    id: "01",
    title: "Start your first brand",
    desc: "You want to launch your own protein. You need clarity on formulation, pricing, and MOQ before you place batch one.",
    blobColor: "#a3d666",
  },
  {
    id: "02",
    title: "Scale what already sells",
    desc: "You already have traction. Now you need better control over quality, margins, and production consistency.",
    blobColor: "#a3d666",
  },
  {
    id: "03",
    title: "Switch to a better setup",
    desc: "You've seen delays, vague communication, or inconsistent output. Now you want a partner you can trust.",
    blobColor: "#a3d666",
  },
];

const WhoSection = () => {
  return (
    <section className="ws-root" id="who">
      <div className="ws-inner">

        {/* Heading */}
        <h2 className="ws-heading text-center">
          Build, Scale <em>OR</em> Switch.
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
                <h4 className="px-3"> {item.title}</h4>
                </div>
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