
import React from 'react';
import {Route,Routes} from 'react-router-dom'
import MainPg from './MainPg'
import Coursec from './Coursec'
import Categories from './Category/Categories';
import SearchCourse from './Search/SearchCourse';
import Cart from './Cart/Cart';
import UserHeader from './UserHeader'
import Coursedetail from './Coursedetail/Coursedetail';
import { Context } from '../../Context'
export default function CoursePg(){
    const{light,handletheme,cartalert,cart}=React.useContext(Context)
    return(
        <div className='user-homepg-section position-relative d-flex gap-1' id={light?'light':'dark'}>

            {/* theme controller */}   
            <div className='theme-controller position-absolute'>
                {light? <i className="fa-solid fa-moon text-dark" onClick={()=>handletheme()}></i>:
                <i className="fa-solid fa-sun"  onClick={()=>handletheme()}></i>}
            </div>

            {/* cart alert */}
            {cartalert?<div className="toast position-absolute" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto">You've got a message</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            <div class="toast-body">
                {cart.course_name} is added to the cart!
            </div>
            </div>:''}
            
            {/* {
                cartalert?
            } */}
        
        <UserHeader light={light}/>
        <Routes >
        <Route path='/' element={<MainPg light={light} className='mt-5'/>}/>
        <Route path='/coursec' element={<Coursec light={light}/>}/>
        <Route path='/categ/:categ_name' element={<Categories light={light}/>}/>
        <Route path='/search' element={<SearchCourse light={light} />} />
        <Route path='/cart' element={<Cart light={light}/>}/>
        <Route path={`/:course_name`} element={<Coursedetail light={light}/>}/>
        </Routes> 
        </div>
    )
}