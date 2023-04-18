import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const counterSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const actionPayload = action.payload;
      let itemExists = state.find((item) => item.id == actionPayload.id);
      if (itemExists) {
        const updatedItems = state.map((item) => {
          if (item.id === actionPayload.id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
        return updatedItems;
      } else {
        let stateObject = { ...action.payload, qty: 1 };
        state.push(stateObject);
        return state;
      }
    },
    
    removeItem: (state,action) => {
        const actionPayload = action.payload;
        let itemExists = state.find((item) => item.id == actionPayload.id);
        if(itemExists){
          let updatedItemArray = state.filter((item)=> item.id != actionPayload.id) 
          return updatedItemArray;
        }
        return state
    },
  },
});

export const { addItem, removeItem } = counterSlice.actions;

export default counterSlice.reducer;
