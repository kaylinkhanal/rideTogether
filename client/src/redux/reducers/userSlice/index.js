import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: '',
  id: '',
  role: '',
  phoneNumber: '',
  userVehicleType: {}
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
      return {
        ...state,
        token: actions.payload.token,
        id: actions.payload.id,
        role: actions.payload.role,
        phoneNumber:  actions.payload.phoneNumber
      }
    },
    resetUser:  (state, actions) => {
      return {...initialState}
   },
   changeVehicleType:  (state, actions) => {
    return {
      ...state,
      userVehicleType: actions.payload
    }
 },
  }
});
export const { setUserDetails,resetUser,changeVehicleType } = UserSlice.actions;
export default UserSlice.reducer;