import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'string',
  initialState: {
    value: '',
  },
  reducers: {
    setString: (state, action) => {
      state.value = action.payload;
    }
  },
	// Map extra reducers to be carried out
	//extraReducers: {
  //  [counter.actions.increment]: (state, action) => {
  //    state.age += 1
  //  }
  //}
});

export const { setString } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.string.value)`
export const selectString = state => state.string.value;

export default slice.reducer;
