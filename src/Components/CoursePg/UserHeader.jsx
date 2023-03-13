import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../../Context"
export default function UserHeader(props){
    const {displaycategory,courses}=React.useContext(Context)
    return(
        <>
        <header className='user-header-section  flex-column  gap-4 px-3'>
            <Link  to={'/userpg'} className="text-deoration-none">
            <span className={`fw-bold logo ${props.light?'text-dark':'text-light'}`} style={{textShadow:props.light?'15px -5px 15px rgba(31, 30, 30, 0.51)':'15px -5px 15px rgba(255, 255, 255, 0.51)'}}>FREND-WEB</span> 
            </Link>
            <ul className={`user-menu pt-5 list-unstyled d-flex flex-column gap-4 fw-bold  ${props.light?'text-dark':'text-light'}`} >
                <Link to={'/userpg'} className={`text-decoration-none ${props.light?'text-dark':'text-light'}`}>
                <li className='d-flex gap-2 align-items-center'><i className="fa-solid fa-house"></i>Home</li>
                </Link>
                <Link to={'/userpg/coursec'} className={`text-decoration-none ${props.light?'text-dark':'text-light'}`}>
                <li className='d-flex gap-2 align-items-center'><i className="fa-solid fa-laptop-file"></i> Courses</li>
                </Link>
                <Link to={'/userpg/categ'} className={`text-decoration-none ${props.light?'text-dark':'text-light'}`}>
                {/* <li className='d-flex gap-2 align-items-center'><i className="fa-solid fa-list"></i>Categories</li> */}
                <li className="btn-group dropend d-flex gap-2 align-items-center">
                    <span type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className={`fa-solid fa-list ${props.light?'text-dark':'text-light'}`}></i>Categories
                    </span>
                    <ul className="dropdown-menu w-100 container p-3" id={props.light?'dark':'light'}>
                        <li className="py-2 fw-bold category-title" onClick={()=>displaycategory(courses.type)}>Front-End Development</li>
                        <li className="py-2 fw-bold category-title">Back-End Development</li>
                        <li className="py-2 fw-bold category-title">Full-Stack Web Development</li>
                        <li className="py-2 fw-bold category-title">Data Science</li>
                        <li className="py-2 fw-bold category-title">Personal Skills</li>
                    </ul>
                </li>
                </Link>
                <li className='d-flex gap-2 align-items-center'><i className="fa-solid fa-arrow-up-right-dots"></i>My Learning</li>
                <Link to={'/userpg/cart'} className={`text-decoration-none ${props.light?'text-dark':'text-light'}`}>
                <li className='d-flex gap-2 align-items-center'><i className="fa-solid fa-cart-shopping"></i>My Carts</li>
                </Link>        
                <li className='d-flex gap-2 align-items-center'></li>
            </ul>
            <div className={`prem-card d-flex justify-content-center align-items-center px-2 py-2 position-relative`}>
                <button className='prem-btn position-absolute'>
                <i className="fa-solid fa-arrow-right"></i>
                </button>
                <span className='fw-bold prem-msg mb-2'>Use our Premium features now!</span>
                <img src='https://cdn-icons-png.flaticon.com/512/4907/4907289.png' alt="" width='100'  className='prem-img position-absolute'/>
            </div>
        </header>
        <div className="mob-header position-absolute mt-3">
        <span className="mx-4" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Menu
</span>


<div className={`offcanvas offcanvas-start container pt-5 ${props.light?'':'bg-dark'}`} tabindex="-1" id={`offcanvasExample`} aria-labelledby="offcanvasExampleLabel">
<Link  to={'/userpg'} className="text-deoration-none">
            <span className={`fw-bold logo ${props.light?'text-dark':'text-light'}`} style={{textShadow:props.light?'15px -5px 15px rgba(31, 30, 30, 0.51)':'15px -5px 15px rgba(255, 255, 255, 0.51)'}}>FREND-WEB</span> 
            </Link>
            <ul className={`user-menu pt-5 list-unstyled d-flex flex-column gap-4 fw-bold  ${props.light?'text-dark':'text-light'}`} >
                <Link to={'/userpg'} className={`text-decoration-none ${props.light?'text-dark':'text-light'}`}>
                <li className='d-flex gap-2 align-items-center'><i className="fa-solid fa-house"></i>Home</li>
                </Link>
                <Link to={'/userpg/coursec'} className={`text-decoration-none ${props.light?'text-dark':'text-light'}`}>
                <li className='d-flex gap-2 align-items-center'><i className="fa-solid fa-laptop-file"></i> Courses</li>
                </Link>
                <li className='d-flex gap-2 align-items-center'><i className="fa-solid fa-list"></i>Categories</li>
                <li className='d-flex gap-2 align-items-center'><i className="fa-solid fa-arrow-up-right-dots"></i>My Learning</li>
                <li className='d-flex gap-2 align-items-center'><i className="fa-solid fa-cart-shopping"></i>My Carts</li>
                <li className='d-flex gap-2 align-items-center'></li>
            </ul>
            <div className={`prem-card d-flex justify-content-center align-items-center px-2 py-2 position-relative`}>
                <button className='prem-btn position-absolute'>
                <i className="fa-solid fa-arrow-right"></i>
                </button>
                <span className='fw-bold prem-msg mb-2'>Use our Premium features now!</span>
                <img src='https://cdn-icons-png.flaticon.com/512/4907/4907289.png' alt="" width='100'  className='prem-img position-absolute'/>
            </div>
</div>
        </div>
        </>

    )
}