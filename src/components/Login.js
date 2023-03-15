
import React ,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction,  } from "../redux/authSlice";

const Login = () => {
    
   
    const [user,setUser]=useState({
        name:"",
        password:""
    });

    const handleEvent=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setUser((prev)=>{ 
        return{...prev, [name]:value}
        })
        }

   let navigate=useNavigate();
    const dispatch = useDispatch();
    const authStore = useSelector(state => state.auth);
    const loginHandler=()=>{
        if(user.name.length>3 && user.password.length>3){
            dispatch(loginAction(user));
            if(authStore.Name===user.name || authStore.Password===user.password ||  authStore.auth){
                localStorage.setItem("user",authStore.Name)
                navigate('/')
            }
            else{
                console.log('vluwq',user.name,'ccc',authStore.Name)
            alert('Wrong Info')
            }
        }
        else{
            alert('Enter Name')
        }
    }
    useEffect(()=>{console.log('values',authStore)},[authStore])
    return(
    <>
         <div className='container vh-100 d-flex justify-content-center align-items-center '>
         <div className='card w-50'>
         <div className='card-header bg-primary text-white fs-4 text-center'>Login</div>
         <div className='card-body d-grid gap-3 '>
         <input type='text' name="name"  value={user.name} placeholder='Enter Name' onChange={handleEvent}/>
         <input type='text'  name="password"  value={user.password} placeholder='Enter Password' onChange={handleEvent}/>
         <button className='btn  btn-primary text-white' onClick={loginHandler}>Login</button>
   </div>
    </div>
    </div>
    </>

    )
  
}

export default Login
