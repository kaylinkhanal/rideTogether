import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../../styles/map.module.css'
import { getDistance } from 'geolib';
import Map from '@/components/Map';
import moment from 'moment'
import Drawer from '@/components/Drawer'
import { io } from 'socket.io-client';



export const socket = io('http://localhost:3001',{
  cors: {
    origin: "*"
  }
});

function MapDetails() {
  useEffect(()=>{
    socket.on('connection')
  },[])
    const { userVehicleType, id} = useSelector(state=>state.user)
    const { pickupCoord, dropCoord,dropAddress , pickupAddress,requestDate} = useSelector(state=>state.location)

  const distance = getDistance(pickupCoord, dropCoord) / 1000;
  const sendRideRequest = ()=>{

    socket.emit('rideRequest', {pickupCoord, dropCoord,dropAddress , pickupAddress,requestDate, userVehicleType,id})
  }
  return (
    <div>
      <Drawer/>
      <div className={styles.userDetails}>
        <h2 className={styles.heading}>Ride Details </h2>
        <table className={styles.mapDetails}>
          <tr>
            <td className={styles.td}>Distance</td>
            <td className={styles.td}>: {distance + "km"}</td>
          </tr>
          <tr>
            <td className={styles.td}>Selected Vehicle Type is </td>
            <td className={styles.td}>: {userVehicleType.vehicleType}</td>
          </tr>
          <tr>
            <td className={styles.td}> Max Available Seats is </td>
            <td className={styles.td}>: {userVehicleType.maxSeats} </td>
          </tr>
          <tr>
            <td className={styles.td}> Total Price is</td>
            <td className={styles.td}>
              : {userVehicleType.perKmPrice * distance}{" "}
            </td>
          </tr>
          <tr>
            <td className={styles.td}> Pickup Address </td>
            <td className={styles.td}>: {pickupAddress}</td>
          </tr>

          <tr>
            <td className={styles.td}>Destination Address:</td>
            <td className={styles.td}>: {dropAddress}</td>
          </tr>

          <tr>
            <td className={styles.td}>Requested Time:</td>
            <td className={styles.td}>:  requested: {moment(requestDate).fromNow()}</td>
          </tr>
        </table>
      </div>

      <div className={styles.map}>
      <Map showAllButtons={false} containerStyle={{width: '50vw',height: '50vh'}}/>
      
      </div>
      <div>
        <button onClick={sendRideRequest}>Send Ride Request</button>
      </div>
    </div>
  );
}

export default MapDetails;
