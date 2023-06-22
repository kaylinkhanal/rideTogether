import React, { Component, useRef } from 'react';
import { GoogleMap, LoadScript, MarkerF,useLoadScript, Autocomplete } from '@react-google-maps/api';
import SearchBox from '../SearchBox'
import MenuDropdown from '../MenuDropdown'
import {setLocation ,changePickUpAddress} from '../../redux/reducers/locationSlice'
import FloatingIcon from '../FloatingIcon'
import InputBase from '@mui/material/InputBase';
import styles from '../../styles/users.module.css'
import MiniDrawer from '../Drawer';
import { useSelector, useDispatch } from 'react-redux';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};


const Map = ()=> {
  const ref = useRef(null)
  const dispatch =useDispatch()
  const {pickupAddress} =useSelector(state=>state.location)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDLfjmFgDEt9_G2LXVyP61MZtVHE2M3H-0",
    libraries: ['places']
     // ,
    // ...otherOptions
  })
  const handlePlaceChange = async() => {
    dispatch(changePickUpAddress(ref.current.value))
    const res = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${ref.current.value}&apiKey=4ecc4127475849f1aaf505f70ffa51a4`)
    const data =await res.json()
    const cords = {
      lat: data.features[0].properties.lat,
      lng: data.features[0].properties.lon
    }
    dispatch(setLocation(cords))
    
  }
  const handlePickUpChange =async(e)=> {
    const locationCoords = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()

    }
    const res = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${locationCoords.lat}&lon=${locationCoords.lng}&apiKey=a1dd45a7dfc54f55a44b69d125722fcb`)
    const data =await res.json()
    dispatch(changePickUpAddress(data.features[0].properties.formatted))
   dispatch(setLocation(locationCoords))
  }
  const {pickupCoord} = useSelector(state=>state.location)
  if(isLoaded){
    return (
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={pickupCoord}
        zoom={14}
        // onLoad={onLoad}
      >
         <MarkerF
         draggable={true}
         onDragEnd={handlePickUpChange}
          // onLoad={onLoad}
          position={pickupCoord}
        />
        <div className={styles.searchBox}> 
       
 
       <div className={styles.basicMenu}>
    <MenuDropdown/>
    <FloatingIcon/>
   
    </div>
   
        </div>
        <div  style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                padding: `0 12px`,
                borderRadius: `3px`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "40%",
                marginTop:'-30px'
              }}>
        <Autocomplete onPlaceChanged={()=> handlePlaceChange()} >
      <input
      ref={ref}
      onChange={(e)=>  dispatch(changePickUpAddress(e.target.value))}
      placeholder="ENTER ADDRESS" value={pickupAddress} />
      </Autocomplete>
        </div>
      
     
      </GoogleMap>

  )
  }else{
    return "loading..."
  }
 
}

export default Map
