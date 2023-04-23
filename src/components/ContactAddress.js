import React from "react";
import ASTHAIMAGES from "@/assets/img/images";
import Image from "next/image";

const ContactAddress = () => {
  const { Ukmap } = ASTHAIMAGES;

  return (
    <div id="contact-address">
      <div className="container">
        <div className="row ">
          <div
            className="contact-address-container footer-contact col-lg-4 col-sm-10 mx-auto"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos="fade-up"
          >
            <div className="contact-address-wrapper">
              <Image src={Ukmap} alt="..." />
              <h3> UK</h3>
              <p>
                81 HUNTERS GROVE, <br />
                HARROW, LONDON,
                <br /> HA3 9AD, UK <br />
              </p>
              <p className="color-secondary">
                +44 208 357 1549 <br />
                +44 757495 9069
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
