import React ,{useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinAction} from "../redux/authSlice";



const Signin = () => {
    const [user,setUser]=useState({
        name:'',
        password:''
    });

    const handleEvent=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setUser((prev)=>{ 
        return{...prev, [name]:value}
        }
        )
        
        // console.log(user.name);
        // console.log(user.password);
    }  

    let navigate=useNavigate();
    const dispatch = useDispatch();
    const authStore = useSelector(state => state.auth);
    const signinHandler=()=>{
        if(user.name.length>3 && user.password.length>3){
        dispatch(signinAction(user));
        console.log(authStore);
            navigate('/login')
        }
        else{
            alert('Enter Name and password');
      }
    }
    return(<>
       <div className='container vh-100 d-flex justify-content-center align-items-center '>
        <div className='card w-50'>
            <div className='card-header bg-primary text-white fs-4 text-center'>Signup</div>
            <div className='card-body d-grid gap-3 '>
        <input type='text' name="name" value={user.name} placeholder='Enter Name' onChange={handleEvent}/>
        <input type='text' name="password" value={user.password} placeholder='Enter Password' onChange={handleEvent}/>
        <button className='btn  btn-primary text-white' onClick={signinHandler}>Signup</button>
   </div>
    </div>
    </div>
    </>)
}

export default Signin
