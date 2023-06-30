import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import SignUp from './components/SignUp'
import Login from './components/Login'
import User from './components/User'

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/" element={<User/>}/>
    </Routes>
   </BrowserRouter>
  )
}
