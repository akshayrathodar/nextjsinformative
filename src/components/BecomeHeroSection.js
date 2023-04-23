import React from "react";

const BecomeHeroSection = ({ videoSrc, sectionSrc }) => {
  return (
    <div className="hero-section">
      <video autoPlay muted loop className="w-100">
        <source type="video/mp4" src={videoSrc} />
      </video>
      <div className="hero-section-container top-banner-container">
        <div className="hero-section-content top-banner-content py-2">
          <h1
            className="hero-section-title"
            data-aos-duration="500"
            data-aos="fade-up-left"
          >
            {" "}
            {sectionSrc}{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BecomeHeroSection;
