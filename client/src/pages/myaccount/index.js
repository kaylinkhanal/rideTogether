import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'

function account() {
  const [userDetails, setUserDetails ] = useState({})
  const {id} = useSelector(state=>state.user)
  const fetchUserDetails = async()=> {
    const res =  await fetch('http://localhost:3001/users/'+id)
    const data = await res.json()

    setUserDetails(data)
  }
  useEffect(()=>{
    fetchUserDetails()
  },[])
  return (
    <div>
    <Link href='/resetpassword'>Change Password</Link>    
    </div>
  )
}

export default account