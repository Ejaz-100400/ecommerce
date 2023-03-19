import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../../../Context"
export default function Learn(){
    const {learn,categorytype,displaycoursedetail}=React.useContext(Context)
    return(

       <main className="user-mainpg-section  container position-relative w-100 px-3 py-4">
        <h3>My Learning</h3>
        <div className="d-flex flex-wrap  gap-2 mt-4">
        {
            !learn.length?<div className="d-flex  flex-column align-items-center  justify-content-center w-100">
                <h4>Purchase your best preferenced course and start Learning!</h4>
                <img src="https://o.remove.bg/downloads/4425b8fd-5474-43fc-8d0f-2dba72f4bff4/ee5603332e58b2ed7f10674d23287842-removebg-preview.png" alt=""  width='500'/>
                </div>
            :learn.map(learn=>{
                return(
                    learn.map(learnitem=>{
                        return(
                            <div className='courses-pg-item skeleton card position-relative mt-3 square xyz-in position-relative' id='learncourse-item'>
                            <img src={learnitem.img} alt="" className='skeleton' />
                            <div className='mt-2 px-2 w-100'>
                                <span className='course-title text-light'>{learnitem.course_name}</span>
                            </div>
                            <div className="position-absolute progress-sec w-100 px-1">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width:'0%'}} aria-valuenow="" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2 pt-2 progress-comp">
                            <span>Progress Completed:</span>
                            <span>0%</span>
                            </div>
                            </div>
                        <div>
                        </div>
                    </div> 
                        )
                    })
                )
               })

        }
        </div>
       </main>
    )
}