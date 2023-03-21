import React from 'react';
import { useLocation } from "react-router-dom";
import { auth} from './firebase'
const Context = React.createContext()
export function useAuth(){
    return React.useContext(Context)
}
function ContextProvider({children}){
    const [emailref,setemailref]= React.useState('')
    const [passwordref,setpasswordref]=React.useState()
    const[emailalert,setemailalert]=React.useState(true)
    const[pwdalert,setpwdalert]=React.useState(true)
    
    const location = useLocation();
    const[currentuser,setcurrentuser]=React.useState()

    const[courses,setcourses]=React.useState([])
    const[randompick,setrandompick]=React.useState([])

    const[light,setlight]=React.useState(false)

    const[displaycourses,setdisplaycourses]=React.useState([])

    const[categorytype,setcategorytype]=React.useState([])

    const[query,setquery]=React.useState('')
    const[searchdata,setsearchdata]=React.useState([]);

    const[cartalert,setcartalert]=React.useState(false);
    const[cart,setcart]=React.useState([]);
    const[gocartalert,setgocartalert]=React.useState(false);

    const[learn,setlearn]=React.useState([]);
    const[load,setload]=React.useState(false);

    const[paymeth,setpaymeth]=React.useState({
        payment:''
    });
    const[payalert,setpayalert]=React.useState(false);

    
    
    function handletheme(){
        setlight(prev=>!prev)
    }
    
    // function Login(email,password){
    // return auth.createUserWithEmailAndPaasword(email,password)
    // }




React.useEffect(()=>{
    fetch('https://ecommerce-backend-rosy.vercel.app/PopCateg').
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
    if(location.pathname!=='/userpg/coursename'){
        setdisplaycourses(()=>[])
    }
},[location.pathname])


// searching course in the search component
function handleSearch(){
    setload(true)
    setInterval(()=>{
        setload(false)
    },2000)
    fetch(`https://ecommerce-backend-rosy.vercel.app/search/${query}`)
    .then(response => response.json())
    .then(data=>setsearchdata(data.Coursearch))
}


// displaying course category in categories component
function displaycategory(categname){
    const filtercateg=courses.filter((course=>course.type === categname))
    sessionStorage.setItem('category',JSON.stringify(categname));
    setcategorytype(filtercateg)
}

//adding a cart 
function addtocart(addcourse){
    if (!cart.some(course => course._id === addcourse._id)) {
        setcart(prevaddmov => [...prevaddmov, addcourse]);
        setcartalert(true)
        setInterval(()=>{
            setcartalert(false)
        },5000)
        setgocartalert(true) 
        window.sessionStorage.setItem('cartlist',addcourse.course_name)
      }
}
//removing a cart
function removetocart(id){
    setcart(prev=>prev.filter(course=>course._id !== id))
    window.localStorage.removeItem('cartlist',courses.coursename)
    setgocartalert(true)
}

//check payment method
function handlePaymentMethod(e){
    const {name, value} = e.target
    setpaymeth(prevpaymeth=>{
        return{
            ...prevpaymeth,
                [name]: value
        }
    })
}
//redirecting to the payment section
function payment(cart){
    if(!paymeth.payment){
        setpayalert(true);
        setInterval(()=>{
            setpayalert(false);
        },3000)
    }
    else{
        setload(true);
        setInterval(()=>{
        setload(false);
    },3500)
        setlearn(prevaddmov => [...prevaddmov, cart]);
        setcart(prev=>[])
    }
}
    return(
        <Context.Provider value={{
            currentuser,
            // Login,
            emailref,passwordref,emailalert,pwdalert,setemailalert,setpwdalert,setpasswordref,setemailref,
            randompick,
            courses,
            light,
            handletheme,
            displaycoursedetail,
            displaycourses,
            displaycategory,
            categorytype,
            handleSearch,
            query,
            setquery,
            searchdata,
            cart,cartalert,gocartalert,addtocart,removetocart,
            load,setload,
             // payment state and functions
            payment,paymeth,setpaymeth,handlePaymentMethod,payalert,
            //learn state and functions
            learn
            }}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}