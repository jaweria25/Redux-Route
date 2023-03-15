
import { useSelector } from "react-redux";

import {  Outlet, Navigate,  } from "react-router-dom";

const ProtectedRoute=(props)=>{
    // const [auth,setAuth]=useState(false);
    // let history = useHistory();
    // history.push(props.path)
    const authStore = useSelector(state => state.auth);
    console.log('Protected authStore --> ',authStore.auth,props.path)
    return(<>{
        authStore.auth?<Outlet/>: <Navigate to="/login" />
    }</>)
}
export default ProtectedRoute;
