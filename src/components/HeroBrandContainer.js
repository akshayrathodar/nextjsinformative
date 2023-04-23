import React, { useEffect, useState } from "react";
import ASTHAIMAGES from "@/assets/img/images";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
const HeroBrandContainer = () => {
  //   useEffect(() => {
  //     const myCarouselElement = document.querySelector("#carouselExampleFade");

  //     const carousel = new bootstrap.Carousel(myCarouselElement, {
  //       interval: 300,
  //       touch: false,
  //       cycle: true,
  //       ride: "carousel",
  //     });
  //   }, []);
  const { BRANDS } = ASTHAIMAGES;

  const {
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
    Brand9,
    Brand10,
    Brand11,
    Brand12,
    Brand13,
    Brand14,
    Brand15,
  } = BRANDS;

  const [isSmallerDevice, setIsSmallerDevice] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSmallerDevice(true);
    }
  }, []);

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 1000 }}
      effect="slide"
      loop={true}
    >
      {isSmallerDevice ? (
        <>
          <SwiperSlide>
            <div className="brands-image-container">
              <Image src={Brand1} className="brands-carousel-image" alt="..." />

              <Image
                src={Brand14}
                className="brands-carousel-image"
                alt="..."
              />
              <Image
                src={Brand15}
                className="brands-carousel-image"
                alt="..."
              />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="brands-image-container">
              <Image
                src={Brand13}
                className="brands-carousel-image"
                alt="..."
              />
              <Image src={Brand2} className="brands-carousel-image" alt="..." />
              <Image src={Brand3} className="brands-carousel-image" alt="..." />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="brands-image-container">
              <Image src={Brand4} className="brands-carousel-image" alt="..." />
              <Image src={Brand5} className="brands-carousel-image" alt="..." />
              <Image src={Brand6} className="brands-carousel-image" alt="..." />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="brands-image-container">
              <Image src={Brand7} className="brands-carousel-image" alt="..." />
              <Image src={Brand8} className="brands-carousel-image" alt="..." />
              <Image src={Brand9} className="brands-carousel-image" alt="..." />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brands-image-container">
              <Image
                src={Brand10}
                className="brands-carousel-image"
                alt="..."
              />
              <Image
                src={Brand11}
                className="brands-carousel-image"
                alt="..."
              />
              <Image
                src={Brand12}
                className="brands-carousel-image"
                alt="..."
              />
            </div>{" "}
          </SwiperSlide>
        </>
      ) : (
        <>
          <SwiperSlide>
            <div className="brands-image-container">
              <Image src={Brand1} className="brands-carousel-image" alt="..." />
              <Image src={Brand2} className="brands-carousel-image" alt="..." />
              <Image src={Brand3} className="brands-carousel-image" alt="..." />
              <Image src={Brand4} className="brands-carousel-image" alt="..." />
              <Image src={Brand5} className="brands-carousel-image" alt="..." />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brands-image-container">
              <Image src={Brand6} className="brands-carousel-image" alt="..." />
              <Image src={Brand7} className="brands-carousel-image" alt="..." />
              <Image src={Brand8} className="brands-carousel-image" alt="..." />
              <Image src={Brand9} className="brands-carousel-image" alt="..." />
              <Image
                src={Brand10}
                className="brands-carousel-image"
                alt="..."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brands-image-container">
              <Image
                src={Brand11}
                className="brands-carousel-image"
                alt="..."
              />
              <Image
                src={Brand12}
                className="brands-carousel-image"
                alt="..."
              />
              <Image
                src={Brand13}
                className="brands-carousel-image"
                alt="..."
              />
              <Image
                src={Brand14}
                className="brands-carousel-image"
                alt="..."
              />
              <Image
                src={Brand15}
                className="brands-carousel-image"
                alt="..."
              />
            </div>{" "}
          </SwiperSlide>
        </>
      )}
    </Swiper>
  );
};

export default HeroBrandContainer;
