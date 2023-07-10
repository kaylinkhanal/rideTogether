import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../../styles/map.module.css";
import { getDistance } from "geolib";
import Map from "@/components/Map";
import moment from "moment";
import Drawer from "@/components/Drawer";
import { useRouter } from "next/router";
function MapDetails() {
  const router = useRouter();
  const { userVehicleType } = useSelector((state) => state.user);
  const { pickupCoord, dropCoord, dropAddress, pickupAddress, requestDate } =
    useSelector((state) => state.location);

  const distance = getDistance(pickupCoord, dropCoord) / 1000;

  return (
    <div className={styles.body}>
      <div className={styles.rideDetails}>
        <div className={styles.userDetails}>
          <h2 className={styles.heading}>Ride Details </h2>
          <table className={styles.mapDetails}>
            <tr>
              <td className={styles.td}>Distance</td>
              <td className={styles.td}>: {distance + "km"}</td>
            </tr>
            <tr>
              <td className={styles.td}>Selected Vehicle Type is </td>
              <td className={styles.td}>: {userVehicleType?.vehicleType}</td>
            </tr>
            <tr>
              <td className={styles.td}> Max Available Seats is </td>
              <td className={styles.td}>: {userVehicleType?.maxSeats} </td>
            </tr>
            <tr>
              <td className={styles.td}> Total Price is</td>
              <td className={styles.td}>
                : {userVehicleType?.perKmPrice * distance}{" "}
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
              <td className={styles.td}>
                : requested: {moment(requestDate).fromNow()}
              </td>
            </tr>
          
             
           
          </table>
          <div className={styles.buttons}>
           <button className={styles.cancel}
              onClick={() => router.push('/')}>Cancel Request</button>
              <button
                className={styles.confirm}
                onClick={() => socket.emit("rideRequest", "hello guys ")}
              >
                Send Request
              </button>
           </div>
        </div>

        <Map
          showAllButtons={false}
          containerStyle={{ width: "100vw", height: "100vh" }}
        />
      </div>
    </div>
  );
}

export default MapDetails;
