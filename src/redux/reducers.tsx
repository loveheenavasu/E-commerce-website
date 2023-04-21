import { combineReducers } from 'redux';
import addItem from './cartSlice.tsx';
import removeItem from './cartSlice.tsx';
import increQty from './cartSlice.tsx';
import decreQty from './cartSlice.tsx';

const rootReducer = combineReducers({
    addItem,
    removeItem,
    increQty,
    decreQty
});
    
export default rootReducer;
