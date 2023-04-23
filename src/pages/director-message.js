import BrandsContainer from "@/components/BrandsContainer";
import DirectorMessage from "@/components/DirectorMessage";
import TopBanner from "@/components/TopBanner";
import React from "react";

const directorMessage = () => {
  return (
    <div className="main-container">
      <TopBanner
        bannerClassName="director-message-banner"
        bannerTitle="Director's Message"
        // bannerSubtitle=" Want to know more about us ?"
        // bannerParagraph="We'd love to hear from you. Here's how you can reach us..."
      />
      <BrandsContainer imageSubset={[21, 22, 23, 24, 25]} />

      <DirectorMessage />
    </div>
  );
};

export default directorMessage;
