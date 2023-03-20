import React from 'react';
import { Context } from "../../../Context"
export default function Coursedetail(props){
    const {displaycourses}=React.useContext(Context);
    const coursestored=sessionStorage.getItem('courses')
    const coursextr=JSON.parse(coursestored)
    // const uniqueContent = Array.from(new Set(coursextr.content.map((item) => item)));
    // console.log(uniqueContent)

    const cours =<>
    <section className='course-maintitle d-flex gap-1  container-fluid position-relative skeleton'>
        <div className='w-75 maintitle-left text-light'>
            <h3 className='fw-bold '>{coursextr.course_name}</h3>
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
        <h2 className=''>Course Contents</h2>
        {

            // uniqueContent.map(content=>{
            //     return(
            //         <div class="accordion w-75 mt-3" id="accordionExample">
            //             <div class="accordion-item">
            //                 <h2 class="accordion-header" id="headingOne">
            //                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${content.id}`} aria-expanded="true" aria-controls={`collapse${content.id}`}>
            //                         {content.name}
            //                     </button>
            //                 </h2>
            //             <div id={`collapse${content.id}`} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            //         <div class="accordion-body">
            //             <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            //         </div>
            //         </div>
            //     </div>
            //     </div>
            //     // <span className='py-1'>{content.name}</span>
            //     )
            // })
        }
    </section>
        </>
    return(
        <main className='user-mainpg-section position-relative w-100 ' id={props.light?'dark':'light'}>
            {cours}
        </main>
    )
}