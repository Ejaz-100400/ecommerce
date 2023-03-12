import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from 'swiper';

import { Context } from '../../Context';
export default function Coursec(){
    const{courses}=React.useContext(Context)
    const courselem = courses.map(courses => {
        return(
            <SwiperSlide>
               <div className='courses-pg-item  position-relative mt-3'>
                <img src={courses.img} alt="" className='skeleton' />
                <div className='mt-2 px-2 w-100'>
                <span className='course-title'>{courses.course_name}</span>
                </div>
                <div className='mt-1 px-2 position-absolute btn-sec d-flex gap-4'>
                    <button className='btn btn-primary'>Explore</button>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>
                <div>
                
                </div>
               </div>
            </SwiperSlide>
        )
    })
    return(
    <main className='user-mainpg-section mt-5 mb-5  container position-relative w-75'>
          <div className="form-floating  search position-absolute mt-4" style={{width:'350px'}}>
                <input type="text"  className="form-control login bg-light" id="floatingInput"   name='text' required/>
                <label htmlFor="floatingInput">Search</label>
            </div>
            <div className="course-sec container mt-3"> 
                <h4 className='p-3'>Recommended for You</h4>
                <Swiper
         slidesPerView={4}
         spaceBetween={10}
        navigation={{
            clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper">
            {courselem}
        </Swiper>

        <h4 className='p-3'>Recommended for You</h4>
                <Swiper
         slidesPerView={4}
         spaceBetween={10}
        navigation={{
            clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper">
            {courselem}
        </Swiper>

        <h4 className='p-3'>Recommended for You</h4>
                <Swiper
         slidesPerView={4}
         spaceBetween={10}
        navigation={{
            clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper">
            {courselem}
        </Swiper>
              
            </div>
    </main>

    )
}