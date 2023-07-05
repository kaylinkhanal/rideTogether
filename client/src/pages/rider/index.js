import BasicMenu from '@/components/MenuDropdown'
import React from 'react'
import styles from '@/styles/users.module.css'
import Drawer from '@/components/Drawer'
import MenueDropdwn from '@/components/Drawer'
import { useEffect , useState} from 'react'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client';
export const socket = io('http://localhost:3001',{
  cors: {
    origin: "*"
  }
});
const Rider = () => {
  const [userDetails, setUserDetails ] = useState({})
  const {id} =useSelector(state=>state.user)
  useEffect(()=>{
    socket.on('rideRequest', (rideRequest)=>{
      console.log(rideRequest)
    })
  })
  const fetchUserDetails = async()=> {
    const res =  await fetch('http://localhost:3001/users/'+id)
    const data = await res.json()
    setUserDetails(data.userList)
  }
  useEffect(()=>{
    fetchUserDetails()
  },[])
  return (
    <div>Rider
      <div className={styles.MenueDropdwn}/>
      <Drawer/>
      
 
        
    </div>
  )
}

export default Rider