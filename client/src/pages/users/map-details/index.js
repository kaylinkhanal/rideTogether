import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../../styles/users.module.css'
import { getDistance } from 'geolib';
import Map from '@/components/Map';
import moment from 'moment'

function MapDetails() {
    const { userVehicleType} = useSelector(state=>state.user)
    const { pickupCoord, dropCoord,dropAddress , pickupAddress,requestDate} = useSelector(state=>state.location)

const distance = getDistance( pickupCoord,  dropCoord )/1000

  return (
    <div>

<div className={styles.priceDiv}>
                  distance : {distance + 'km'  }<br/>
                    Selected Vehicle Type is: {userVehicleType?.vehicleType}<br/>
                    Max Available Seats is : {userVehicleType?.maxSeats} <br/>
                   Total Price is: {userVehicleType.perKmPrice * distance }<br/>
                   Pickup Address: {pickupAddress}<br/>
                   Destination Address: {dropAddress}
                   requested: {moment(requestDate).fromNow()}
                  </div>
                  <Map showAllButtons={false}/>
    </div>
  )
}

export default MapDetails


