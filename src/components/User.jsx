import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { firbaseAuth } from '../firbase-config';

export default function User() {
    const[user,setUser]=useState(undefined)
    const navigate = useNavigate();
    onAuthStateChanged(firbaseAuth,(currentUser)=>{
        if(currentUser)
        {
            setUser(currentUser)
        }
        else
        {
            navigate("/login")
        }
    })

  return (
    <div className='user-container'>
        <h1>Welcome! {user?.email}</h1>
        <button onClick={()=>signOut(firbaseAuth)}>Sign Out</button>
    </div>
  )
}
 