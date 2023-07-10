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
  const [rideDetails, setRideDetails ] = useState({})
  const {id} =useSelector(state=>state.user)
  useEffect(()=>{
    fetch('/')
  },[])
  useEffect(()=>{
    socket.on('rideRequest', (data)=>{
      setRideDetails(data)
    })
  })

 
  return (
    <div>Rider
      
      <div className={styles.MenueDropdwn}/>
      <Drawer rideDetails={rideDetails}/>
      
 
        
    </div>
  )
}

export default Rider