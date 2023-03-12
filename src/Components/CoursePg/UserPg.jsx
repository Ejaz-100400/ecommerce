
import React from 'react';
import {Route,Routes} from 'react-router-dom'
import MainPg from './MainPg'
import Coursec from './Coursec'
import UserHeader from './UserHeader'
import { Context } from '../../Context'
export default function CoursePg(){
    const{light,handletheme}=React.useContext(Context)
    console.log(light)
    return(
        <div className='user-homepg-section position-relative d-flex gap-1' id='light'>
        <i class="fa-solid fa-moon position-absolute" onClick={()=>handletheme()}></i>
        <UserHeader/>
        <Routes>
        <Route path='/' element={<MainPg/>}/>
        <Route path='/coursec' element={<Coursec/>}/>
        </Routes> 
        </div>
    )
}