import { Link } from "react-router-dom"
export default function UserHeader(){
    return(
        <header className='user-header-section d-flex flex-column  gap-4 px-3'>
            <Link  to={'/userpg'} className="text-deoration-none">
            <span className='fw-bold text-light logo'>FREND-WEB</span> 
            </Link>
            <ul className='user-menu pt-5 list-unstyled d-flex flex-column gap-4 fw-bold'>
                <Link to={'/userpg'} className='text-decoration-none'>
                <li className='d-flex gap-2 align-items-center'><i class="fa-solid fa-house"></i>Home</li>
                </Link>
                <Link to={'/userpg/coursec'} className='text-decoration-none'>
                <li className='d-flex gap-2 align-items-center'><i class="fa-solid fa-laptop-file"></i> Courses</li>
                </Link>
                <li className='d-flex gap-2 align-items-center'><i class="fa-solid fa-list"></i>Categories</li>
                <li className='d-flex gap-2 align-items-center'><i class="fa-solid fa-arrow-up-right-dots"></i>My Learning</li>
                <li className='d-flex gap-2 align-items-center'><i class="fa-solid fa-cart-shopping"></i>My Carts</li>
                <li className='d-flex gap-2 align-items-center'></li>
            </ul>
            <div className='prem-card d-flex justify-content-center align-items-center px-2 py-2 position-relative'>
                <button className='prem-btn position-absolute'>
                <i class="fa-solid fa-arrow-right"></i>
                </button>
                <span className='fw-bold prem-msg mb-2'>Use our Premium features now!</span>
                <img src='https://cdn-icons-png.flaticon.com/512/4907/4907289.png' alt="" width='100'  className='prem-img position-absolute'/>
            </div>
        </header>
    )
}