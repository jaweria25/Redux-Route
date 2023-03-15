import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    auth : false,
    user:false,
    Name:'',
    Password:'',   
}

const authSlice=createSlice({

    name:'auth',
    initialState,

    reducers:{
        signinAction:(state,User)=>{
            console.log(User);
            console.log(User.payload.name);
            // console.log(User.name)
            state.user=true;
            state.Name=User.payload.name;
            state.Password=User.payload.password; 
            // localStorage.setItem("user", state.Name);
        },
        loginAction:(state,User)=>{
            if(state.Name===User.name && state.Password===User.password){
            state.auth=true;
            }
        },
        logoutAction:(state)=>{
            state.auth=false;
            localStorage.removeItem("user");
        },
    }
})
export const {loginAction , logoutAction, signinAction } = authSlice.actions;
export default authSlice.reducer;