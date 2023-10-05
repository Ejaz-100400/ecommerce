import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

export default function Coursection(){
  const[homecateg,sethomecateg]=React.useState([])
  const[popcateg,setpopcateg]=React.useState([])
  React.useEffect(() =>{
    fetch('https://ecommerce-backend-seven-delta.vercel.app/CourseCateg')
    .then(Response=>Response.json())
    .then(data=>sethomecateg(data.HomeCateg))
  },[]);

  React.useEffect(() =>{
    fetch('https://ecommerce-backend-seven-delta.vercel.app/PopCateg')
    .then(Response=>Response.json())
    .then(data=>setpopcateg(data.PopCateg))
  },[]);

  console.log(popcateg);

  const homecategelements = homecateg.map((categ)=>{
    return(
      <div className="home-course-card d-flex flex-column justify-content-center align-items-center">
          <img src={categ.img} alt="courseimg"  width='120'/>
          <span>{categ.categ_name}</span>
      </div>
    )
  })
  const popcategelements= popcateg.filter(course=>course.category==='Popular Courses').map((pop)=>{
    return(
    <SwiperSlide>
      <div className='home-pop-course-item p-3 d-flex flex-column gap-2 justify-content-center align-items-center'>
        <img src={pop.img} alt={pop.course_name} width='100' />
        <h4 className='text-center'>{pop.course_name}</h4>
        <div className='course-desc d-flex justify-content-between mt-2'>
          <span>{pop.duration}</span>
          <span>100 enrolled</span>
        </div>
        <div className='course-desc d-flex justify-content-center align-items-center position-relative mt-4'>
          <button className='btn btn-dark text-light fw-bold'>Start Learning</button>
        </div>
      </div>
    </SwiperSlide>
    )
  })
    return(
        <>
        {/* Course search & Categories */}
        <section className="d-flex course-main">

            <div className="course-1-left d-flex  align-items-center px-5 py-5">
                <div>
                    <h4 className="text-light">Free Online Courses for Newbies!</h4>
                    <span className="text-light">Explore our best free courses here where you need to up-skill your skills</span>
                    <div className="form-group d-flex align-items-center justify-content-center mt-3">
                        <div className="form-floating">
                            <input type="search" className="form-control" id="floatingInput"  name='email' required/>
                            <label htmlFor="floatingInput">Search</label>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Homecateg elements */}
            <div className="course-1-right d-flex flex-wrap gap-3 align-items-center justify-content-center">
              {homecategelements}
            </div>

        </section>
        {/* Popular Most Course */}
        <section className="course-popular-main container pt-5">
            <h1 className="text-light fw-bold text-center">Our Popular Courses</h1>
            <div className="overflow-hidden home-course-items container d-flex mt-3 p-5
            y-4">
            <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
      >
        {popcategelements}
       </Swiper>
            </div>
        </section>
        </>
    )
}