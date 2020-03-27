import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'array',
  initialState: {
    value: [],
  },
  reducers: {
    pushElement: (state, action) => {
      state.value.push(action.payload);
    },
    spliceArray: (state, action) => {
      if (typeof action.payload === 'object' && action.payload !== null) {
        var start = action.payload.start ? action.payload.start : 0;
        var deleteCount = action.payload.deleteCount ? action.payload.deleteCount : 0;
        var items = Array.isArray(action.payload.items) ? action.payload.items : [];

        state.value.splice(start, deleteCount, items);
      }
    },
    overwriteArray: (state, action) => {
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

export const { pushElement, spliceArray, overwriteArray } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.array.value)`
export const selectArray = state => state.array.value;

export default slice.reducer;
