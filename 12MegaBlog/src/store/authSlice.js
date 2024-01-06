import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false ,
    userData : null
}

const authSlice = createSlice ({
name : "auth",
initialState,
reducers: {
    login: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        status: true,
        userData: action.payload,
      };
    },
    logout: (state) => {
      return {
        ...state,
        status: false,
        userData: null,
      };
    }
  }
  
}
)

export const {login,logout} = authSlice.actions
export default authSlice.reducer;