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
    const{randompick,displaycoursedetail,addtocart,load,cart,learn}=React.useContext(Context)

    const [carousel,setcarousel]=React.useState([])

    // Load the username from sessionStorage
    const username = sessionStorage.getItem('user');


    React.useEffect(()=>{
        fetch('https://ecommerce-backend-rosy.vercel.app/Carousel').
        then(response => response.json())
        .then(data=>setcarousel(data.Carousel))
    },[])
    

    
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
                 <button className="explore-btn px-1 py-2 mt-4">Explore Now!</button>
                 </div>
                 </div>
            </SwiperSlide>
        )
    })
    return(
        <>
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
                        <Link className='explore-btn px-1 py-2' to={`/userpg/${randompick.course_name}`} onClick={()=>displaycoursedetail(randompick)}>
                            Explore Now!
                        </Link>
                         <button className='cart-btn px-2 py-2 d-flex align-items-center' onClick={()=>addtocart(randompick)}>
                            Add to cart <i class="fa-solid fa-cart-shopping"></i>
                         </button>   
                    </div>
                    </div>
                </div>
            </section>
            
        </main>
        <main className="user-mainpgprofile-section px-4 py-2 container" >
            <div className="profile-img-sec position-relative">
                <div className="position-absolute bell-sec">
                <i class="fa-regular fa-bell text-light"></i>
                </div>
                <div className="d-flex flex-column mt-5 justify-content-center align-items-center">
                <div className="prof-img">
                    <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt="" />
                </div>
                <h6 className="mt-2">{username}</h6>
                </div>
                <div className="prof-user-lett  mt-4">
                    <div className="text-center d-flex justify-content-between align-items-center py-1">
                        <span className="fw-bold">Cart</span>
                        <br />
                        <span>{!cart.length?0:cart.length}</span>
                    </div>
                    <div className="text-center d-flex justify-content-between align-items-center py-1">
                        <span className="fw-bold">Courses Active</span>
                        <br />
                        <span>0</span>
                    </div>
                    <div className="text-center d-flex justify-content-between align-items-center py-1">
                        <span className="fw-bold">Courses Completed</span>
                        <br />
                        <span>0</span>
                    </div>
                </div>
            </div>
            <div>
            <hr />
            <div className="newcourse-alertsec pt-2">
                <ul className="list-unstyled">
                    <li className="py-1">Account Settings</li>
                    <li className="py-1">Payment Methods</li>
                    <li className="py-1">Subscriptions</li>
                    <li className="py-1">Purchase History</li>
                    <Link className="text-decoration-none text-danger fw-bold" to={"/"} onClick={()=>sessionStorage.removeItem('username')}>
                    <li className="py-1 text-danger">Sign Out</li>
                    </Link>
                </ul>
            </div>
            <hr />
            <div className="newcourse-alertsec pt-2">
                <ul className="list-unstyled">
                    <li className="py-1">Help</li>
                    <li className="py-1">Public Profile</li>
                    <li className="py-1">Edit Profile</li>
                </ul>
            </div>
            <hr />
            </div>
        </main>
        </>
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

                // {learn.map(learn=>{
                //     return(
            
                //                 <div className='courses-pg-item skeleton card position-relative mt-3 square xyz-in position-relative' id='learncourse-item'>
                //                 <img src={learn.img} alt="" className='skeleton' />
                //                 <div className='mt-2 px-2 w-100'>
                //                     <span className='course-title text-light'>{learn.course_name}</span>
                //                 </div>
                //             <div>
                //             </div>
                //         </div> 
                //             )
                //    })}