import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import stringReducer from '../features/string/stringSlice';
import arrayReducer from '../features/array/arraySlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    string: stringReducer,
    array: arrayReducer
  },
});
