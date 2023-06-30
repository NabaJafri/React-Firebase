import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { firbaseAuth } from '../firbase-config';

export default function SignUp() {

    const[email,setEmail] = useState("")
    const[password,setPassword]=useState("")
    const navigate = useNavigate();

    const handleSignIn = async ()=>{
        try{
            await createUserWithEmailAndPassword(firbaseAuth,email,password);
        }
        catch(error)
        {
            console.log(error)
        }
    };

    onAuthStateChanged(firbaseAuth,(currentUser)=>{
        if(currentUser) navigate("/")
    })
  return (
    <section>
        <div className='signup container'>
          
            <h1>Signup</h1>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div className='button'>
                <button onClick={handleSignIn}>Signup</button>
                <span>
                    Already have an account? <Link to="/login" className='link'>Login </Link>
                </span>
            </div>

        </div>
    </section>
  )
}