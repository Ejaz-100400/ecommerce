import Logo from './../.././Imgs/logo-removebg-preview.png'
import { Link } from 'react-router-dom'
export default function Home(){
    return (
        <div>
            <header className="login-header position-relative d-flex px-2 justify-content-between align-items-center  position-fixed w-100">
                <img src={Logo} alt="" width='150' />
                <div className='home-menu d-flex gap-2 px-2'>
                <Link to='/craccnt'>
                    <button className='btn btn-dark text-light cre-btn'>Create account</button>
                </Link>
                    <button className='btn btn-success text-light log-btn'>Log In</button>
                </div>
            </header>
        </div>
    )
}