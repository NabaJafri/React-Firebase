import { signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { firbaseAuth } from '../firbase-config';

export default function Login() {
    const[email,setEmail] = useState("")
    const[password,setPassword]=useState("")
    const navigate = useNavigate();

    const handleLogIn = async ()=>{
        try{
            await signInWithEmailAndPassword(firbaseAuth,email,password);
        }
        catch(error)
        {
            console.log(error)
        }
    }
    onAuthStateChanged(firbaseAuth,(currentUser)=>{
        if(currentUser) navigate("/")
    })
  return (
    <section>
        <div className='login container'>
            <h1>Login</h1>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div className='button'>
                <button onClick={handleLogIn}>Login</button>
                <span>
                    Don't have an account? <Link to="/signup" className='link'>Signup</Link>
                </span>
            </div>
        </div>
    </section>
  )
}
