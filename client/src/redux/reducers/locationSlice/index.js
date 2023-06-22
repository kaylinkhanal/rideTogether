import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  pickupCoord: {
 
  },
  pickupAddress: ''
};
const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, actions) => {
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
 
  }
});
export const { setLocation,changePickUpAddress } = LocationSlice.actions;
export default LocationSlice.reducer;