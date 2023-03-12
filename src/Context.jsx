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
    const[light,setlight]=React.useState('dark')

    function handletheme(){
        setlight(prev=>'dark')
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

console.log(randompick)

   

    return(
        <Context.Provider value={{currentuser,Login,randompick,courses,light,handletheme}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}