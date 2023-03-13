import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../Context';
export default function Categories(props){
  const {categorytype,displaycoursedetail}=React.useContext(Context)
  const categelements = categorytype.map(categ=>{
    return(
      <div className='toppick-item position-relative d-flex mt-2'>
      <div className='course-img skeleton-courseimg' style={{backgroundImage:`linear-gradient(115deg,rgba(0, 0, 0, 0.902),rgba(0, 0, 0, 0.521),rgba(0, 0, 0, 0.607)),url(${categ.img})`}}>
      </div>
      <div className='course-desc p-3'>
          <h3 className='fw-bold'>{categ.course_name}</h3>
          <div className="mt-3 d-flex gap-3">
      <div className="d-flex gap-1 align-items-center">
          <i class="fa-solid fa-star fa-1x" style={{color:'yellow'}}></i>
          <span className=" text-dark">{categ.rating}</span>
      </div>
      <div className="d-flex gap-1 align-items-center">
      <i class="fa-solid fa-clock text-dark"></i>
      <span className=" text-dark">{categ.duration}</span>
      </div>
   </div>
   <div className='course-btns d-flex gap-3 align items-center mt-3'>
          <Link className='explore-btn px-1 py-2' to={`/userpg/${categ.course_name}`} onClick={()=>displaycoursedetail(categ)}>
              Explore Now!
          </Link>
          <button className='explore-btn px-2 py-2  d-flex align-items-center'>
              Add to cart <i class="fa-solid fa-cart-shopping"></i>
          </button>
      </div>
      </div>
  </div>
    )
  })
    return(
        
        <main className='user-mainpg-section  px-3 py-4 container w-100' id={props.light?'dark':'light'}>
          {categelements}
        </main>
    )
}