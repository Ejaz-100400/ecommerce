import React from "react"
import { XyzTransitionGroup } from '@animxyz/react'
import { Context } from "../../../Context"
import { Link } from "react-router-dom"
import Searchbar from "./Searchbar"
export default function SearchCourse(props){
    const {searchdata,displaycoursedetail,load}=React.useContext(Context)
    console.log(searchdata)
    return(
        <main className='user-mainpg-section px-3 py-4 container w-100' id={props.light?'dark':'light'}> 
           <Searchbar/>  
           <section className="d-flex gap-2 flex-wrap justify-content-center container mt-4" xyz='fade-small-stagger'>
            {load?
            <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
            </div>:
            searchdata.map(searchitem=>{
                return(
                <div className='courses-pg-item skeleton card position-relative mt-3 square xyz-in' id='searchcourse-item'>
                    <img src={searchitem.img} alt="" className='skeleton' />
                    <div className='mt-2 px-2 w-100'>
                        <span className='course-title text-light'>{searchitem.course_name}</span>
                    </div>
                    <div className='mt-1 px-2 position-absolute btn-sec'>
                        <Link className='explore-btn px-1 py-2  mt-2' to={`/userpg/${searchitem.course_name}`} onClick={()=>displaycoursedetail(searchitem)}>Explore Now!</Link>
                    </div>
                <div>
                </div>
            </div>
                )
            })}
           </section>
        </main>
    )
}