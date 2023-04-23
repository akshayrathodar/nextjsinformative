import BecomeHeroSection from "@/components/BecomeHeroSection";
import BrandsContainer from "@/components/BrandsContainer";
import Link from "next/link";
import React from "react";

const becomeACustomer = () => {
  return (
    <div>
      {" "}
      <BecomeHeroSection
        videoSrc={"/vendor.mp4"}
        sectionSrc={"Become a Customer"}
      />
      <BrandsContainer imageSubset={[6, 7, 8, 9, 10]} />
      <div className="bg-black">
        <div className="container py-5 become-section">
          {/* <p data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
            Please fill below New customer application form.
          </p> */}

          <p data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
            We will be happy to welcome you on board as our partner.
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

export default becomeACustomer;
