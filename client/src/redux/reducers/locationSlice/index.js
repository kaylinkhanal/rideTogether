import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  pickupCoord: {
 
  },
  pickupAddress: '',
  dropCoord: {
 
  },
  dropAddress: ''
};
const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setPickUpCoords: (state, actions) => {
      return {
        ...state,
        pickupCoord: actions.payload
      }
    },
    changePickUpAddress: (state, actions) => {
      return {
        ...state,
        pickupAddress: actions.payload
      }
    },
    setDropCoords: (state, actions) => {
      return {
        ...state,
        dropCoord: actions.payload
      }
    },
    changeDropAddress: (state, actions) => {
      return {
        ...state,
        dropAddress: actions.payload
      }
    },
 
  }
});
export const { setPickUpCoords,changePickUpAddress,changeDropAddress, setDropCoords } = LocationSlice.actions;
export default LocationSlice.reducer;