import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Category.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category-slider-outer">
      <div className="max-width categaory-outer-slider">
        <div className="review-slider-head">
          <h1>Categories</h1>
        </div>
        <Swiper
          className="mySwiper"
          navigation={true}
          loop={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}>
          <SwiperSlide>
            <div className="category-slider-inner">
            <Link to="/auction">
              <img src="/Images/cat/vehicle.png" alt="" />
              <h1>Vehicles</h1>
              </Link>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="category-slider-inner">
              <Link to="/auction">
              <img src="/Images/cat/diamaod.png" alt="" />
              <h1>Jewelery</h1>
              </Link>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="category-slider-inner">
              <img src="/Images/cat/watch.png" alt="" />
              <h1>Watches</h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="category-slider-inner">
              <img src="/Images/cat/camera.png" alt="" />
              <h1>Electronics</h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="category-slider-inner">
              <img src="/Images/cat/sport.png" alt="" />
              <h1>Sporst</h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="category-slider-inner">
              <img src="/Images/cat/realstate.png" alt="" />
              <h1>Real State</h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="category-slider-inner">
              <img src="/Images/cat/realstate.png" alt="" />
              <h1>Real State</h1>
            </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
