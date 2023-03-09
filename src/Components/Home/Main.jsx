
export default function Main(){
    return(
    <>
    <main className="home-main-sec">
        <div className="blur-elements">
            <div id='element-1' className="position-absolute"></div>
            <div id='element-2' className="position-absolute"></div>
        </div>
        <div className="main position-relative">
        <div className="main-sec d-flex flex-column justify-column-center align-items-center container pt-5 mt-5">
            <h3 className="text-light"> Enhance your skills</h3>
            <h1 className="text-light mt-4">Anytime,Anywhere & Grow your Skills</h1>
            <div className=" d-flex input-sec">
            <div className="form-group d-flex align-items-center justify-content-center mt-3">
              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput"  
                name='email' required/>
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <button type="submit" className="getstarted" >
                    Explore Now!<i className="fa-solid fa-chevron-right fa-1x" />
               </button>
            </div>
            </div>
        </div>
        </div>
        
    </main>
    </>
    )
}