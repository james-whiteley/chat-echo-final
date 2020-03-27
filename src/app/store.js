import { configureStore } from '@reduxjs/toolkit';
import arrayReducer from '../reducers/arraySlice';

export default configureStore({
  reducer: {
    array: arrayReducer
  },
});
