import BrandsContainer from "@/components/BrandsContainer";
import ContactForm from "@/components/ContactForm";
import TopBanner from "@/components/TopBanner";
import React from "react";

const contact = () => {
  return (
    <div className="main-container">
      <TopBanner
        bannerClassName="contact-us-banner"
        bannerTitle="Contact Us"
        bannerSubtitle=" Want to get in touch ?"
        bannerParagraph="We'd love to hear from you. Here's how you can reach us..."
      />
      <BrandsContainer imageSubset={[16, 17, 18, 19, 20]} />

      {/* <ContactAddress /> */}
      <ContactForm />
      {/* <ContactForBecome /> */}
      {/* <GoogleMapView /> */}
    </div>
  );
};

export default contact;
