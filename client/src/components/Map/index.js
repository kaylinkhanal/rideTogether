import React, { Component } from 'react';
import { GoogleMap, LoadScript, MarkerF,useLoadScript, Autocomplete } from '@react-google-maps/api';
import SearchBox from '../SearchBox'
import MenuDropdown from '../MenuDropdown'
import FloatingIcon from '../FloatingIcon'
import styles from '../../styles/users.module.css'
import MiniDrawer from '../Drawer';
import { useSelector } from 'react-redux';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = ()=> {
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDLfjmFgDEt9_G2LXVyP61MZtVHE2M3H-0",
    libraries: ['places']
     // ,
    // ...otherOptions
  })
  const handlePickUpChange =(e)=> {
    const locationCoords = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()

    }
    console.log(locationCoords)
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
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px"
              }}>
        <Autocomplete >
      <input
      placeholder="ENTER ADDRESS" />
      </Autocomplete>
        </div>
      
     
      </GoogleMap>

  )
  }else{
    return "loading..."
  }
 
}

export default Map
