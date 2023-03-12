import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../../Context"


export default function Login(){
    const nameref= React.useRef()
    const emailref= React.useRef()
    const passwordref= React.useRef()
    const {signup,currentuser} = useAuth()
    const [error,seterror]=React.useState(false)
    function handleSubmit(e){
        e.preventDefault()
        signup(nameref.current.value,emailref.current.value,passwordref.current.value)
    }
    return(
        <main className="main-home-pg d-grid  position-relative d-flex">
        <div className="log-sec d-flex flex-wrap flex-column justify-content-center align-items-center">
        <h4 className="text-left text-light">Welcome to Frend_Web</h4>
        <form onSubmit={handleSubmit}
        className="login-section d-flex flex-column gap-1 justify-content-center align-items-center pt-5  px-5">
            <h6 className="text-left text-light fw-normal">Create your account</h6>
            <h5>{currentuser}</h5>
            
            <div className="form-floating w-100 mt-4">
                <input type="text"  className="form-control login" id="floatingInput"   name='text' 
                    ref={nameref}  required/>
                <label htmlFor="floatingInput">Name</label>
            </div>

            <div className="form-floating w-100 mt-4">
                <input type="email"  className="form-control login" id="floatingInput"   name='email' 
                    ref={emailref} required/>
                <label htmlFor="floatingInput" >Email</label>
            </div>

            <label  htmlFor="warning" className='text-warning text-left py-2 alert-box'
           >Please enter a valid email address.</label>

            <div className="form-floating w-100">
                <input type="password" className="form-control login" id="floatingInput" name='password' 
                ref={passwordref} required/>
                <label htmlFor="floatingInput">Password</label>
            </div>
            <label htmlFor="warning" className='text-warning text-left py-2 alert-box mx-2'
            >Your password must contain between 4 and 60 characters.</label>
            <div>
            <Link to='/userpg' className={`text-decoration-none`} >
                <button className={`py-3 px-2  mt-4 cr-accbtn`}
                  >
                    Create Account
                </button>
            </Link>
            </div>
        </form>   
        </div>
        <div className="log-bg bg-success">
        </div>
       
    </main>
    )
}