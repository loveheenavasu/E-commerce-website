import { combineReducers } from 'redux';
import addItem from './cartSlice.tsx';
import removeItem from './cartSlice.tsx';


const rootReducer = combineReducers({
    addItem,
    removeItem
});
    
export default rootReducer;
