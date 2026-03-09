// import React, { useState, useEffect, useRef } from 'react';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


//  const gymMembers = [
//     {
//       id: 1,
//       name: 'ALEX',
//       role: 'Transformation Story',
//       image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=700&fit=crop',
//       bgColor: '#f8f5ff',
//       achievement: 'Lost 30kg in 6 months',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
//     },
//     {
//       id: 2,
//       name: 'SARAH',
//       role: 'Fitness Journey',
//       image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=500&h=700&fit=crop',
//       bgColor: '#faf5ff',
//       achievement: 'Marathon Runner',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
//     },
//     {
//       id: 3,
//       name: 'MARCUS',
//       role: 'Strength Training',
//       image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&h=700&fit=crop',
//       bgColor: '#f5f3ff',
//       achievement: 'Powerlifting Champion',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
//     },
//     {
//       id: 4,
//       name: 'EMMA',
//       role: 'Weight Loss Success',
//       image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=700&fit=crop',
//       bgColor: '#faf5ff',
//       achievement: 'Lost 25kg',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
//     },
//     {
//       id: 5,
//       name: 'DAVID',
//       role: 'Muscle Building',
//       image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=700&fit=crop',
//       bgColor: '#f8f5ff',
//       achievement: 'Gained 15kg muscle',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
//     },
//     {
//       id: 6,
//       name: 'LISA',
//       role: 'CrossFit Athlete',
//       image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=700&fit=crop',
//       bgColor: '#f5f3ff',
//       achievement: 'Regional Competitor',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
//     },
//     {
//       id: 7,
//       name: 'JAMES',
//       role: 'Body Transformation',
//       image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=700&fit=crop',
//       bgColor: '#faf5ff',
//       achievement: '12% Body Fat',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
//     },
//     {
//       id: 8,
//       name: 'NINA',
//       role: 'Yoga & Wellness',
//       image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=700&fit=crop',
//       bgColor: '#f8f5ff',
//       achievement: 'Certified Instructor',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
//     }
//   ];

  
// const GymVideoTestimonials = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState('');
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const $ = window.jQuery;
//     if ($ && carouselRef.current) {
//       $(carouselRef.current).owlCarousel({
//         items: 5,
//         loop: true,
//         center: true,
//         margin: -80,
//         autoplay: true,
//         autoplayTimeout: 3500,
//         autoplayHoverPause: true,
//         smartSpeed: 900,
//         nav: true,
//         dots: false,
//         stagePadding: 0, // આ important છે
//         navText: [
//           '<i class="fa fa-chevron-left"></i>',
//           '<i class="fa fa-chevron-right"></i>'
//         ],
//         responsive: {
//           0: {
//             items: 1,
//             margin: 0,
//             stagePadding: 0
//           },
//           768: {
//             items: 3,
//             margin: -50,
//             stagePadding: 0
//           },
//           1024: {
//             items: 5,
//             margin: -80,
//             stagePadding: 0
//           }
//         },
//         onInitialized: function(event) {
//           // Center alignment ensure કરવા માટે
//           setTimeout(() => {
//             $(carouselRef.current).trigger('to.owl.carousel', [2, 0]);
//           }, 100);
//         }
//       });
//     }

//     return () => {
//       if ($ && carouselRef.current) {
//         $(carouselRef.current).trigger('destroy.owl.carousel');
//       }
//     };
//   }, []);

