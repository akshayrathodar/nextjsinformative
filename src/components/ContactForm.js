import ASTHAIMAGES from "@/assets/img/images";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContactForm = () => {
  // -- Contact us form submit handler start

  const { Ukmap } = ASTHAIMAGES;

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    enquiryType: "Normal-Enquiry",
    mobileNumber: "",
    message: "",
  });

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (
      inputs.name &&
      inputs.email &&
      inputs.message &&
      inputs.enquiryType &&
      inputs.mobileNumber
    ) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`/api/contact/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });
        if (res.status === 200) {
          setForm({
            state: "success",
            message: "Your message was sent successfully.",
          });
          setInputs({
            name: "",
            email: "",
            enquiryType: "",
            mobileNumber: "",
            message: "",
          });
          setTimeout(() => {
            setForm({})
          }, 10000)
        } else {
          setForm({
            state: "error",
            message: res.statusText,
          });
          return;
        }



      } catch (error) {
        setForm({
          state: "error",
          message: "Something went wrong",
        });
      }
    }
  };

  // -- Contact us form submit handler end
  return (
    <>
      {form.state === "loading" ? (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : null}

      <section id="contact" className="contact-area ptb_100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div
              className="col-12 col-lg-5 contact-address-container footer-contact"
              data-aos="flip-left"
            >
              <div className="contact-address-wrapper">
                <Image src={Ukmap} alt="..." />
                <h3> UK</h3>
                <p>
                  81 HUNTERS GROVE, <br />
                  HARROW, LONDON,
                  <br /> HA3 9AD, UK <br />
                </p>
                <p className="color-secondary ">
                  <i class="bx bxs-phone"></i> +44 79794 05646 <br />
                  <i class="bx bxs-phone"></i> +44 20835 71549 <br />
                  <i class="bx bxs-envelope"></i> info@astha-group.co.uk
                </p>
              </div>

              <div className="d-flex justify-content-center">
                <div className="social-links mt-3 d-flex">
                  <Link
                    href="https://twitter.com/Asthagroupuk?t=HYNNxncfCl9db4m4SLOzqg&s=09"
                    className="twitter social-link-container"
                  >
                    <i className="bx bxl-twitter"></i>
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100090802361398&mibextid=ZbWKwL"
                    className="facebook social-link-container"
                  >
                    <i className="bx bxl-facebook"></i>
                  </Link>
                  <Link
                    href="https://instagram.com/asthagroupukltd?igshid=ZDdkNTZiNTM="
                    className="instagram social-link-container"
                  >
                    <i className="bx bxl-instagram"></i>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/archana-joshi-9b1276269"
                    className="linkedin social-link-container"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </Link>
                  <Link
                    href="https://wa.me/message/AEKLMX3VSLJYL1"
                    className="social-link-container"
                  >
                    <i className="bx bxl-whatsapp"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 pt-4 pt-lg-0" data-aos="flip-right">
              <div className="contact-box text-center d-flex flex-col gap-5 ">
                <h2 className="form-heading">Let&apos;s interact!</h2>
                <form
                  id="contact-form"
                  // method="POST"
                  // action="assets/php/mail.php"
                  onSubmit={(e) => onSubmitForm(e)}
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          required="required"
                          id="name"
                          value={inputs.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        {/* <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Company Name"
                        required="required"
                      /> */}
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="enquiryType"
                          value={inputs.enquiryType}
                          onChange={handleChange}
                        >
                          <option value="Normal-Enquiry">
                            Normal Enquiry{" "}
                          </option>
                          <option value="Feedback">Feedback</option>
                          <option value="Sales-Enquiry">Sales Enquiry</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                          value={inputs.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="subject"
                          placeholder="Phone"
                          id="mobileNumber"
                          required="required"
                          value={inputs.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Message"
                          id="message"
                          required="required"
                          value={inputs.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-bordered active btn-block mt-3 send-btn"
                      >
                        <span className="text-white pr-3">
                          <svg
                            className="svg-inline--fa fa-paper-plane fa-w-16"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="paper-plane"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                            ></path>
                          </svg>{" "}
                          <i className="fas fa-paper-plane"></i>
                        </span>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-message">
                  {form.state === "success" ? (<div>{form.message}</div>) : null}
                </p>
              </div>
            </div>
          </div>

          <div className="row  ">
            <div className="section-heading text-center mb-3">
              {/* <p className="d-none d-sm-block mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.
            </p>
            <p className="d-block d-sm-none mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati.
            </p> */}
            </div>
            <div className="contact-us">
              <ul className="d-flex justify-content-center flex-sm-col">
                <li
                  className="contact-info color-1 bg-hover active hover-bottom text-center p-5 m-3"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                >
                  <span>
                    <svg
                      className="svg-inline--fa fa-mobile-alt fa-w-10 fa-3x"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="mobile-alt"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
                      ></path>
                    </svg>{" "}
                    <i className="fas fa-mobile-alt fa-3x"></i>
                  </span>
                  <a className="d-block my-2 info-container" href="#">
                    <h3>+44 7979 405646</h3>
                  </a>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                </li>

                <li
                  className="contact-info color-3 bg-hover active hover-bottom text-center p-5 m-3"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="400"
                >
                  <span>
                    <svg
                      className="svg-inline--fa fa-envelope-open-text fa-w-16 fa-3x"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="envelope-open-text"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"
                      ></path>
                    </svg>{" "}
                    <i className="fas fa-envelope-open-text fa-3x"></i>
                  </span>
                  <a className="d-none d-sm-block my-2 " href="#">
                    <h3>
                      {" "}
                      <a
                        href="mailto: info@astha-group.co.uk"
                        className="text-decoration-none"
                      >
                        info@astha-group.co.uk
                      </a>
                    </h3>
                  </a>
                  <a className="d-block d-sm-none my-2 info-container" href="#">
                    <h3>
                      <a
                        href="mailto: info@astha-group.co.uk"
                        className="text-decoration-none"
                      >
                        info@astha-group.co.uk
                      </a>
                    </h3>
                  </a>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
