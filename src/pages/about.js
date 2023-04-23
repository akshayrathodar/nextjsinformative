import ASTHAIMAGES from "@/assets/img/images";
import AboutContent from "@/components/AboutContent";
import BrandsContainer from "@/components/BrandsContainer";
import OurMission from "@/components/OurMission";
import TopBanner from "@/components/TopBanner";
import Image from "next/image";
import React from "react";

const about = () => {
  const { Pride } = ASTHAIMAGES;

  return (
    <div className="main-container">
      <TopBanner
        bannerClassName="about-us-banner"
        bannerTitle="About Us"
        bannerSubtitle=" Want to know more about us ?"
        // bannerParagraph="We'd love to hear from you. Here's how you can reach us..."
      />
      <BrandsContainer imageSubset={[1, 2, 3, 4, 5]} />
      <AboutContent />
      <OurMission />
      <div className="d-flex justify-content-center align-items-center pride-container container flex-col p-5 ">
        <h2
          className="color-secondary text-center font-bold fs-1 "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          Core Values
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          className="fs-4"
        >
          Our core Values guides us, provides a framework and defines what is
          important to us on a daily basis.
        </p>
        <Image
          src={Pride}
          alt="..."
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        />
      </div>
    </div>
  );
};

export default about;
