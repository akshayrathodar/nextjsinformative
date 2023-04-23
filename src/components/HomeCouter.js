import React, { useEffect } from "react";
// import "jquery.counterup/jquery.counterup.min.js";

const HomeCouter = () => {
  //   useEffect(() => {
  //     var counter = function () {
  //       if (jQuery(".counter").length) {
  //         jQuery(".counter").counterUp({
  //           delay: 10,
  //           time: 3000,
  //         });
  //       }
  //     };
  //     counter();
  //   }, []);

  //   useEffect(() => {
  // function counter(id, start, end, duration) {
  //   console.log("counter function called");
  //   let obj = document.getElementById(id),
  //     current = start,
  //     range = end - start,
  //     increment = end > start ? 1 : -1,
  //     step = Math.abs(Math.floor(duration / range)),
  //     timer = setInterval(() => {
  //       current = current + increment;
  //       obj.textContent = current;
  //       if (current == end) {
  //         clearInterval(timer);
  //       }
  //     }, step);
  // }
  // counter("count1", 0, 1200, 3000);
  // counter("count2", 100, 2323, 2500);
  // counter("count3", 0, 1200, 3000);
  // counter("count4", 10, 2323, 2500);
  // document.addEventListener("DOMContentLoaded", () => {
  //   console.log("DOM fully loaded and parsed");
  //   });
  //     return () => document.removeEventListener("DOMContentLoaded", null);
  //   }, []);
  return (
    <section id="counter">
      <section className="counter-section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-sm-6 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="counter-style-3  icon-up">
                <div className="icon-bx icon-md text-white">
                  <i className="bx bxs-band-aid "></i>
                </div>
                <div className="counter-info">
                  <div className="counter-num">
                    <h2 className="counter text-white ">3000 +</h2>
                  </div>
                  <h5 className="counter-text text-white">Global Products</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="counter-style-3  icon-up">
                <div className="icon-bx icon-md text-white">
                  <i className="bx bx-globe"></i>
                </div>
                <div className="counter-info">
                  <div className="counter-num">
                    <h2 className="counter text-white">10 +</h2>
                  </div>
                  <h5 className="counter-text text-white">Countries</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <div className="counter-style-3  icon-up">
                <div className="icon-bx icon-md text-white">
                  <i className="bx bxs-medal"></i>
                </div>
                <div className="counter-info">
                  <div className="counter-num">
                    <h2 className="counter text-white">100 +</h2>
                  </div>
                  <h5 className="counter-text text-white">Global Brands</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              <div className="counter-style-3  icon-up">
                <div className="icon-bx icon-md text-white">
                  <i className="bx bxs-trophy"></i>
                </div>
                <div className="counter-info">
                  <div className="counter-num">
                    <h2 className="counter text-white">15 + </h2>
                  </div>
                  <h5 className="counter-text text-white">
                    Years of Experience
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeCouter;
