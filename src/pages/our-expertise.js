import TopBanner from "@/components/TopBanner";
import React from "react";
import ASTHAIMAGES from "@/assets/img/images";
import Image from "next/image";
import Link from "next/link";
import BrandsContainer from "@/components/BrandsContainer";

const ourExpertise = () => {
  const { Expertise } = ASTHAIMAGES;
  const { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten } =
    Expertise;

  const expertisePartOne = [
    {
      name: "Pharmaceuticals",
      imgSrc: One,
    },
    {
      name: "R & D of pharmaceutical formulations",
      imgSrc: Two,
    },
    {
      name: "Health and personal care",
      imgSrc: Three,
    },
  ];

  const expertisePartTwo = [
    {
      name: "Skincare products",
      imgSrc: Four,
    },
    {
      name: "Private / White label products",
      imgSrc: Five,
    },
  ];

  const expertisePartThree = [
    {
      name: "Beauty and Nutraceuticals",
      imgSrc: Six,
    },
    {
      name: "Organic products",
      imgSrc: Seven,
    },
    {
      name: "OTC products",
      imgSrc: Eight,
    },
  ];

  const expertisePartFour = [
    {
      name: "Vitamins & Supplements",
      imgSrc: Nine,
    },
    {
      name: "Add your product",
      imgSrc: Ten,
    },
  ];

  const getExpertiseTypeOne = ({ imgSrc, name, index }) => {
    return (
      <div
        className=" col-12 col-md-4 "
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay={(index + 1) * 200}
        key={index}
      >
        <div className="card service-card expertise-card ">
          <Image src={imgSrc} className="card-img  " alt="..." />
          <div className="card-img-overlay service-card-overlay ">
            <p className="card-title">{name}</p>
          </div>
        </div>
      </div>
    );
  };

  const getExpertiseTypeTwo = ({ imgSrc, name, index }) => {
    return (
      <div
        className="col-md-6 col-12"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay={(index + 1) * 200}
        key={index}
      >
        {name === "Add your product" ? (
          <Link href={"/contact#contact"}>
            <div className="card service-card expertise-card ">
              <Image src={imgSrc} className="card-img  " alt="..." />
              <div className="card-img-overlay service-card-overlay ">
                <p className="card-title">{name}</p>
              </div>
            </div>
          </Link>
        ) : (
          <div className="card service-card expertise-card ">
            <Image src={imgSrc} className="card-img  " alt="..." />
            <div className="card-img-overlay service-card-overlay ">
              <p className="card-title">{name}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="main-container">
      <TopBanner
        bannerClassName="our-expertise-banner"
        bannerTitle="Our Expertise"
        // bannerSubtitle=" Want to know more about us ?"
        // bannerParagraph="We'd love to hear from you. Here's how you can reach us..."
      />
      <BrandsContainer imageSubset={[26, 27, 28, 29]} />

      <div className="container py-5 px-0">
        <div className="row d-flex flex-col align-items-center justify-content-center ">
          <h2 className="our-expertise-heading  ">Why Choose Us</h2>

          <div className="row pt-5 mt-3 d-flex gap-3 align-items-center justify-content-center p-0 ">
            <div className="d-flex align-items-center justify-content-center gap-3 flex-sm-col px-sm-1 ">
              {expertisePartOne.map((item, index) =>
                getExpertiseTypeOne({ ...item, index })
              )}
            </div>
            <div className="d-flex align-items-center justify-content-center pm-0 gap-3 flex-sm-col px-sm-1 ">
              {expertisePartTwo.map((item, index) =>
                getExpertiseTypeTwo({ ...item, index })
              )}
            </div>

            <div className="d-flex align-items-center justify-content-center gap-3 flex-sm-col px-sm-1  ">
              {expertisePartThree.map((item, index) =>
                getExpertiseTypeOne({ ...item, index })
              )}
            </div>
            <div className="d-flex align-items-center justify-content-center  pm-0 gap-3 flex-sm-col px-sm-1 ">
              {expertisePartFour.map((item, index) =>
                getExpertiseTypeTwo({ ...item, index })
              )}
            </div>
          </div>
        </div>

        <div className="row d-flex flex-col align-items-center justify-content-center">
          <div className="d-flex justify-content-center mt-5">
            <Link
              className={"letsconnect-btn"}
              href={"/contact#contact"}
              aria-current="page"
            >
              <i className="bx bxl-telegram contact-icon "></i>
              Let&apos;s connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourExpertise;
