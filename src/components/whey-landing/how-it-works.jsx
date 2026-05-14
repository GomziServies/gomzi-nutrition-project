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
        {/* <div className="container"> */}
        <div className="hiw-inner">

          {/* ── Header ── */}
          <div className="row">
            <div className="col-12">
              
              <h2 className="mfg-headline">
                Move From <span> Question</span> <br /> to Decision.
              </h2>
            
            </div>
          </div>

          {/* ── Step Cards ── */}
          <div className="row g-3">
            {steps.map((step) => (
              <div className="col-12 col-sm-6 col-lg my-3" key={step.number}>
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

        <section className="founders-section">
        <div className="founders-inner">
          <div className="founders-content">
         
            <h2 class="ws-heading text-center">
              Launch Your Own<br />
              <em>  Protien Brand </em>{" "}
            </h2>

            <section class="protein-brand-landing-cards-section">
              <div class="protein-brand-landing-cards-wrapper">
                <div class="protein-brand-landing-cards">
                

                  <h3>Pick Your Formula
</h3>

                  <p>
                    Whey concentrate, isolate, blend, or custom - we help you choose what fits your target customer and budget.
                  </p>
                </div>

                <div class="protein-brand-landing-cards">
                 

                  <h3>Sample & Approve</h3>

                  <p>
                  Get your sample, test it, and approve before production. No surprises on quality or taste.
                  </p>
                </div>

                <div class="protein-brand-landing-cards">
                
                  <h3>Design Packaging
</h3>

                  <p>
                  Finalize jar, pouch, label, and branding — your logo, your colors, your brand identity.

                  </p>
                </div>

                <div class="protein-brand-landing-cards">
                 

                  <h3>Confirm MOQ & Price</h3>

                  <p>
                   Get exact per-KG pricing based on your batch size. Transparent, no hidden costs.
                  </p>
                </div>

                <div class="protein-brand-landing-cards">
                

                  <h3>Production Begins</h3>

                  <p>
                    Manufacturing starts with quality checks at every stage. COA and test reports included.
                  </p>
                </div>

                <div class="protein-brand-landing-cards">
                 

                  <h3>Receive & Sell</h3>

                  <p>
                   Products dispatched with full documentation. Ready to sell online, in gym, or through distributors.
                  </p>
                </div>
              </div>
            </section>

            {/* <AccordionList items={checkItems1} /> */}
          </div>

          {/* <div className="founders-image">
            <img
              src="/assets/images/whey-landing/sad-owner.webp"
              alt="Sad founder"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default HowItWorks;