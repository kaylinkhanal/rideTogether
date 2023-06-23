import BasicMenu from '@/components/MenuDropdown'
import React from 'react'
import styles from '@/styles/users.module.css'
import Drawer from '@/components/Drawer'
import MenueDropdwn from '@/components/Drawer'
import { useEffect , useState} from 'react'
import { useSelector } from 'react-redux'
const Rider = () => {
  const [userDetails, setUserDetails ] = useState({})
  const {id} =useSelector(state=>state.user)


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
<<<<<<< HEAD
      <div className={styles.MenueDropdwn}/>
      <Drawer/>
=======
      
        <BasicMenu/>
>>>>>>> dc4d3c16e3329d2a234f5e44b68b5c1e9c408287
        
    </div>
  )
}

export default Rider