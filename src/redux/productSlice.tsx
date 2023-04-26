import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
      purchaseItem : (state,action) =>{
      const itemExists = state.find((i) => i.id === action.payload.id);
      if (itemExists) {
        const updatedItems = state.map((item) => {
          if (item.id === action.payload.id) {
            return {...item,isPurchase:"true"};
          }
        return item;
        });
        return updatedItems;
      }
      else {
        let stateObject = { ...action.payload, isPurchase: "true" };
        state.push(stateObject);
        return state;
      }
    },
}
});

export const { purchaseItem } = productSlice.actions;

export default productSlice.reducer;
