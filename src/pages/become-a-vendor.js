import BecomeHeroSection from "@/components/BecomeHeroSection";
import BrandsContainer from "@/components/BrandsContainer";
import Link from "next/link";
import React from "react";

const becomeAVendor = () => {
  return (
    <div>
      <BecomeHeroSection
        videoSrc={"/vendor.mp4"}
        sectionSrc={"Become a Vendor"}
      />
      <BrandsContainer imageSubset={[11, 12, 13, 14, 15]} />

      <div className="bg-black">
        <div className="container py-5 become-section">
          <p data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100">
            We are looking for building more partnership with Principles/
            Manufacturers <br /> to give them access to difficult global
            markets.
          </p>
          {/* <p data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
            Kindly fill below new application form.
          </p> */}
          <p data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
            We welcome you on board.
          </p>

          <div
            className="d-flex justify-content-center mt-5"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <Link
              className={"become-btn "}
              href={"/contact#contact"}
              aria-current="page"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default becomeAVendor;
