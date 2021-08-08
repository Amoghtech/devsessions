import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'single',
  initialState: {
    data: null,
  },
  reducers: {
    setdata(state, action) {
      state.data = action.payload;
    },
    resetdata(state) {
      state.data = null;
    },
  },
});

export const singlesliceactions = slice.actions;
export default slice.reducer;
