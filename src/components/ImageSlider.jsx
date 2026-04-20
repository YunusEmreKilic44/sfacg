import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "./ImageSlider.css";
import SearchInput from "./SearchInput";

const images = [
  "http://rs.sfacg.com/web/m/images/homePush/2026/02/48a42a1a-976a-4866-9df0-2475c98916f7.jpg",
  "http://rs.sfacg.com/web/m/images/homePush/2026/04/21bb3ef7-67e8-4147-955f-a8fa9fd31a93.jpg",
  "http://rs.sfacg.com/web/m/images/homePush/2026/04/3698f97a-4e95-4cfa-95f7-70335f9d7b1d.jpg",
];

const ImageSlider = () => {
  return (
    <div className="max-w-300 mx-auto relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} className="w-full h-115 object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <SearchInput />
    </div>
  );
};

export default React.memo(ImageSlider);
