import React from "react";

import { Autoplay, Pagination } from "swiper/modules";

import { Navigation, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "../assets/Bannar-img/img1.webp";
import image2 from "../assets/Bannar-img/img2.webp";
import image3 from "../assets/Bannar-img/img3.jpg";
import image4 from "../assets/Bannar-img/img4.jpg";
import image5 from "../assets/Bannar-img/img5.jpg";
import image6 from "../assets/Bannar-img/img6.jpg";
import image7 from "../assets/Bannar-img/img7.jpg";
import image8 from "../assets/Bannar-img/img8.jpg";
import image9 from "../assets/Bannar-img/img9.jpg";
import image10 from "../assets/Bannar-img/new-skills-400884037.webp";

const Banner = () => {
  return (
    <div className="my-10 px-2 sm:px-4 md:px-8 lg:px-12 rounded-xl">
      <Swiper
        // install Swiper modules

        modules={[Autoplay, Pagination, Navigation]} // Add Autoplay to modules
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500, // Delay in milliseconds between slides
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
      >
        <SwiperSlide className="">
          <img
            src={image1}
            alt=""
            className="h-80 w-full object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt=""
            className="h-80 w-full object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image3}
            alt=""
            className="h-80 w-full object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image4}
            alt=""
            className="h-80 w-full object-cover rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="h-80 w-full object-cover rounded-xl"
            src={image5}
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-80 w-full object-cover rounded-xl"
            src={image6}
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-80 w-full object-cover rounded-xl"
            src={image7}
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-80 w-full object-cover rounded-xl"
            src={image8}
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-80 w-full object-cover rounded-xl"
            src={image9}
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-80 w-full object-cover rounded-xl"
            src={image10}
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
