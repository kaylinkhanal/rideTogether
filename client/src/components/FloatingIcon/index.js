import * as React from "react";
import Box from "@mui/material/Box";

import { changeVehicleType } from "../../redux/reducers/userSlice";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/styles/floatingIcon.module.css";

export default function BasicSpeedDial() {
  const dispatch = useDispatch();
  const { userVehicleType } = useSelector((state) => state.user);
  const [openList, setOpenList] = useState(false);
  const [vehicleTypeList, setvehicleTypeList] = useState([]);
  const fetchVehiclesDetails = async () => {
    try{
      const res = await fetch("http://localhost:3001/vehicles");
      const data = await res.json();
      setvehicleTypeList(data.vehicleList);
    }catch(err){
      alert("something went wrong")
    }
   
  };
  useEffect(() => {
    fetchVehiclesDetails();
  }, []);

  const handleOnClick = () => {
    setOpenList(!openList);
  };
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <div onClick={handleOnClick} className={styles.float}>
        Vehicle type
      </div>
      {openList &&
        vehicleTypeList.length > 0 &&
        vehicleTypeList.map((item) => (
          <div
            onClick={() => dispatch(changeVehicleType(item))}
            style={{
              backgroundColor:
                item?._id == userVehicleType?._id ? "grey" : "black",
            }}
            className={styles.vehicles}
          >
            {JSON.stringify(item.vehicleType)}
            <Image
              src={"http://localhost:3001/getVechicleTypeImage/" + item._id}
              width={40}
              height={40}
              alt="Picture of the author"
            />
          </div>
        ))}
    </Box>
  );
}
