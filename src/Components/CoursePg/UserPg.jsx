
import React from 'react';
import {Route,Routes} from 'react-router-dom'
import MainPg from './MainPg'
import Coursec from './Coursec'
import Categories from './Category/Categories';
import Cart from './Cart/Cart';
import UserHeader from './UserHeader'
import Coursedetail from './Coursedetail/Coursedetail';
import { Context } from '../../Context'
export default function CoursePg(){
    const{light,handletheme}=React.useContext(Context)
    return(
        <div className='user-homepg-section position-relative d-flex gap-1' id={light?'light':'dark'}>
            <div className='theme-controller position-absolute'>
                {light? <i class="fa-solid fa-moon text-dark" onClick={()=>handletheme()}></i>:
                <i class="fa-solid fa-sun"  onClick={()=>handletheme()}></i>}
            </div>
        
        <UserHeader light={light}/>
        <Routes >
        <Route path='/' element={<MainPg light={light} className='mt-5'/>}/>
        <Route path='/coursec' element={<Coursec light={light}/>}/>
        <Route path='/categ' element={<Categories light={light}/>}/>
        <Route path='/cart' element={<Cart light={light}/>}/>
        <Route path={`/coursename`} element={<Coursedetail light={light}/>}/>
        </Routes> 
        </div>
    )
}