import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Review.css";

// import required modules
import { Navigation } from "swiper/modules";

import { Star } from "react-feather";
import { fetchReviews } from "../../Features/review/reviewSlice";

const Review = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);
  return (
    <div className="review-slider-outer">
      <div className="max-width outer-slider">
        <div className="review-slider-head">
          <h1>Clients Reviews</h1>
          <p>
            "Our priority is ensuring client satisfaction. We are dedicated to
            understanding and surpassing their expectations with personalized
            solutions and exceptional service. Trust, respect, and long-term
            partnerships define our commitment."
          </p>
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
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}>
          {reviews?.map((user) => (
            <SwiperSlide>
              <div className="slider-inner-content">
                <img src="/Images/user.png" alt="" />
                <p>{user.message}</p>
                <div className="name-stars">
                  <h1>{user.name}</h1>
                  <div className="rating-stars">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="name-stars">
                <h1>Zultaif Hassan</h1>
                <div className="rating-stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="name-stars">
                <h1>Zultaif Hassan</h1>
                <div className="rating-stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="name-stars">
                <h1>Zultaif Hassan</h1>
                <div className="rating-stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="name-stars">
                <h1>Zultaif Hassan</h1>
                <div className="rating-stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
