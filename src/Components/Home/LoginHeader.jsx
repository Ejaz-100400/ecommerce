import Logo from './../.././Imgs/logo-removebg-preview.png'
export default function Home(){
    return (
        <div>
            <header className="login-header position-relative d-flex px-2 justify-content-between align-items-center  position-fixed w-100">
                <img src={Logo} alt="" width='150' />
                <div className='home-menu d-flex gap-2 px-2'>
                    <button className='btn btn-dark text-light cre-btn'>Create account</button>
                    <button className='btn btn-success text-light log-btn'>Log In</button>
                </div>
            </header>
        </div>
    )
}