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

const HomeCarousel = () => {
  const { CAROUSEL } = ASTHAIMAGES;

  const { CarouselImage1, CarouselImage2, CarouselImage3, CarouselImage4 } =
    CAROUSEL;
  return (
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
        <Image src={CarouselImage1} className="home-carousel-image" alt="..." />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={CarouselImage2} className="home-carousel-image" alt="..." />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={CarouselImage3} className="home-carousel-image" alt="..." />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={CarouselImage4} className="home-carousel-image" alt="..." />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeCarousel;
