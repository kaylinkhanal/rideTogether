import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  pickupCoord: {
 
  },
  pickupAddress: '',
  dropCoord: {
 
  },
  requestDate: '',
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
      const DATE = new Date();
      return {
        ...state,
        dropAddress: actions.payload,
        requestDate: DATE
      }
    },
 
  }
});
export const { setPickUpCoords,changePickUpAddress,changeDropAddress, setDropCoords } = LocationSlice.actions;
export default LocationSlice.reducer;