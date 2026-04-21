import React from 'react';

const steps = [
  {
    number: '01',
    category: 'CONTEXT',
    title: 'Share your stage',
    description: 'Tell us whether you want to launch, scale, or switch.',
  },
  {
    number: '02',
    category: 'FIT',
    title: 'Review formulation',
    description: 'Choose what fits your audience, goal, and price point.',
  },
  {
    number: '03',
    category: 'COMMERCIALS',
    title: 'Understand pricing',
    description: 'See MOQ, pricing direction, and what changes your cost.',
  },
  {
    number: '04',
    category: 'TRUST',
    title: 'Review quality process',
    description: 'Check certifications, documentation, and batch standards.',
  },
  {
    number: '05',
    category: 'DECISION',
    title: 'Take the next step',
    description: "Move ahead if it fits. Leave with clarity if it doesn't.",
  },
];

const HowItWorks = () => {
  return (
    <>
    

      <section className="hiw-section" id="how">
        <div className="container">

          {/* ── Header ── */}
          <div className="row">
            <div className="col-lg-8">
              
              <h2 className="mfg-headline">
                Move From <span> Question</span> <br /> to Decision.
              </h2>
            
            </div>
          </div>

          {/* ── Step Cards ── */}
          <div className="row g-3">
            {steps.map((step) => (
              <div className="col-12 col-sm-6 col-lg" key={step.number}>
                <div className="hiw-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div className="hiw-number">{step.number}</div>
                    <div className="hiw-category">{step.category}</div>
                  </div>
                  <h3 className="hiw-card-title">{step.title}</h3>
                  <p className="hiw-card-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default HowItWorks;