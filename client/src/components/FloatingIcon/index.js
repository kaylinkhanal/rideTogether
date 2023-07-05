import * as React from 'react';
import Box from '@mui/material/Box';

import {changeVehicleType} from '../../redux/reducers/userSlice'
import { useEffect,useState } from 'react';
import Image from 'next/image';
import { useDispatch,useSelector } from 'react-redux';



export default function BasicSpeedDial() {
  const dispatch = useDispatch()
  const {userVehicleType} = useSelector(state=>state.user)
  const [openList, setOpenList] = useState(false)
  const [vehicleTypeList, setvehicleTypeList] = useState([])
  const fetchVehiclesDetails = async()=> {
    const res =  await fetch('http://localhost:3001/vehicles')
    const data = await res.json()
    setvehicleTypeList(data.vehicleList)
  }
  useEffect(()=>{
    fetchVehiclesDetails()
  },[])

const handleOnClick = ()=> {

  setOpenList(!openList)

}
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <div   onClick={handleOnClick} style={{backgroundColor:"#000", color:"#fff", padding:"20px"}}>
          Vehicle type
        </div>
         {openList && vehicleTypeList.length>0 && vehicleTypeList.map((item) => (
          <div onClick={()=>  dispatch(changeVehicleType(item))}  style={{backgroundColor: item._id == userVehicleType._id ? "lightgrey": null}}>
          {JSON.stringify(item.vehicleType)}
          <Image src={'http://localhost:3001/getVechicleTypeImage/'+item._id}   width={10}
      height={10}
      alt="Picture of the author"/>
          </div>
          )
         )}
    </Box>
  );
}