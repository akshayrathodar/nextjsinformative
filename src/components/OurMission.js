import ASTHAIMAGES from "@/assets/img/images";
import Image from "next/image";
import React from "react";

const OurMission = () => {
  const { Ourmission } = ASTHAIMAGES;

  return (
    <div className="our-mission-container">
      <div>
        <div className="row sp15 justify-content-center d-flex  ">
          <div
            className="col-12 col-lg-6 m-b15 become-container px-0 our-image-container"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <Image src={Ourmission} alt="..." height={500} />
          </div>
          <div
            className="col-12 col-lg-6 m-b15 flex-col gap-5 d-flex mx-auto align-items-center justify-content-center px-10 mx-5 "
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <h1 className="color-secondary text-center font-bold fs-1">
              Our Mission
            </h1>
            <p className="text-center our-mission-para">
              To provide a market leading range of pharmaceuticals at
              competitive prices, offering exceptional service to customers from
              small independent pharmacies to large multinational wholesalers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
