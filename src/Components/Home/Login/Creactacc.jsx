import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../../Context"


export default function Login(){
    const nameref= React.useRef()
    const emailref= React.useRef()
    const passwordref= React.useRef()
    const {signup,currentuser} = useAuth()
    const[namealert,setnamealert]=React.useState(false)
    const[emailalert,setemailalert]=React.useState(false)
    const[pwdalert,setpwdalert]=React.useState(false)
    const [error,seterror]=React.useState(false)

    function handlename(e){
        if(!nameref.length || nameref.length===''){
            setnamealert(true)
        }
        else{
            setnamealert(false)
        }
    }
    function handleemail(e){
        if(emailref==='' ||(!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(emailref))){
            setemailalert(true)
        }
        else{
            setemailalert(false)
        }
      }

      //handling password field
      function handlepwd(e){
        if(passwordref===''|| passwordref.length<6){
            setpwdalert(true)
        }
        else{
            setpwdalert(false);
        }
      }

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
                    ref={nameref} onBlur={handlename} onChange={handlename} required/>
                <label htmlFor="floatingInput">Name</label>
            </div>

            <label style={{display:namealert?'none':'block'}} htmlFor="warning" className='text-warning text-left py-2 alert-box'
           >Please enter your username.</label>


            <div className="form-floating w-100 mt-4">
                <input type="email"  className="form-control login" id="floatingInput"   name='email' 
                    ref={emailref} onBlur={handleemail} onChange={handleemail} required/>
                <label htmlFor="floatingInput" >Email</label>
            </div>

            <label style={{display:emailalert?'none':'block'}}  htmlFor="warning" className='text-warning text-left py-2 alert-box'
           >Please enter a valid email address.</label>

            <div className="form-floating w-100 mt-4">
                <input type="password" className="form-control login" id="floatingInput" name='password' 
                ref={passwordref}  onBlur={handlepwd} onChange={handlepwd} required/>
                <label  htmlFor="floatingInput">Password</label>
            </div>
            <label style={{display:pwdalert?'none':'block'}} htmlFor="warning" className='text-warning text-left py-2 alert-box mx-2'
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