//   const styles = {
//     section: {
//       padding: '40px 0',
//       background: '#ffffff',
//       overflow: 'hidden',
//       position: 'relative',
//       minHeight: 'auto',
//       display: 'flex',
//       alignItems: 'center'
//     },
//     sectionBefore: {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: 'radial-gradient(circle at center, rgba(134, 195, 58, 0.08) 0%, transparent 70%)',
//       pointerEvents: 'none'
//     },
//     container: {
//       width: '100%',
//       maxWidth: '1600px',
//       margin: '0 auto',
//       padding: '0 20px',
//       position: 'relative',
//       zIndex: 10
//     },
//     carouselContainer: {
//       padding: '30px 0 40px',
//       position: 'relative',
//       overflow: 'visible' // આ add કર્યું
//     },
//     teamCard: {
//       position: 'relative',
//       borderRadius: '16px',
//       overflow: 'hidden',
//       boxShadow: '0 25px 70px rgba(134, 195, 58, 0.2)',
//       transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//       height: '400px',
//       transformStyle: 'preserve-3d',
//       backgroundColor: '#f8f5ff',
//       cursor: 'pointer',
//       border: '2px solid rgba(134, 195, 58, 0.1)'
//     },
//     sideLabel: {
//       position: 'absolute',
//       right: '8px',
//       top: '50%',
//       transform: 'translateY(-50%) rotate(90deg)',
//       transformOrigin: 'center',
//       zIndex: 10,
//       background: 'linear-gradient(135deg, rgba(133, 195, 58, 0.52) 0%, rgba(110, 170, 45, 0.7) 100%)',
//       padding: '15px 40px',
//       borderRadius: '8px',
//       backdropFilter: 'blur(8px)',
//       WebkitBackdropFilter: 'blur(20px)',
//       border: '1px solid rgba(255, 255, 255, 0.2)',
//       boxShadow: '0 8px 32px rgba(133, 195, 58, 0.24)'
//     },
//     sideLabelSpan: {
//       fontSize: '14px',
//       fontWeight: 800,
//       letterSpacing: '4px',
//       color: '#fff',
//       textTransform: 'uppercase',
//       writingMode: 'horizontal-tb',
//       whiteSpace: 'nowrap',
//       textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
//     },
//     teamContent: {
//       position: 'relative',
//       height: '100%',
//       display: 'flex',
//       flexDirection: 'column'
//     },
//     imageWrapper: {
//       position: 'relative',
//       flex: 1,
//       overflow: 'hidden',
//       backgroundColor: '#f0f0f0'
//     },
//     teamImage: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//       transition: 'transform 0.8s ease',
//       filter: 'brightness(0.95) contrast(1.05)'
//     },
//     playOverlay: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: 'linear-gradient(to bottom, rgba(134, 195, 58, 0) 0%, rgba(134, 195, 58, 0.7) 100%)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       opacity: 0,
//       transition: 'opacity 0.5s ease'
//     },
//     playBtn: {
//       width: '60px',
//       height: '60px',
//       borderRadius: '50%',
//       background: 'linear-gradient(135deg, #86c33a 0%, #6faa2d 100%)',
//       border: '3px solid rgba(255, 255, 255, 0.5)',
//       color: '#fff',
//       fontSize: '20px',
//       cursor: 'pointer',
//       transition: 'all 0.4s ease',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingLeft: '5px',
//       boxShadow: '0 10px 40px rgba(134, 195, 58, 0.5)'
//     },
//     memberInfo: {
//       padding: '20px 20px',
//       background: 'linear-gradient(135deg, rgba(134, 195, 58, 0.05) 0%, rgba(110, 170, 45, 0.08) 100%)',
//       backdropFilter: 'blur(20px)',
//       borderTop: '2px solid rgba(134, 195, 58, 0.2)'
//     },
//     memberName: {
//       fontSize: '22px',
//       fontWeight: 800,
//       color: '#2d2d2d',
//       margin: '0 0 8px 0',
//       letterSpacing: '2px',
//       textTransform: 'uppercase',
//       textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
//     },
//     memberRole: {
//       fontSize: '12px',
//       color: '#86c33a',
//       margin: 0,
//       letterSpacing: '1.5px',
//       textTransform: 'uppercase',
//       fontWeight: 600
//     },
//     sectionTitle: {
//       textAlign: 'center',
//       marginBottom: '40px'
//     },
//     title: {
//       fontSize: '40px',
//       fontWeight: 900,
//       color: '#2d2d2d',
//       margin: '0 0 10px 0',
//       textTransform: 'uppercase',
//       letterSpacing: '2px'
//     },
//     subtitle: {
//       fontSize: '16px',
//       color: 'rgba(0, 0, 0, 0.6)',
//       margin: 0,
//       fontWeight: 400
//     },
//     modalOverlay: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.9)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 9999,
//       padding: '20px'
//     },
//     modalContent: {
//       position: 'relative',
//       width: '100%',
//       maxWidth: '1200px',
//       backgroundColor: '#1a1a1a',
//       borderRadius: '20px',
//       overflow: 'hidden',
//       boxShadow: '0 50px 100px rgba(134, 195, 58, 0.5)',
//       border: '2px solid rgba(134, 195, 58, 0.3)'
//     },
//     closeBtn: {
//       position: 'absolute',
//       top: '20px',
//       right: '20px',
//       width: '50px',
//       height: '50px',
//       borderRadius: '50%',
//       background: 'linear-gradient(135deg, #86c33a 0%, #6faa2d 100%)',
//       border: 'none',
//       color: '#fff',
//       fontSize: '24px',
//       cursor: 'pointer',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 10,
//       transition: 'all 0.3s ease',
//       boxShadow: '0 8px 25px rgba(134, 195, 58, 0.4)'
//     },
//     videoWrapper: {
//       position: 'relative',
//       paddingBottom: '56.25%',
//       height: 0,
//       overflow: 'hidden'
//     },
//     video: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%'
//     }
//   };

 

