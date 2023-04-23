import React from "react";
import ASTHAIMAGES from "@/assets/img/images";
import Image from "next/image";

const TrueIntelligence = () => {
  const { TrueIntelligence } = ASTHAIMAGES;

  // TrueIntelligence;
  return (
    <div id="true-intelligence" className="true-intelligence">
      {" "}
      <div className="container">
        <div className="row gap-m-5">
          <div
            className="col-lg-6 col-sm-12  flex-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="card intelligence-card ">
              <Image src={TrueIntelligence} className="card-img" alt="..." />
            </div>
            {/* <div className="trueintelligence-image"></div> */}
            {/* <Image src={TrueIntelligence} alt="..." /> */}
          </div>
          <div
            className="col-lg-6 col-sm-12  px-5 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="true-intelligence-container">
              <div>
                <h2 className="true-intelligence-header">ASTHA GROUP UK LTD</h2>
                <h4 className="true-intelligence-subheader color-secondary ">
                  Your global sourcing partner
                </h4>
              </div>
              <div>
                <h6 className="true-intelligence-span">
                  <i className="bx bx-plus-medical color-secondary"></i>
                  Best price guaranteed
                </h6>
                <h6 className="true-intelligence-span">
                  <i className="bx bx-plus-medical color-secondary"></i>
                  Assurance of best service
                </h6>
                <h6 className="true-intelligence-span">
                  <i className="bx bx-plus-medical color-secondary"></i>
                  Countless brand under one roof
                </h6>
                <h6 className="true-intelligence-span">
                  <i className="bx bx-plus-medical color-secondary"></i>World
                  wide delivery
                </h6>
              </div>
              {/* <i className="bx bx-plus-medical"></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrueIntelligence;
