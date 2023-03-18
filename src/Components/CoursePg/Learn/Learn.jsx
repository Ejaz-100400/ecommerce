import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../../../Context"
export default function Learn(){
    const {learn,categorytype,displaycoursedetail,addtocart}=React.useContext(Context)
    return(
       <main className="user-mainpg-section  container position-relative w-100">
       {learn.map((learn,i)=>{
        return(
        <div key={i} >
            {
                learn.map(learnitem=>{
                    return(
                        <div className='learnitem-pg-item skeleton  position-relative mt-3'>
                        <img src={learnitem.img} alt="" className='skeleton' />
                        <div className='mt-2 px-2 w-100'>
                        <span className='course-title text-light'>{learnitem.course_name}</span>
                        </div>
                        <div className='mt-1 px-2 position-absolute btn-sec'>
                        {/* <span className='fw-bold'>₹{learnitem.cost}</span> */}
                        <div className='d-flex align-items-center gap-3'>
                        <Link className='explore-btn px-1 py-2 ' to={`/userpg/${learnitem.course_name}`} onClick={()=>displaycoursedetail(learnitem)}>Explore Now!</Link>
                        </div>
        
        </div>                <div>
                        
                        </div>
                       </div>
                    )
                })
            }
        </div>
        )
       })}
       </main>
    )
}