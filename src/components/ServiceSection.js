import Image from "next/image";
import React, { useMemo } from "react";
import ASTHAIMAGES from "@/assets/img/images";

const ServiceSection = () => {
  const { Services, MedicineMap, ServiceLogos } = ASTHAIMAGES;

  const {
    AccessProgram,
    MarketAccess,
    Clearance,
    Treatment,
    Logistics,
    Sourcing,
  } = Services;

  const {
    AccessProgramLogo,
    MarketAccessLogo,
    ClearanceLogo,
    TreatmentLogo,
    LogisticsLogo,
    SourcingLogo,
  } = ServiceLogos;

  const getServiceComponent = (props) => {
    const { ImageSrc, Name, Logo, index } = props;

    return (
      <div
        className="p-0 m-0 "
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay={(index + 1) * 200}
        key={index}
        style={{
          width: 400,
        }}
      >
        <div className="card service-card ">
          <Image src={ImageSrc} className="card-img" alt="..." />
          <div className="card-img-overlay service-card-overlay">
            <Image src={Logo} alt="..." className="service-card-logo" />
            <h2 className="card-title">{Name}</h2>
          </div>
        </div>
      </div>
    );
  };

  const allService = [
    {
      Name: "Wholesale & Retail",
      Logo: AccessProgramLogo,
      ImageSrc: AccessProgram,
    },
    {
      Name: "Market Access",
      Logo: MarketAccessLogo,
      ImageSrc: MarketAccess,
    },
    {
      Name: "Sourcing",
      Logo: SourcingLogo,
      ImageSrc: Sourcing,
    },
    {
      Name: "Import/Export and documentation",
      Logo: TreatmentLogo,
      ImageSrc: Treatment,
    },
    {
      Name: "Logistics",
      Logo: LogisticsLogo,
      ImageSrc: Logistics,
    },
    {
      Name: "Get in touch",
      Logo: ClearanceLogo,
      ImageSrc: Clearance,
    },
  ];

  return (
    <div className="service-container home-service-container">
      <div className="container  ">
        <div className="row align-items-center justify-content-center ">
          <div className="col-lg-6 col-sm-12">
            <div
              className="image-container d-flex align-items-center justify-content-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <Image src={MedicineMap} alt="..." className="medicine-image" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h2
              className="service-header text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              Explore our services
            </h2>
          </div>
        </div>
        <div className="row flex-grow-1 gap-4 justify-content-center align-items-center ">
          {allService.map((service, index) => {
            return getServiceComponent({ ...service, index });
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
