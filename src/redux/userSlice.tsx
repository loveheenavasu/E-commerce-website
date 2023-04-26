import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
      userAddress : (state,action) =>{
        const actionPayload = action.payload
        state.push(actionPayload)
        return state;
      }
    }
});

export const { userAddress } = userSlice.actions;

export default userSlice.reducer;
