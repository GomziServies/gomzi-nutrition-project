import React from "react";

const STAR =
  "M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6-4.8-4.6 6.6-.9z";

const Row = ({ size }) => (
  <span className="gz-stars-row" style={{ height: size }}>
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path d={STAR} />
      </svg>
    ))}
  </span>
);

/** Star rating with partial fill (e.g. 4.3 fills 86% of the row). */
const Stars = ({ value = 0, size = 15 }) => {
  const pct = Math.max(0, Math.min(5, value)) * 20;
  return (
    <span className="gz-stars-wrap" role="img" aria-label={`Rated ${value} out of 5`}>
      <span className="gz-stars-base">
        <Row size={size} />
      </span>
      <span className="gz-stars-fill" style={{ width: `${pct}%` }}>
        <Row size={size} />
      </span>
    </span>
  );
};

export default Stars;
