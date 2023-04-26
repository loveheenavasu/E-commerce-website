import { combineReducers } from 'redux';
import addItem from './cartSlice.tsx';
import removeItem from './cartSlice.tsx';
import increQty from './cartSlice.tsx';
import decreQty from './cartSlice.tsx';
import purchaseItem from './productSlice.tsx';
import userAddress from './userSlice.tsx';



const rootReducer = combineReducers({
    addItem,
    removeItem,
    increQty,
    decreQty,
    purchaseItem,
    userAddress,
});
    
export default rootReducer;
