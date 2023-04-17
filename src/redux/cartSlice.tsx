import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      console.log("Current state:", JSON.stringify(state));
      const addedItem = action.payload;

      let itemExists = state.find((item) => item.id == addedItem.id);

      if (itemExists) {
        const updatedItems = state.map((item) => {
          if (item.id === addedItem.id) {
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
        let itemExists = state.find((item) => item.id == addedItem.id);
        if(itemExists){
          let updatedItemArray = state.filter((item)=> item.id != addItem.id) 
          return updatedItemArray;
        }
        return state
    },
  },
});

export const { addItem, removeItem } = counterSlice.actions;

export default counterSlice.reducer;
