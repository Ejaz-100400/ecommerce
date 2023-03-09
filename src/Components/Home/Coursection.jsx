import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination"
// import required modules
import { EffectCoverflow, Pagination } from "swiper";


export default function Coursection(){
    return(
        <>
        {/* Course search & Categories */}
        <section className="d-flex course-main">
            <div className="course-1-left d-flex  align-items-center px-5">
                <div>
                    <h4 className="text-light">Free Online Courses for Newbies!</h4>
                    <span className="text-light">Explore our best free courses here where you need to up-skill your skills</span>
                    <div className="form-group d-flex align-items-center justify-content-center mt-3">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput"  name='email' required/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <button type="submit" className="getstarted" >Explore Now!<i className="fa-solid fa-chevron-right fa-1x" /></button>
                    </div>
                </div>
            </div>
            <div className="course-1-right d-flex flex-wrap gap-3 align-items-center justify-content-center">
                <div className="home-course-card d-flex flex-column justify-content-center align-items-center">
                    <img src="" alt="courseimg"  width='60'/>
                    <span>Course Name</span>
                </div>
                <div className="home-course-card d-flex flex-column justify-content-center align-items-center">
                    <img src="" alt="courseimg"  width='60'/>
                    <span>Course Name</span>
                </div>
                <div className="home-course-card d-flex flex-column justify-content-center align-items-center">
                    <img src="" alt="courseimg"  width='60'/>
                    <span>Course Name</span>
                </div>
                <div className="home-course-card d-flex flex-column justify-content-center align-items-center">
                    <img src="" alt="courseimg"  width='60'/>
                    <span>Course Name</span>
                </div>
                <div className="home-course-card d-flex flex-column justify-content-center align-items-center">
                    <img src="" alt="courseimg"  width='60'/>
                    <span>Course Name</span>
                </div>
                <div className="home-course-card d-flex flex-column justify-content-center align-items-center">
                    <img src="" alt="courseimg"  width='60'/>
                    <span>Course Name</span>
                </div>
            </div>
        </section>
        {/* Popular Most Course */}
        <section className="course-popular-main container pt-5">
            <h1 className="text-light fw-bold text-center">Our Popular Courses</h1>
            <div className="overflow-hidden home-course-items container d-flex mt-5 bg-success py-5
            y-4">
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 90,
          depth: 0,
          modifier: 10,
          initialSlide: 3,
          loop:true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" width='300' height='300' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" width='300' height='300' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" width='300' height='300'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg"  width='300' height='300'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" width='300' height='300' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" width='300' height='300'/>
        </SwiperSlide>
      </Swiper>
            </div>
        </section>
        </>
    )
}