//   const openModal = (videoUrl) => {
//     setCurrentVideo(videoUrl);
//     setModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setCurrentVideo('');
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <>
//       <section style={styles.section}>
//         <div style={styles.sectionBefore}></div>
//         <div style={styles.container}>
//           <div style={styles.sectionTitle}>
//             <h2 style={styles.title}>Success Stories</h2>
//             <p style={styles.subtitle}>Real People. Real Results. Real Transformations.</p>
//           </div>

//           <style>{`
//             .gym-owl-carousel {
//               overflow: visible !important;
//             }

//             .gym-owl-carousel .owl-stage-outer {
//               overflow: visible !important;
//             }

//             .gym-owl-carousel .owl-stage {
//               display: flex !important;
//               align-items: center !important;
//             }

//             .gym-owl-carousel .owl-item {
//               transition: all 0.5s ease;
//               opacity: 0.4;
//               transform: scale(0.75);
//               filter: grayscale(60%) brightness(0.6);
//             }

//             .gym-owl-carousel .owl-item.center {
//               opacity: 1 !important;
//               transform: scale(1.15) !important;
//               z-index: 999;
//               filter: grayscale(0%) brightness(1) !important;
//             }

//             .gym-owl-carousel .owl-item.center .team-card {
//               box-shadow: 0 20px 50px rgba(134, 195, 58, 0.4) !important;
//               border: 2px solid rgba(134, 195, 58, 0.4);
//             }

//             /* બંને બાજુના cards */
//             .gym-owl-carousel .owl-item.center + .owl-item,
//             .gym-owl-carousel .owl-item.active:has(+ .center) {
//               opacity: 0.65 !important;
//               transform: scale(0.85) !important;
//               filter: grayscale(40%) brightness(0.7) !important;
//             }

//             /* Navigation Buttons */
//             .gym-owl-carousel .owl-nav {
//               position: absolute;
//               top: 50%;
//               transform: translateY(-50%);
//               width: 100%;
//               display: flex !important;
//               justify-content: space-between;
//               pointer-events: none;
//             }

//             .gym-owl-carousel .owl-nav button {
//               width: 50px !important;
//               height: 50px !important;
//               border-radius: 50% !important;
//               background: #86c33a !important;
//               border: none !important;
//               transition: all 0.3s ease !important;
//               box-shadow: 0 4px 15px rgba(134, 195, 58, 0.3) !important;
//               display: flex !important;
//               align-items: center !important;
//               justify-content: center !important;
//               pointer-events: all;
//               margin: 0 !important;
//             }

//             .gym-owl-carousel .owl-nav button i {
//               font-size: 18px !important;
//               font-weight: 900 !important;
//               color: #ffffff !important;
//             }

//             .gym-owl-carousel .owl-nav button.owl-prev {
//               margin-left: -75px !important;
//             }

//             .gym-owl-carousel .owl-nav button.owl-next {
//               margin-right: -75px !important;
//             }

//             .gym-owl-carousel .owl-nav button:hover {
//               background: #6faa2d !important;
//               transform: scale(1.1) !important;
//               box-shadow: 0 6px 25px rgba(134, 195, 58, 0.5) !important;
//             }

//             .gym-owl-carousel .owl-nav button.disabled {
//               opacity: 0.3 !important;
//               cursor: not-allowed !important;
//             }

//             /* Responsive */
//             @media (max-width: 1200px) {
//               .gym-owl-carousel .owl-item.center {
//                 transform: scale(1.1) !important;
//               }
//             }

//             @media (max-width: 768px) {
//               .gym-owl-carousel .owl-item.center {
//                 transform: scale(1.05) !important;
//               }
//               .gym-owl-carousel .owl-nav button {
//                 width: 45px !important;
//                 height: 45px !important;
//               }
//               .gym-owl-carousel .owl-nav button i {
//                 font-size: 16px !important;
//               }
//             }

//             @media (max-width: 576px) {
//               .gym-owl-carousel .owl-item.center {
//                 transform: scale(1.02) !important;
//               }
//             }
//           `}</style>

