import Link from "next/link";
import React from "react";
const ContactForBecome = () => {
  return (
    <div className="contact-for-become-section ">
      <div className="container">
        <div className="row  sp15  justify-content-center gap-5 ">
          <div
            className="col-xl-5 col-md-6 m-b15 become-container"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <Link href="become-a-vendor">
              <div className="dz-box style-2">
                <div className="dz-media become-image become-vendor "></div>
                <div className="dz-info">
                  <h4 className="title px-2">
                    Become a Vendor
                    <i className="bx bxs-chevrons-right"></i>
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div
            className="col-xl-5 col-md-6 m-b15 become-container"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <Link href="become-a-customer">
              <div className="dz-box style-2">
                <div className="dz-media become-image become-wholesale "></div>
                <div className="dz-info">
                  <h4 className="title ">
                    Become a Customer <i className="bx bxs-chevrons-right"></i>
                  </h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForBecome;
