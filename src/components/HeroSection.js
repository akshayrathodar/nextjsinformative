import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay muted loop className="w-100">
        <source type="video/mp4" src="/promo.mp4" />
      </video>
      <div className="hero-section-container">
        <div className="hero-section-content">
          <h1
            className="hero-section-title"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            ASTHA GROUP UK LTD
          </h1>
          <p
            className="hero-section-subtitle"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            RELIABILITY IN EVERY STEP
          </p>
          <Link
            className="btn btn-bordered active btn-block mt-3 send-btn hero-section-btn"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos="zoom-in"
            href={"/about"}
          >
            Know us more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
