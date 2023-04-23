import React from "react";

const TopBanner = ({
  bannerClassName,
  bannerTitle,
  bannerSubtitle,
  bannerParagraph,
}) => {
  return (
    <div>
      <div className={`top-banner ${bannerClassName}`}>
        <div className="top-banner-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="top-banner-content">
                  <h2
                    className="text-white text-uppercase mb-3"
                    data-aos-duration="500"
                    data-aos="fade-up-left"
                  >
                    {bannerTitle}
                  </h2>
                  <h4
                    className="text-white"
                    data-aos-duration="500"
                    // data-aos-delay="200"
                    data-aos="fade-up-left"
                  >
                    {" "}
                    {bannerSubtitle}{" "}
                  </h4>
                  <span
                    className="text-white"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos="fade-up-left"
                  >
                    {bannerParagraph}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
