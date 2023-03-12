import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from 'swiper';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
export default function Coursetiles(){
    const{courses,displaycoursedetail,displaycourses}=React.useContext(Context)
    console.log(displaycourses)
    const courselem = courses.map(courses => {
        return(
            <SwiperSlide>
               <div className='courses-pg-item skeleton  position-relative mt-3'>
                <img src={courses.img} alt="" className='skeleton' />
                <div className='mt-2 px-2 w-100'>
                <span className='course-title'>{courses.course_name}</span>
                </div>
                <div className='mt-1 px-2 position-absolute btn-sec'>
                <span className='fw-bold'>₹{courses.cost}</span>
                    <Link className='btn btn-primary w-100 mt-2' to={'/userpg/coursename'} onClick={()=>displaycoursedetail(courses)}>Explore</Link>
                </div>
                <div>
                
                </div>
               </div>
            </SwiperSlide>
        )
    })
    return(
        <div>
               <div className="course-sec"> 
               {/* recommended */}
                <h4 className='p-3'>Recommended for You</h4>
                <Swiper
          slidesPerView={4}
          spaceBetween={10}
         navigation={{
             clickable: true,
         }}
          breakpoints={{
             0:{
                 slidesPerView:2,
                 slidesPerGroup:1,
                 spaceBetween:150
             },
             768:{
                 slidesPerView:4,
                 spaceBetween:10
             },
            
         }}
        
        modules={[Navigation]}
        className="mySwiper">
            {courselem}
        </Swiper>
        {/* recommended */}
        <h4 className='p-3'>Recommended for You</h4>
                <Swiper
         slidesPerView={4}
         spaceBetween={10}
        navigation={{
            clickable: true,
        }}
         breakpoints={{
            0:{
                slidesPerView:2,
                slidesPerGroup:1,
                spaceBetween:150
            },
            768:{
                slidesPerView:4,
                spaceBetween:10
            },
           
        }}
        
        modules={[Navigation]}
        className="mySwiper">
            {courselem}
        </Swiper>

        {/* recommended */}
        <h4 className='p-3'>Recommended for You</h4>
                <Swiper
         slidesPerView={4}
         spaceBetween={10}
        navigation={{
            clickable: true,
        }}
         breakpoints={{
            0:{
                slidesPerView:2,
                slidesPerGroup:1,
                spaceBetween:150
            },
            768:{
                slidesPerView:4,
                spaceBetween:10
            },
           
        }}
        
        modules={[Navigation]}
        className="mySwiper">
            {courselem}
        </Swiper>


          {/* recommended */}
          <h4 className='p-3'>Recommended for You</h4>
                <Swiper
         slidesPerView={4}
         spaceBetween={10}
        navigation={{
            clickable: true,
        }}
         breakpoints={{
            0:{
                slidesPerView:2,
                slidesPerGroup:1,
                spaceBetween:150
            },
            768:{
                slidesPerView:4,
                spaceBetween:10
            },
           
        }}
        
        modules={[Navigation]}
        className="mySwiper">
            {courselem}
        </Swiper>
              
            </div>
        </div>
    )
}