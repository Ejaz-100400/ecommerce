import React from 'react';
import { Context } from "../../../Context"
export default function Coursedetail(props){
    const {displaycourses}=React.useContext(Context);
    const coursestored=sessionStorage.getItem('courses')
    const coursextr=JSON.parse(coursestored)
    // const uniqueContent = Array.from(new Set(coursextr.map((course) => course[0].content)));
    // console.log(uniqueContent)

    const cours =<>
    <section className='course-maintitle d-flex gap-1  container-fluid position-relative skeleton'>
        <div className='w-75 maintitle-left'>
            <h3 className='fw-bold'>{coursextr.course_name}</h3>
            <p className='w-75 mt-3'>{coursextr.descpar}</p>
        <div className='d-flex gap-5 align-items-center'>
        <div className='d-flex gap-1 align-items-center'>
            <i className='fa-solid fa-star fa-2x'></i><span>{coursextr.rating}</span>
        </div>
        <div className='d-flex gap-1 align-items-center'>
            <i className='fa-solid fa-clock fa-2x'></i>
            <span>{coursextr.duration}</span>
        </div>
        <h4 className='mt-2'>₹{coursextr.cost}</h4>
        </div>
        <button className='py-2 mt-2 position-absolute learn-btn w-25 d-flex justify-content-center align-items-center gap-2'>
            <span>Start Learning</span> <i class="fa-solid fa-book-open"></i>
        </button>
        </div> 
        <div className='position-sticky maintitle-right' style={{backgroundImage:`url(${coursextr.img})`}}>
            <div className='position-absolute playbtn'>
                <i className='fa-solid fa-play fa-3x'></i>
            </div>
        </div> 
    </section>
    <section className='course-class-detail  d-flex flex-column'>

    </section>
        </>
    return(
        <main className='user-mainpg-section position-relative w-100 ' id={props.light?'dark':'light'}>
            {cours}
        </main>
    )
}