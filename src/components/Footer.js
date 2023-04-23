import React, { useState } from "react";
import { HeaderMenu } from "@/util/HeaderMenu";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import logo from "@/assets/img/logo.svg";

const Footer = () => {
  // -- subscribe to newsletter code start

  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();

    setState("Loading");

    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("Success");

      // console.log(state);
      // console.log(response);
      // console.log(email);

      setEmail("");
    } catch (e) {
      setErrorMsg(e.response.data.error);
      setState("Error");
    }
  };

  // -- subscribe to newsletter code finish

  return (
    <footer id="footer">
      <div className="footer-top section-bg">
        <div className="container ">
          <div className="row ">
            <div
              className="col-lg-3 col-md-6 footer-contact"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos="fade-up"
            >
              <h3> ASTHA GROUP UK LTD</h3>
              <p>
                81 HUNTERS GROVE, <br />
                HARROW, LONDON,
                <br /> HA3 9AD, UK <br />
                <br />
                <strong>Tel:</strong> +44 79794 05646
                <br />
                <strong>Phone:</strong> +44 20835 71549
                <br />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto: info@astha-group.co.uk"
                  className="text-white text-decoration-none"
                >
                  info@astha-group.co.uk
                </a>{" "}
                <br />
              </p>
            </div>

            <div
              className="col-lg-3 col-md-6 footer-links"
              data-aos-duration="600"
              data-aos-delay="200"
              data-aos="fade-up"
            >
              <h4 className="footer-title">Quick Links</h4>
              <ul>
                {HeaderMenu.map((item) => {
                  return item?.key === "whoweare"
                    ? item?.subMenu?.map((item) => {
                        return (
                          <li key={item?.key}>
                            <Link
                              className="nav-link scrollto d-flex align-items-center"
                              href={item?.path || ""}
                            >
                              <i className="bx bx-chevron-right color-secondary "></i>

                              {item.name}
                            </Link>
                          </li>
                        );
                      })
                    : null;
                })}

                {HeaderMenu.map((item) => {
                  return !item?.subMenu ? (
                    <li key={item?.key}>
                      <Link
                        className="nav-link scrollto d-flex align-items-center"
                        href={item?.path || ""}
                      >
                        <i className="bx bx-chevron-right color-secondary"></i>

                        {item.name}
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>

            <div
              className="col-lg-3 col-md-6 footer-links"
              data-aos-duration="600"
              data-aos-delay="300"
              data-aos="fade-up"
            >
              <h4 className="footer-title">Work with us </h4>
              <ul>
                {HeaderMenu.map((item) => {
                  return item?.key === "workwithus"
                    ? item?.subMenu?.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link
                              className="nav-link scrollto d-flex align-items-center "
                              href={item?.path || ""}
                            >
                              <i className="bx bx-chevron-right color-secondary"></i>

                              {item.name}
                            </Link>
                          </li>
                        );
                      })
                    : null;
                })}
              </ul>
            </div>

            <div
              className="col-lg-3 col-md-6 footer-links"
              data-aos-duration="600"
              data-aos-delay="400"
              data-aos="fade-up"
            >
              <h4 className="footer-title">Social Links</h4>
              {/* 

              <p className="signup-newsletter">
                Sign up to get the latest world-changing news + deals. Lets keep
                the good time rollin&apos;
              </p>
              <div className="input-group newsletter-container">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-group-btn">
                  <button className="btn" type="submit" onClick={subscribe}>
                    SIGN UP!
                  </button>
                </span>
              </div> */}

              {/* <p>Let's connect</p> */}
              <div className="social-links mt-3">
                <Link
                  href="https://twitter.com/Asthagroupuk?t=HYNNxncfCl9db4m4SLOzqg&s=09"
                  className="twitter"
                >
                  <i className="bx bxl-twitter"></i>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100090802361398&mibextid=ZbWKwL"
                  className="facebook"
                >
                  <i className="bx bxl-facebook"></i>
                </Link>
                <Link
                  href="https://instagram.com/asthagroupukltd?igshid=ZDdkNTZiNTM="
                  className="instagram"
                >
                  <i className="bx bxl-instagram"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/archana-joshi-9b1276269"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </Link>
                <Link href="https://wa.me/message/AEKLMX3VSLJYL1">
                  <i className="bx bxl-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="d-flex justify-content-center gap-3">
              <Link href="/" className="logo">
                <Image src={logo} alt="" className="img-fluid" />
              </Link>
              <h1 className="logo">
                <Link
                  href="/"
                  className="group-name text-decoration-none color-white"
                >
                  ASTHA GROUP UK LTD
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-footer-container">
        <div className="container footer-bottom clearfix d-flex justify-content-center ">
          <div className="copyright">
            &copy; Copyright {new Date().getFullYear()}
            <strong>
              <span> ASTHA GROUP UK LTD</span>
            </strong>
            . All Rights Reserved
          </div>
          {/* <div className="credits">
            Designed by <a href="#">Trikasoft.tech</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
