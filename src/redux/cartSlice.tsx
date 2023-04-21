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
      return state.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
    },

    decreQty: (state, action: PayloadAction<Item>) => {
      const item = action.payload;
      const itemExists = state.find((i) => i.id === item.id);
      if (itemExists && item.qty === 1) {
        const updatedItems = state.filter((i) => i.id !== item.id);
        return updatedItems;
      } else {
       return state.map((i) => (i.id === item.id ? { ...i, qty: i.qty - 1 } : i));
      }
    },
  },
});

export const { addItem, removeItem, increQty, decreQty } = cartSlice.actions;

export default cartSlice.reducer;
