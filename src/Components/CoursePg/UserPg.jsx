
import React from 'react';
import {Route,Routes} from 'react-router-dom'
import MainPg from './MainPg'
import Coursec from './Coursec'
import Categories from './Category/Categories';
import SearchCourse from './Search/SearchCourse';
import Learn from './Learn/Learn';
import Cart from './Cart/Cart';
import UserHeader from './UserHeader'
import Coursedetail from './Coursedetail/Coursedetail';
import { Context } from '../../Context'
export default function CoursePg(){
    const{light,handletheme,cartalert,cart,load,payalert,emailref}=React.useContext(Context)
    // Save the emailref value to localStorage
    sessionStorage.setItem('username', emailref.split('@')[0]);
    return(
        <div className='user-homepg-section position-relative d-flex gap-1' id={light?'light':'dark'}>
            {/* theme controller */}   
            <div className='position-absolute username'>
            </div>
            <div className='theme-controller position-absolute'>
                {light? <i className="fa-solid fa-moon text-dark" onClick={()=>handletheme()}></i>:
                <i className="fa-solid fa-sun"  onClick={()=>handletheme()}></i>}
            </div>

            {/* loader controller */}
            <div className="load-controller position-absolute" style={{display:load?'block':'none'}}>
              <div className='load-sec position-absolute'>
              <div class="spinner"></div>
              </div>
            </div>


            {/* cart alert */}

            {cartalert?<div className="toast position-fixed w-25" role="alert" aria-live="assertive" aria-atomic="true">
              {cart.map(cart=>{
                return(
                    <div class="toast-body">
                    <span className='fw-bold text-dark'>{cart.course_name}</span> is added to your cart
                    </div>
                )
              })}
            </div>:''}

            {/* payment alert */}
            {payalert?<div className="toast position-fixed w-25" role="alert" id='red-alert' aria-live="assertive" aria-atomic="true">
                    <div class="toast-body">
                    Please choose a payment method
                    </div>
            </div>:''}



        
        <UserHeader light={light}/>
        <Routes >
        <Route path='/' element={<MainPg light={light} emailref={emailref} className='mt-5'/>}/>
        <Route path='/coursec' element={<Coursec light={light}/>}/>
        <Route path='/categ/:categ_name' element={<Categories light={light}/>}/>
        <Route path='/search' element={<SearchCourse light={light} />} />
        <Route path='/cart' element={<Cart light={light}/>}/>
        <Route path='/learn' element={<Learn light={light}/>}/>
        <Route path={`/:course_name`} element={<Coursedetail light={light}/>}/>
        </Routes> 
        </div>
    )
}