//           <div style={styles.carouselContainer}>
//             <div className="owl-carousel owl-theme gym-owl-carousel" ref={carouselRef}>
//               {gymMembers.map((member) => (
//                 <div key={member.id} className="item">
//                   <div
//                     className="team-card"
//                     style={{
//                       ...styles.teamCard,
//                       backgroundColor: member.bgColor
//                     }}
//                     onMouseEnter={() => setHoveredCard(member.id)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div style={styles.sideLabel}>
//                       <span style={styles.sideLabelSpan}>{member.name}</span>
//                     </div>

//                     <div style={styles.teamContent}>
//                       <div style={styles.imageWrapper}>
//                         <img
//                           src={member.image}
//                           alt={member.name}
//                           style={{
//                             ...styles.teamImage,
//                             transform: hoveredCard === member.id ? 'scale(1.15)' : 'scale(1)'
//                           }}
//                         />

//                         <div
//                           style={{
//                             ...styles.playOverlay,
//                             opacity: hoveredCard === member.id ? 1 : 0
//                           }}
//                         >
//                           <button
//                             style={styles.playBtn}
//                             onClick={() => openModal(member.videoUrl)}
//                             onMouseOver={(e) => {
//                               e.currentTarget.style.transform = 'scale(1.2)';
//                               e.currentTarget.style.boxShadow = '0 15px 50px rgba(134, 195, 58, 0.7)';
//                             }}
//                             onMouseOut={(e) => {
//                               e.currentTarget.style.transform = 'scale(1)';
//                               e.currentTarget.style.boxShadow = '0 10px 40px rgba(134, 195, 58, 0.5)';
//                             }}
//                           >
//                             <i className="fa fa-play"></i>
//                           </button>
//                         </div>
//                       </div>

//                       <div style={styles.memberInfo}>
//                         <h3 style={styles.memberName}>{member.name}</h3>
//                         <p style={styles.memberRole}>{member.role}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {modalOpen && (
//         <div style={styles.modalOverlay} onClick={closeModal}>
//           <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//             <button
//               style={styles.closeBtn}
//               onClick={closeModal}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
//                 e.currentTarget.style.boxShadow = '0 12px 35px rgba(134, 195, 58, 0.6)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
//                 e.currentTarget.style.boxShadow = '0 8px 25px rgba(134, 195, 58, 0.4)';
//               }}
//             >
//               ✕
//             </button>
//             <div style={styles.videoWrapper}>
//               <iframe
//                 style={styles.video}
//                 src={currentVideo}
//                 title="Video Testimonial"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default GymVideoTestimonials;








import React, { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    videoSrc: `${process.env.PUBLIC_URL}/assets/video/1.mp4`,
    name: "Rahul Sharma",
  },
  {
    id: 2,
    videoSrc: `${process.env.PUBLIC_URL}/assets/video/2.mp4`,
    name: "Priya Patel",
  },
  {
    id: 3,
    videoSrc: `${process.env.PUBLIC_URL}/assets/video/3.mp4`,
    name: "Arjun Mehta",
  },
];

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M8 5v14l11-7z" />
  </svg>
);

/* ── Custom Video Modal ── */
const VideoModal = ({ video, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  };

  if (!video) return null;

  return (
    <div className="vmodal-overlay" onClick={handleClose}>
      <div className="vmodal-box" onClick={(e) => e.stopPropagation()}>
        <button className="vmodal-close" onClick={handleClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <video
          ref={videoRef}
          src={video.videoSrc}
          controls
          autoPlay
          muted
          preload="auto"
          playsInline
          className="vmodal-video"
        />
      </div>
    </div>
  );
};

/* ── Card Video Preview ── */
const CardVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      autoPlay
      loop
      playsInline
      preload="auto"
      className="vtesti-card-video"
    />
  );
};

/* ── Main Component ── */
const GymVideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      <style>{`
        
      `}</style>

      <section className="vtesti-section">
        <div className="vtesti-inner">

          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontWeight: "700",fontSize:"42px" }}>
              TRUSTED BY <span style={{ color: "#86c33a" }}>BRAND FOUNDERS</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="vtesti-grid">
            {testimonials.map((t) => (
              <div
                className="vtesti-card"
                key={t.id}
                onClick={() => setActiveVideo(t)}
              >
                <div className="vtesti-thumb">
                  <CardVideo src={t.videoSrc} />
                  <div className="vtesti-thumb-overlay" />
                  <div className="vtesti-play">
                    <PlayIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default GymVideoTestimonials;