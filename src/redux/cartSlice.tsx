import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  name: string;
  qty: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Item[],
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
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
      

    removeItem: (state, action: PayloadAction<Item>) => {
      const item = action.payload;
      const updatedItems = state.filter((i) => i.id !== item.id);
      return updatedItems;
    },


    increQty: (state, action: PayloadAction<Item>) => {
      const item = action.payload;
      const index = state.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        state[index].qty += 1;
      }
    },

    decreQty: (state, action: PayloadAction<Item>) => {
      const item = action.payload;
      const itemIndex = state.findIndex((i) => i.id === item.id);
    
      if (itemIndex !== -1 && item.qty === 1) {
        state.splice(itemIndex, 1);
      } else {
        state[itemIndex].qty--;
      }
    },
    
  },
});



export const { addItem, removeItem, increQty, decreQty } = cartSlice.actions;


export default cartSlice.reducer;


