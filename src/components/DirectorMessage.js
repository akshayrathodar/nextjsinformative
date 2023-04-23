import React from "react";
import ASTHAIMAGES from "@/assets/img/images";
import Image from "next/image";

const DirectorMessage = () => {
  const { Ajoshi, Values } = ASTHAIMAGES;
  const { Team, Engagement, Excellence, Expertise, Development } = Values;

  const allValues = [
    {
      name: "Excellence",
      imgSrc: Excellence,
      content: "We combine results with responsibility.",
    },
    {
      name: "Expertise",
      imgSrc: Expertise,
      content: "We combine knowledge with benefit.",
    },
    {
      name: "Engagement",
      imgSrc: Engagement,
      content: "We combine passion with added value.",
    },
    {
      name: "Development",
      imgSrc: Development,
      content: "We combine ideas with perspective ",
    },
    {
      name: "Team",
      imgSrc: Team,
      content: "We do this together.",
    },
  ];

  const getValueCard = ({ name, imgSrc, content, index }) => {
    return (
      <div
        // className="col-lg-3 col-sm-6 p-0"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay={(index + 1) * 200}
        key={index}
        style={{
          width: 400,
        }}
        className="flex-fill pm-0 px-sm-1"
      >
        <div className="card value-card-container ">
          <Image src={imgSrc} className="card-img value-card " alt="..." />
          <div className="card-img-overlay value-card-overlay">
            <div className="animation-container">
              <h2 className="value-card-title">{name}</h2>
              <p>{content} </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="main-container">
      <div className="container py-5">
        <div className="row gap-lg-0 gap-5">
          <div
            className="col-lg-6 col-sm-12  flex-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="card director-card ">
              <Image src={Ajoshi} className="card-img" alt="..." height={475} />
            </div>
          </div>
          <div
            className="col-lg-6 col-sm-12  px-5 d-flex justify-content-center flex-col"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <p className="director-para">
              My experience has taught me that through personal{" "}
              <strong>COMMITMENT</strong> we can all achieve great results with
              our performance, which always push us forward. That&apos;s why we
              all work together on our success every day. For me, EXPERTISE
              means knowing our business and at the same time being open to new
              ideas. As <strong>ONE TEAM</strong> we can accept and master any
              challenge in the current and future healthcare sector.
            </p>
            <strong className="director-para font-bold ">
              Archana Joshi <br /> Director, UK (Pharmacist)
            </strong>
          </div>
        </div>
      </div>

      <div className="service-container bg-black">
        <div className="container py-5 ">
          <div className="row d-flex flex-col align-items-center justify-content-center ">
            <h2 className="our-value-heading ">Our Values</h2>

            <div className="row pt-5 mt-3 d-flex gap-3 align-items-center justify-content-center p-0">
              {allValues.map((item, index) => getValueCard({ ...item, index }))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessage;
