import BasicMenu from '@/components/MenuDropdown'
import React from 'react'
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
      
        <BasicMenu/>
        
    </div>
  )
}

export default Rider