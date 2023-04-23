import React from "react";
import ASTHAIMAGES from "@/assets/img/images";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const BrandsContainer = ({ imageSubset }) => {
  const { BrandContainer } = ASTHAIMAGES;

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 1000 }}
      effect="slide"
      loop={true}
    >
      {imageSubset.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="brands-image-container">
              <Image
                src={BrandContainer?.[item]}
                className="brands-carousel-image"
                alt="..."
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BrandsContainer;
