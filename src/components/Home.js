
import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { signinAction, loginAction } from "../redux/authSlice";
const Home = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const authStore = useSelector(state => state.auth)
  useEffect(()=>{
      if(localStorage.getItem('user')){
        console.log('--',authStore)
        let user=localStorage.getItem('user');
        dispatch(signinAction(user))
        dispatch(loginAction(user))
      }
    },[])

  return (
    <div className='d-flex flex-column vh-100 align-items-center justify-content-center'>
      <h1 className='text-primary'>Welcome to Home page</h1>
    </div>
  )
}

export default Home
