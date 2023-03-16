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
    
    // all courses
    const courselem = courses.map(courses => {
        return(
            <SwiperSlide>
               <div className='courses-pg-item skeleton  position-relative mt-3'>
                <img src={courses.img} alt="" className='skeleton' />
                <div className='mt-2 px-2 w-100'>
                <span className='course-title text-light'>{courses.course_name}</span>
                </div>
                <div className='mt-1 px-2 position-absolute btn-sec d-block'>
                {/* <span className='fw-bold'>₹{courses.cost}</span> */}
                <Link className=' mt-2 explore-btn px-1 py-2' to={`/userpg/${courses.course_name}`} onClick={()=>displaycoursedetail(courses)}>Explore Now!</Link>
                </div>
                <div>
                
                </div>
               </div>
            </SwiperSlide>
        )
    })

    // Popular courses
    const popelem = courses.filter(course=>course.category==='Popular Courses').map(courses => {
        return(
            <SwiperSlide>
               <div className='courses-pg-item skeleton position-relative mt-3'>
                <img src={courses.img} alt="" className='skeleton' />
                <div className='mt-2 px-2 w-100'>
                <span className='course-title text-light'>{courses.course_name}</span>
                </div>
                <div className='mt-1 px-2 position-absolute btn-sec'>
                {/* <span className='fw-bold'>₹{courses.cost}</span> */}
                    <Link className='explore-btn px-1 py-2 mt-2' to={`/userpg/${courses.course_name}`} onClick={()=>displaycoursedetail(courses)}>Explore Now!</Link>
                </div>
                <div>
                
                </div>
               </div>
            </SwiperSlide>
        )
    })
    
    // Students courses
    const studelem = courses.filter(course=>course.category==='Students are Viewing').map(courses => {
        return(
            <SwiperSlide>
               <div className='courses-pg-item skeleton  position-relative mt-3'>
                <img src={courses.img} alt="" className='skeleton' />
                <div className='mt-2 px-2 w-100'>
                <span className='course-title text-light'>{courses.course_name}</span>
                </div>
                <div className='mt-1 px-2 position-absolute btn-sec'>
                {/* <span className='fw-bold'>₹{courses.cost}</span> */}
                    <Link className='explore-btn px-1 py-2  mt-2' to={`/userpg/${courses.course_name}`} onClick={()=>displaycoursedetail(courses)}>Explore Now!</Link>
                </div>
                <div>
                
                </div>
               </div>
            </SwiperSlide>
        )
    })

    // Dev courses
    const develem = courses.filter(course=>course.category==='Demanding courses to become a Dev').map(courses => {
        return(
            <SwiperSlide>
               <div className='courses-pg-item skeleton  position-relative mt-3'>
                <img src={courses.img} alt="" className='skeleton' />
                <div className='mt-2 px-2 w-100'>
                <span className='course-title text-light'>{courses.course_name}</span>
                </div>
                <div className='mt-1 px-2 position-absolute btn-sec'>
                {/* <span className='fw-bold'>₹{courses.cost}</span> */}
                    <Link className='explore-btn px-1 py-2  mt-2' to={`/userpg/${courses.course_name}`} onClick={()=>displaycoursedetail(courses)}>Explore Now!</Link>
                </div>
                <div>
                
                </div>
               </div>
            </SwiperSlide>
        )
    })

    // short courses
    const shortelem = courses.filter(course=>course.category==='Short and Sweet Courses').map(courses => {
        return(
            <SwiperSlide>
               <div className='courses-pg-item skeleton  position-relative mt-3'>
                <img src={courses.img} alt="" className='skeleton' />
                <div className='mt-2 px-2 w-100'>
                <span className='course-title text-light'>{courses.course_name}</span>
                </div>
                <div className='mt-1 px-2 position-absolute btn-sec'>
                {/* <span className='fw-bold'>₹{courses.cost}</span> */}
                    <Link className='explore-btn px-1 py-2 w-100 mt-2' to={`/userpg/${courses.course_name}`} onClick={()=>displaycoursedetail(courses)}>Explore Now!</Link>
                </div>
                <div>
                
                </div>
               </div>
            </SwiperSlide>
        )
    })



    
    return(
        <div className=''>
               <div className="course-sec container"> 
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


           {/* Popular Courses */}
           <h4 className='p-3'>Popular Courses</h4>
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
            {popelem}
        </Swiper>







        {/* Students courses */}
        <h4 className='p-3'>Students are Viewing</h4>
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
            {studelem}
        </Swiper>


          {/* Demanding courses */}
          <h4 className='p-3'>Demanding courses to become a Dev</h4>
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
            {develem}
        </Swiper>



        {/* Short courses */}
        <h4 className='p-3'>Short and Sweet Courses</h4>
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
            {shortelem}
        </Swiper>
              
            </div>
        </div>



    )
}