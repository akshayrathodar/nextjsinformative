import TopBanner from "@/components/TopBanner";
import React from "react";
import ASTHAIMAGES from "@/assets/img/images";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const brands = () => {
  const { OurBrands } = ASTHAIMAGES;

  const { A, B, C, D, E, F } = OurBrands;

  return (
    <div className="main-container">
      <TopBanner
        bannerClassName="brands-banner"
        bannerTitle="Our Brands"
        // bannerSubtitle=" Want to know more about us ?"
        // bannerParagraph="We'd love to hear from you. Here's how you can reach us..."
      />
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        effect="slide"
        navigation
        loop={true}
      >
        <SwiperSlide>
          <Image src={A} className="home-carousel-image" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={B} className="home-carousel-image" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={C} className="home-carousel-image" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={D} className="home-carousel-image" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={E} className="home-carousel-image" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={F} className="home-carousel-image" alt="..." />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default brands;
