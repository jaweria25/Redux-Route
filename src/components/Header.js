import React from 'react'
import {Link} from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { logoutAction } from "../redux/authSlice";


const Header = () => {
    const dispatch = useDispatch();
    const authStore = useSelector(state => state.auth);
    const logoutHandler=()=>{
    console.log('Logout authStore --> ',authStore)
    dispatch(logoutAction());
    window.history.back()
    }

  return (
    <div>
      <nav>
            <ul >
                <li><Link to="/">Home</Link></li>
                {authStore.user &&<>
                <li><Link  to="/profile">Profile</Link></li>
                {!authStore.auth&&<li><Link to="/login">Login</Link></li>}
                {authStore.auth&&<li onClick={logoutHandler}>Logout</li>}
                </>}
                {!authStore.user&&<li><Link to="/signin">Signin</Link></li>
                }
             </ul>
            </nav>
    </div>
  )
}

export default Header
