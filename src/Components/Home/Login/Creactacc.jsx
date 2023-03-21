
import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../../Context"
import { Context } from "../../../Context"


export default function Login(){   
    const {signup,currentuser} = useAuth()
    // const{emailref,passwordref,emailalert,pwdalert,setemailalert,setpwdalert,setemailref,setpasswordref}=React.useContext(Context)
    
    const [emailref,setemailref]= React.useState('')
    const [passwordref,setpasswordref]=React.useState()
    const[emailalert,setemailalert]=React.useState(true)
    const[pwdalert,setpwdalert]=React.useState(true)
    
    const [error,seterror]=React.useState(true)

    function handleemail(event){
        const value = event.target.value;
        setemailref(value);
        if(value==='' ||(!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value))){
        setemailalert(true)
        seterror(true)
        }
        else{
            setemailalert(false)
            seterror(false)
        }
      }
      //handling password field
      function handlepwd(event){
        const value = event.target.value;
        setpasswordref(value);
        if(value===''|| value.length<4){
        setpwdalert(true)
        seterror(true)
        }
        else{
        setpwdalert(false);
        seterror(false)
        }
      }

    function handleSubmit(event){
        event.preventDefault()
        if(!emailalert && !pwdalert){
            sessionStorage.setItem('user',emailref)
        }
    }
    return(
        <main className="main-home-pg d-grid  position-relative d-flex">
        <div className="log-sec d-flex flex-wrap flex-column justify-content-center align-items-center">
        <h4 className="text-left text-light">Welcome to Frend_Web</h4>
        <form
        className="login-section d-flex flex-column gap-1 justify-content-center align-items-center pt-5  px-5">
            <h6 className="text-left text-light fw-normal">Create your account</h6>
            {!emailalert?<h4>{emailref}</h4>:''}
            
            <div className="form-floating w-100 mt-4">
                <input type="email"  className="form-control login" id="floatingInput"   name='email' 
                    value={emailref} onBlur={handleemail} onChange={handleemail} required/>
                <label htmlFor="floatingInput" >Email</label>
            </div>

            <label style={{display:emailalert?'block':'none'}}  htmlFor="warning" className='text-warning text-left py-2 alert-box'
           >Please enter a valid email address.</label>

            <div className="form-floating w-100 mt-4">
                <input type="password" className="form-control login" id="floatingInput" name='password' 
                value={passwordref}  onBlur={handlepwd} onChange={handlepwd} required/>
                <label  htmlFor="floatingInput">Password</label>
            </div>

            <label style={{display:pwdalert?'block':'none'}} htmlFor="warning" className='text-warning text-left py-2 alert-box mx-2'
            >Your password must contain between 4 and 60 characters.</label>
            <div>
             
            <div  onClick={handleSubmit}>
            <Link to='/userpg' className={`text-decoration-none`} >
                <button className={`py-3 px-2  mt-4 cr-accbtn`}
                disabled={(emailalert && pwdalert  && error) ===true}
                  >
                    Create Account
                </button>
            </Link>
            </div>
            </div>
        </form>   
        </div>
        <div className="log-bg bg-success">
        </div>
       
    </main>
    )
}