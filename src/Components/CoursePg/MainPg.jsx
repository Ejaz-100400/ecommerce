import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom'
import { Context } from "../../Context";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function MainPg(props){
    const{randompick}=React.useContext(Context)
    const [carousel,setcarousel]=React.useState([])

    React.useEffect(()=>{
        fetch('http://localhost:8050/Carousel').
        then(response => response.json())
        .then(data=>setcarousel(data.Carousel))
    })

    // returning top pick items 

    // returning Carousel items
    const CourseElements = carousel.map((item)=>{
        return(
            <SwiperSlide className="swip">
                <div className="userbanner-sec container position-relative mt-4 skeleton"  style={{backgroundImage:`linear-gradient(115deg,rgba(0, 0, 0, 0.902),rgba(0, 0, 0, 0.521),rgba(0, 0, 0, 0.607)),url(${item.img})`}}>
                 <div className="banner-title position-absolute" style={{bottom:'30px',left:'50px'}}>
                 <h2 className="text-light">{item.course_name}</h2>
                 <div className="mt-3 d-flex gap-3">
                    <div className="d-flex gap-1 align-items-center">
                        <i class="fa-solid fa-star fa-1x" style={{color:'yellow'}}></i>
                        <span className="fw-bold text-light">{item.rating}</span>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                    <i class="fa-solid fa-clock text-light"></i>
                    <span className="fw-bold text-light">{item.duration}</span>
                    </div>
                 </div>
                 <button className="btn btn-primary mt-4 fw-bold">Explore!</button>
                 </div>
                 </div>
            </SwiperSlide>
        )
    })

    return(

        <main className='user-mainpg-section  px-3 py-4 container' id={props.light?'dark':'light'}>
            {/* Carousel Section */}
            <section className='carousel-sec'>
            <h3 className="fw-bold">Our New Courses</h3>
            <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            >
                {CourseElements}
            </Swiper>
            </section>

            {/* Popular Courses */}
            <section className="user-activities position-relative mt-4 py-3">
                <h3 className="">Our Top Picks for You</h3>
                <div className='toppick-item position-relative d-flex mt-2'>
                    <div className='course-img skeleton-courseimg' style={{backgroundImage:`linear-gradient(115deg,rgba(0, 0, 0, 0.902),rgba(0, 0, 0, 0.521),rgba(0, 0, 0, 0.607)),url(${randompick.img})`}}>
                    </div>
                    <div className='course-desc p-3'>
                        <h3 className='fw-bold'>{randompick.course_name}</h3>
                        <div className="mt-3 d-flex gap-3">
                    <div className="d-flex gap-1 align-items-center">
                        <i class="fa-solid fa-star fa-1x" style={{color:'yellow'}}></i>
                        <span className=" text-dark">{randompick.rating}</span>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                    <i class="fa-solid fa-clock text-dark"></i>
                    <span className=" text-dark">{randompick.duration}</span>
                    </div>
                 </div>
                 <div className='course-btns d-flex gap-3 align items-center mt-3'>
                        <Link className='btn btn-primary' to={'/userpg/coursename'}>
                            Explore Now!
                        </Link>
                        <button className='btn btn-primary'>
                            Add to cart
                        </button>
                    </div>
                    </div>
                </div>
            </section>
            
        </main>
    )
}


{/* <SwiperSlide className="swip">
                <div className="userbanner-sec px-2" id='img1'>
                 <h4></h4>
                 </div>
                    {/* <div className="userbanner-sec px-2">
                    <video autoPlay loop muted width='200' src="https://cdn.dribbble.com/users/444644/screenshots/17502018/media/12ccf5a17cb4b9ae5734bd2963fdf4b9.mp4"></video>
                    </div> */}
                // </SwiperSlide>

                // <SwiperSlide className="swip">
                // <div className="userbanner-sec px-2" id='img2'>
                //  </div>

                    {/* <div className="userbanner-sec px-2">
                        <video autoPlay loop muted width='200' src="https://cdn.dribbble.com/users/5031392/screenshots/16744973/media/9afdd8b625947bdff34e1db070cb634e.mp4"></video>
                    </div> */}

                {/* </SwiperSlide>

                <SwiperSlide className="swip">
                <div className="userbanner-sec px-2" id='img3'>
                 </div>
                </SwiperSlide> */}