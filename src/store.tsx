import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers.tsx';

const store = configureStore({
  reducer: rootReducer,
});


export default store;