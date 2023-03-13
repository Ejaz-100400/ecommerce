import React from 'react';
import { useLocation } from "react-router-dom";
import { auth } from './firebase'
const Context = React.createContext()
export function useAuth(){
    return React.useContext(Context)
}
function ContextProvider({children}){
    const location = useLocation();
    const[currentuser,setcurrentuser]=React.useState()
    const[courses,setcourses]=React.useState([])
    const[randompick,setrandompick]=React.useState([])
    const[light,setlight]=React.useState(false)
    const[displaycourses,setdisplaycourses]=React.useState([])
    const[categorytype,setcategorytype]=React.useState([])
    const[btnactive,setbtnactive]=React.useState(false)

    function handletheme(){
        setlight(prev=>!prev)
    }
    
    function Login(email,password){
    return auth.createUserWithEmailAndPaasword(email,password)
}
React.useEffect(()=>{
    fetch('http://localhost:8050/PopCateg').
    then(response => response.json())
    .then(data=>setcourses(data.PopCateg))
},[])


React.useEffect(()=>{
    if(location.pathname === "/userpg" && courses.length > 0){
    const randomIndex = Math.floor(Math.random() * courses.length);
    setrandompick(courses[randomIndex]);
    }
},[location.pathname,courses])




// Displaying the course details
function displaycoursedetail(displaycourses){
    setdisplaycourses(prev=>[...prev,displaycourses]);
    sessionStorage.setItem('courses',JSON.stringify(displaycourses));
}

React.useEffect(()=>{
    if(location.pathname!='/userpg/coursename'){
        setdisplaycourses(()=>[])
    }
},[location.pathname])


function displaycategory(categname){
    const filtercateg=courses.filter((course=>course.type === categname))
    sessionStorage.setItem('category',JSON.stringify(categname));
    setcategorytype(filtercateg)
}


    return(
        <Context.Provider value={{
            currentuser,
            Login,
            randompick,
            courses,
            light,
            handletheme,
            displaycoursedetail,
            displaycourses,
            displaycategory,
            categorytype,
            }}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}