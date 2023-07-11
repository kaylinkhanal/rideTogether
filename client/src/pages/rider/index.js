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
  const [initialRideDetails, setInitialRideDetails] = useState([])
  const [rideDetails, setRideDetails ] = useState({})
  const [recentRequest, setrecentRequest] = useState([])


  const {id} =useSelector(state=>state.user)
  const fetchRideDetails = async() => {
    const res = await  fetch('http://localhost:3001/rides')
    const data =  await res.json()
    setInitialRideDetails(data.rides)
  }
  useEffect(()=>{
    fetchRideDetails()
  },[])
  useEffect(()=>{
    socket.on('rideRequest', (data)=>{
      setRideDetails(data)
    })
  })


  const generateNotificationNumber = () => {
    const initialRideIds = initialRideDetails.map((item) => {
      return item._id
    })

  let count = 0
  let recentRequest
  if(rideDetails.length> 0){
     recentRequest = rideDetails.filter((item, index) => {  
      if(!initialRideIds.includes(item._id)){
        count ++
        return item
      }
    })

    
  }
  

  return {count,recentRequest}
    
  }

  
  return (
    <div>Rider
      <br/>
      <br/>
      <br/>
      <br/>

      <div className={styles.MenueDropdwn}/>
      <Drawer rideDetails={rideDetails} 

      count={()=>generateNotificationNumber().count}
      recentRequest={()=>generateNotificationNumber().recentRequest}
      />
      
 
        
    </div>
  )
}

export default Rider