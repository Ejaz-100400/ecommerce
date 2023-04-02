import React from "react"
import { Context } from "../../../Context"
export default function SearchBar(props){
    const {handleSearch,query,setquery,searchdata}=React.useContext(Context)
    const [search,setsearch]=React.useState(true)
    function handleInputChange(event){
        setquery(event.target.value)
    }
    return(
        <div className="form-group d-flex align-items-center justify-content-center mt-3">
        <div className="form-floating w-50 bg-dark">
            <input type="text" className="form-control " id="floatingInput"
            onChange={handleInputChange}
            value={query}/>
            <label for="floatingInput">Search Courses</label>
        </div>
        <button  className="getstarted" onClick={()=>handleSearch()} disabled={query === ''}>
            Explore Now!<i className="fa-solid fa-chevron-right fa-1x" />
       </button>
    </div>
    )
}