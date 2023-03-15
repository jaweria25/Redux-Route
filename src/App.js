import React from 'react'
import Login from "./components/Login.js"
import Signin from './components/Signin.js'
import Home from './components/Home'
import {Routes,Route} from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute.js'
import Header from "./components/Header"
import Profile from './components/Profile.js'

const App = () => {
  return (

    <div>
    

 <Header/>
       <Routes>
    <Route exact path='/' element={<Home/>} />
            <Route exact path='/profile' element={<ProtectedRoute path="/profile"/>}>
								<Route exact path='/profile' element={<Profile/>}/>
						</Route>
            <Route exact path="/signin" element={<Signin/>}/>
            <Route exact path='login' element={<Login/>} />
          </Routes>

    </div>

  )
}

export default App
