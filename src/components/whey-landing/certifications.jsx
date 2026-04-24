import React from 'react'

const certifications = [
  { id: 1, name: 'Halal',  subtitle: 'Halal Certified',             image: '/assets/images/nutrition/nutri-certi-3.webp' },
  { id: 2, name: 'Kosher', subtitle: 'Kosher Certified',            image: '/assets/images/nutrition/nutri-certi-4.webp' },
  { id: 3, name: 'GMP',    subtitle: 'Good Manufacturing Practice', image: '/assets/images/nutrition/nutri-certi-2.webp' },
  { id: 4, name: 'HACCP',  subtitle: 'Hazard Control Point',        image: '/assets/images/nutrition/nutri-certi-1.webp' },
  { id: 5, name: 'FSSAI',  subtitle: 'Licensed & Approved',        image: '/assets/images/nutrition/nutri-certi-5.webp' },
]

const features = [
  {
    id: 1,
    title: 'Build product trust',
    desc: 'Answer questions on quality and testing with confidence.',
    iconBg: '#EAF3DE',
    iconColor: '#3B6D11',
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
  },
  {
    id: 2,
    title: 'Prepare for scale',
    desc: 'Use process and standards to support bigger growth moves.',
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    icon: `<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>`,
  },
  {
    id: 3,
    title: 'Reduce uncertainty',
    desc: 'A reliable manufacturing setup should make decisions easier, not harder.',
    iconBg: '#FAEEDA',
    iconColor: '#854F0B',
    icon: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
  },
]

const facilities = [
  {
    id: 1,
    title: 'Manufacturing Floor',
    subtitle: 'Where your product comes to life',
    image: '/assets/images/whey-landing/manufacturing-floor.webp',
    points: [
      'State-of-the-art production lines for tablets, capsules, powders & liquids',
      'Capacity to handle both small pilot batches and large commercial runs',
      'Fully auditable setup -open for client visits and third-party inspections',
    ],
  },
  {
    id: 2,
    title: 'QC Lab',
    subtitle: 'Every batch tested before it leaves',
    image: '/assets/images/whey-landing/qclab-image.webp',
    points: [
      'In-house testing for potency, purity, microbial limits and heavy metals',
      'COA issued for every production batch -shareable with your buyers',
      'Equipment calibrated and validated as per GMP and FSSAI guidelines',
    ],
  },
  {
    id: 3,
    title: 'Packaging Unit',
    subtitle: 'Shelf-ready from day one',
    image: '/assets/images/whey-landing/packaging-unit.webp',
    points: [
      'Primary and secondary packaging under one roof -bottles, sachets, pouches',
      'Custom label printing and design support for your private label brand',
      'Tamper-evident and export-grade packaging options available',
    ],
  },
]



const Certifications = () => {
  return (
    <>
      

      <section className="cert-section " id="certifications">
        <div className="cert-inner">

          {/* Header */}
          <div className="row">
            <div className="col-12">
              <h2 className="mfg-headline pb-3 ">Protect <span> Your Brand</span> With Proof.</h2>
              
            </div>
          </div>

          {/* Certification Cards */}
          <div className="row mb-5">
            <div className="col-12 ">
              <div className="cert-tags-scroll">
                {certifications.map((cert) => (
                  <div key={cert.id} className="cert-tag">
                    <div className="cert-tag-img-wrap">
                      <img src={cert.image} alt={cert.name} className="cert-tag-img" />
                    </div>
                    <div className="cert-tag-label">
                      {cert.name}
                      <div className="cert-tag-sublabel">{cert.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="row g-3 ">
            {features.map((f) => (
              <div key={f.id} className="col-12 col-md-4 my-2">
                <div className="feature-card">
                 <div className="d-flex align-items-center gap-3 mb-3">
                   <div
                    className="feature-icon-box"
                    style={{ background: f.iconBg }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={f.iconColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dangerouslySetInnerHTML={{ __html: f.icon }}
                    />
                  </div>
                  <div className="feature-title">{f.title}</div>
                 </div>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Facility Cards -horizontal layout */}
          <div className="d-flex flex-column gap-3 ">
            {facilities.map((fac, index) => (
              <div
                key={fac.id}
                className={`my-3 facility-row ${index % 2 !== 0 ? 'reverse' : ''}`}
              >
                <div className="facility-row-img">
                  <img src={fac.image} alt={fac.title} loading="lazy" />
                </div>
                <div className="facility-row-content">
                  <div className="facility-row-subtitle">{fac.subtitle}</div>
                  <h3 className="facility-row-title">{fac.title}</h3>
                  <ul className="facility-row-points">
                    {fac.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Certifications