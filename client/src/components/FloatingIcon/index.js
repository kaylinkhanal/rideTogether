import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect,useState } from 'react';
import Image from 'next/image';



export default function BasicSpeedDial() {
  const [vehicleTypeList, setvehicleTypeList] = useState([])
  const fetchUserDetails = async()=> {
    const res =  await fetch('http://localhost:3001/vehicles')
    const data = await res.json()
    setvehicleTypeList(data.vehicleList)
  }
  useEffect(()=>{
    fetchUserDetails()
  },[])
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>

      <SpeedDial
      direction='down'
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<TwoWheelerIcon/>}
      >
        {vehicleTypeList.map((item) => (
          <div>
            {item.vehicleType}
            <Image src={'http://localhost:3001/getVechicleTypeImage/'+item._id}
              width={30}
              height={30}
            />
          </div>
        ))}
      </SpeedDial>
    </Box>
  );
}